import { generateKnowledgeResponse } from './knowledgeEngine.js';

const SYSTEM_INSTRUCTION = `You are BioBot, an elite, friendly, and engaging AI educational assistant specialized in Computational Biology and Bioinformatics.
Your mission is to help students (from beginner high school to undergraduate level) deeply understand:
1. Introduction to Computational Biology
2. Bioinformatics and its applications
3. DNA and RNA structure
4. Protein structure and functions
5. Central Dogma of Molecular Biology
6. DNA Replication
7. Transcription and Translation
8. Sequence Alignment (Needleman-Wunsch, Smith-Waterman, BLAST, PAM/BLOSUM)
9. Genomics and Proteomics (Next-Gen Sequencing, RNA-Seq, Mass Spectrometry)
10. Phylogenetic Trees (UPGMA, Neighbor-Joining, Maximum Parsimony)
11. Biological Databases (NCBI, GenBank, UniProt, PDB, Ensembl)
12. Applications of AI in Biology (AlphaFold, generative drug design, CRISPR)

Follow these educational pedagogical rules:
- Always be encouraging, scientifically accurate, and structured.
- Use clear Markdown formatting with headers, bullet points, and code blocks for sequences or algorithms.
- Provide real-life biological or biomedical examples (e.g., sickle cell disease, COVID mRNA vaccines, cystic fibrosis, cancer genomics).
- Provide clear analogies when explaining complex abstract concepts.
- When the user asks to "Explain Simply" or toggles beginner mode, provide an intuitive ELI5 explanation with relatable everyday metaphors (e.g. recipes, building blocks, library catalog, zippers).
- At the end of responses, suggest 2-3 engaging follow-up questions or offer a quick mini-quiz.`;

export async function askGemini(messages, options = {}) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  const { explainSimply = false, educationalLevel = 'College Undergrad' } = options;

  // If no API key configured, use built-in neural knowledge engine
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY' || apiKey.trim() === '') {
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';
    const fallbackResult = generateKnowledgeResponse(lastUserMsg, options);
    return {
      reply: fallbackResult.reply,
      suggestedQuestions: fallbackResult.suggestedQuestions,
      topicMatch: fallbackResult.topicMatch,
      provider: 'Built-in Educational Knowledge Engine (Offline Mode)',
      isDemoMode: true
    };
  }

  // If API key is provided, call Gemini REST API
  try {
    const model = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    let customizedSystemInstruction = SYSTEM_INSTRUCTION;
    if (explainSimply) {
      customizedSystemInstruction += "\n\nCRITICAL OVERRIDE: The user requested 'Explain Simply' mode. Explain in simple, crystal-clear, non-jargon language using vivid real-life analogies like you are teaching a curious beginner or high schooler.";
    }
    customizedSystemInstruction += `\nTarget Educational Audience Level: ${educationalLevel}.`;

    // Map conversation history to Gemini contents format
    const contents = [];
    
    // Add system instruction as first user/model turn if model supports or prepend
    const formattedHistory = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    // Build payload
    const payload = {
      system_instruction: {
        parts: [{ text: customizedSystemInstruction }]
      },
      contents: formattedHistory,
      generationConfig: {
        temperature: explainSimply ? 0.4 : 0.7,
        maxOutputTokens: 1500,
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.warn(`[Gemini API Error ${response.status}]: ${errBody}. Falling back to knowledge engine.`);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!replyText) {
      throw new Error("No text response in Gemini payload");
    }

    // Extract dynamic follow-up suggestions or use defaults
    const suggestedQuestions = [
      "Can you give me a real-life medical example of this?",
      "Can you test my knowledge on this topic with a quiz?",
      "Explain this more simply with an analogy"
    ];

    return {
      reply: replyText,
      suggestedQuestions,
      provider: `Google Gemini AI (${model})`,
      isDemoMode: false
    };
  } catch (error) {
    console.warn("[Gemini API Fallback Triggered]:", error.message);
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';
    const fallbackResult = generateKnowledgeResponse(lastUserMsg, options);
    return {
      reply: fallbackResult.reply,
      suggestedQuestions: fallbackResult.suggestedQuestions,
      topicMatch: fallbackResult.topicMatch,
      provider: 'Built-in Educational Knowledge Engine (Offline Fallback)',
      isDemoMode: true,
      notice: "Live API unavailable or offline; served by high-fidelity Knowledge Engine."
    };
  }
}
