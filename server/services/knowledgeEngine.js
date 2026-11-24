import { KNOWLEDGE_BASE } from '../data/knowledgeBase.js';
import { QUIZ_DATABASE } from '../data/quizzes.js';

// Standard Genetic Code Table
const GENETIC_CODE = {
  'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
  'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
  'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met (START)',
  'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
  'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
  'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
  'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
  'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
  'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
  'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
  'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
  'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
  'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
  'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
  'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
  'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly',
};

// Check if string looks like a DNA or RNA sequence
function detectSequence(text) {
  const clean = text.trim().toUpperCase().replace(/[\s\r\n\t]/g, '');
  if (/^[ACGTU]{6,}$/.test(clean)) {
    return clean;
  }
  const match = text.match(/\b([ACGTU]{6,})\b/i);
  return match ? match[1].toUpperCase() : null;
}

// Analyze DNA/RNA sequence
function analyzeSequence(rawSeq) {
  const isRNA = rawSeq.includes('U');
  const dnaSeq = isRNA ? rawSeq.replace(/U/g, 'T') : rawSeq;
  const rnaSeq = isRNA ? rawSeq : rawSeq.replace(/T/g, 'U');
  
  const length = dnaSeq.length;
  const countA = (dnaSeq.match(/A/g) || []).length;
  const countT = (dnaSeq.match(/T/g) || []).length;
  const countG = (dnaSeq.match(/G/g) || []).length;
  const countC = (dnaSeq.match(/C/g) || []).length;
  const gcContent = (((countG + countC) / length) * 100).toFixed(1);
  
  // Complement
  const complementMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  const compDNA = dnaSeq.split('').map(b => complementMap[b] || 'N').join('');
  const reverseComp = compDNA.split('').reverse().join('');
  
  // Translation
  const codons = [];
  const peptides = [];
  for (let i = 0; i <= rnaSeq.length - 3; i += 3) {
    const triplet = rnaSeq.substring(i, i + 3);
    codons.push(triplet);
    peptides.push(GENETIC_CODE[triplet] || 'Unknown');
  }

  return `### 🧬 Sequence Analysis Results

I detected a biological sequence (**${length} bp**):

\`\`\`
5' - ${dnaSeq} - 3'
\`\`\`

#### 📊 Composition & Properties:
- **Sequence Type:** ${isRNA ? 'RNA' : 'DNA'}
- **Total Length:** ${length} nucleotides
- **GC Content:** **${gcContent}%** *(High GC indicates higher thermal stability & higher melting temperature)*
- **Base Counts:** A: ${countA} | T/U: ${countT} | G: ${countG} | C: ${countC}

#### 🔄 Complementary & Transcribed Strands:
- **Complementary Strand (3'→5'):** \`${compDNA}\`
- **Reverse Complement (5'→3'):** \`${reverseComp}\`
- **Transcribed mRNA (5'→3'):** \`${rnaSeq}\`

#### 🔬 In Silico Translation (Reading Frame 1):
${codons.length > 0 ? `
| Codon # | Triplet | Amino Acid |
|---|---|---|
${codons.map((c, idx) => `| ${idx + 1} | \`${c}\` | **${peptides[idx]}** |`).join('\n')}

**Synthesized Peptide Sequence:**
\`${peptides.join(' — ')}\`
` : '_Sequence is under 3 nucleotides; cannot form complete codons._'}

*Tip: In computational biology, sequence analysis like this is automated using tools like EMBOSS, BioPython, and BLAST to discover open reading frames (ORFs).*`;
}

// Main rule-based knowledge engine
export function generateKnowledgeResponse(query, options = {}) {
  const { explainSimply = false, educationalLevel = 'College', topic = null } = options;
  const lower = query.toLowerCase().trim();

  // 1. Check for raw biological sequence
  const detectedSeq = detectSequence(query);
  if (detectedSeq && (lower.includes('translat') || lower.includes('transcrib') || lower.includes('gc') || lower.includes('analy') || detectedSeq === query.trim().toUpperCase())) {
    return {
      reply: analyzeSequence(detectedSeq),
      suggestedQuestions: [
        "What is the biological role of GC content in PCR?",
        "How do ribosomes know where to start translation?",
        "Can you test my knowledge on the Central Dogma?"
      ],
      topicMatch: "Central Dogma of Molecular Biology",
      mode: "Sequence Analyzer Tool"
    };
  }

  // 2. Check for quiz / test requests
  if (lower.includes('quiz') || lower.includes('test me') || lower.includes('question') && lower.includes('ask me')) {
    const randomQuiz = QUIZ_DATABASE[Math.floor(Math.random() * QUIZ_DATABASE.length)];
    return {
      reply: `### 🎯 Quick Knowledge Check: ${randomQuiz.topicTitle} (${randomQuiz.difficulty} Level)

**Question:**
> ${randomQuiz.question}

**Options:**
${randomQuiz.options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}

*(Reply with your choice, or head over to the **Quiz Zone** tab to test your mastery across all 12 modules!)*`,
      suggestedQuestions: [
        `What is the correct answer to: "${randomQuiz.question.slice(0, 35)}..."?`,
        "Give me another quiz question",
        "Take me to the full Quiz Zone"
      ],
      topicMatch: randomQuiz.topicTitle,
      mode: "Interactive Quiz Mode"
    };
  }

  // 3. Search the 12 knowledge areas by keyword matching
  let bestMatch = null;
  let highestScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    const titleWords = item.title.toLowerCase().split(/\s+/);
    for (const w of titleWords) {
      if (w.length > 2 && lower.includes(w)) score += 3;
    }
    if (lower.includes(item.id.replace(/-/g, ' '))) score += 5;
    if (item.keyTerms.some(kt => lower.includes(kt.term.toLowerCase()))) score += 4;
    if (lower.includes(item.category.toLowerCase())) score += 2;

    // Specific biology keywords
    if (item.id === 'intro-comp-bio' && (lower.includes('computational bio') || lower.includes('in silico') || lower.includes('what is comp'))) score += 5;
    if (item.id === 'bioinformatics-applications' && (lower.includes('bioinformatics') || lower.includes('docking') || lower.includes('vaccine') || lower.includes('application'))) score += 5;
    if (item.id === 'dna-rna-structure' && (lower.includes('dna') || lower.includes('rna') || lower.includes('helix') || lower.includes('chargaff') || lower.includes('nucleotide') || lower.includes('base pair'))) score += 5;
    if (item.id === 'protein-structure-functions' && (lower.includes('protein') || lower.includes('amino acid') || lower.includes('folding') || lower.includes('sickle cell') || lower.includes('alpha helix') || lower.includes('tertiary'))) score += 5;
    if (item.id === 'central-dogma' && (lower.includes('central dogma') || lower.includes('crick') || lower.includes('flow of information') || lower.includes('reverse transcriptase'))) score += 6;
    if (item.id === 'dna-replication' && (lower.includes('replication') || lower.includes('helicase') || lower.includes('polymerase') || lower.includes('okazaki') || lower.includes('leading strand') || lower.includes('lagging strand'))) score += 6;
    if (item.id === 'transcription-translation' && (lower.includes('transcription') || lower.includes('translation') || lower.includes('ribosome') || lower.includes('mrna') || lower.includes('trna') || lower.includes('spliceosome') || lower.includes('intron'))) score += 6;
    if (item.id === 'sequence-alignment' && (lower.includes('blast') || lower.includes('alignment') || lower.includes('smith-waterman') || lower.includes('needleman-wunsch') || lower.includes('blosum') || lower.includes('gap penalty') || lower.includes('e-value'))) score += 7;
    if (item.id === 'genomics-proteomics' && (lower.includes('genomic') || lower.includes('proteomic') || lower.includes('mass spec') || lower.includes('rna-seq') || lower.includes('ptm') || lower.includes('transcriptome'))) score += 6;
    if (item.id === 'phylogenetic-trees' && (lower.includes('phylogen') || lower.includes('evolution') || lower.includes('tree') || lower.includes('upgma') || lower.includes('neighbor-joining') || lower.includes('clade') || lower.includes('molecular clock'))) score += 6;
    if (item.id === 'biological-databases' && (lower.includes('database') || lower.includes('ncbi') || lower.includes('genbank') || lower.includes('uniprot') || lower.includes('pdb') || lower.includes('fasta') || lower.includes('pubmed'))) score += 6;
    if (item.id === 'ai-in-biology' && (lower.includes('ai') || lower.includes('artificial intelligence') || lower.includes('alphafold') || lower.includes('machine learning') || lower.includes('deepmind') || lower.includes('deep learning') || lower.includes('drug design') || lower.includes('crispr'))) score += 7;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // 4. If user explicitly toggled "Explain Simply" or requested ELI5
  const isSimply = explainSimply || lower.includes('simply') || lower.includes('simple') || lower.includes('eli5') || lower.includes('easy') || lower.includes('beginner');

  if (bestMatch && highestScore >= 3) {
    let replyText = "";
    if (isSimply) {
      replyText = `### 💡 ${bestMatch.title} — Explained Simply

${bestMatch.simpleExplanation}

#### 🌟 Quick Biological Analogy:
${bestMatch.summary}

#### 🏥 Real-Life Biological Example:
> ${bestMatch.realLifeExample}

#### 🔑 3 Key Terms You Should Know:
${bestMatch.keyTerms.map(k => `- **${k.term}:** ${k.definition}`).join('\n')}

---
*Would you like a deeper technical dive, or want to test your understanding with a quick quiz?*`;
    } else {
      replyText = `${bestMatch.detailed}

---
### 🔬 Real-Life Application
> **${bestMatch.realLifeExample}**

### 📚 Core Terminology
${bestMatch.keyTerms.map(k => `- **${k.term}:** ${k.definition}`).join('\n')}`;
    }

    return {
      reply: replyText,
      suggestedQuestions: bestMatch.suggestedQuestions,
      topicMatch: bestMatch.title,
      mode: isSimply ? "Simplified Mode (ELI5)" : "Comprehensive College Mode"
    };
  }

  // 5. Friendly conversational or fallback response
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('who are you')) {
    return {
      reply: `### 👋 Greetings! I am BioBot
Your intelligent AI companion for learning **Computational Biology** and **Bioinformatics**.

I can help you explore molecular concepts, compare biological algorithms, analyze DNA sequences, and test your knowledge.

#### 🧬 What would you like to explore today?
- **DNA, RNA & Central Dogma:** How life stores and translates genetic code.
- **Algorithms:** BLAST, Needleman-Wunsch & Smith-Waterman sequence alignment.
- **AI in Biology:** How AlphaFold revolutionizes 3D protein structure prediction.
- **Sequence Analyzer:** Paste any DNA string (e.g. \`ATGCGATCGCTA\`) and I'll transcribe, translate, and calculate GC content!

Select one of the suggested prompts below or ask any question!`,
      suggestedQuestions: [
        "Explain the Central Dogma of Molecular Biology simply",
        "How does AlphaFold predict 3D protein structures?",
        "What is the difference between BLAST and Smith-Waterman?",
        "Analyze sequence ATGGCCATTGTAATGGGCCGCTGAAAGGGT"
      ],
      topicMatch: "General Introduction",
      mode: "Conversational Guide"
    };
  }

  // General fallback with helpful educational guidance
  return {
    reply: `### 🔬 Computational Biology Inquiry

I analyzed your query: *"**${query}**"*.

In Computational Biology, problems are framed using data-driven algorithms, biological sequences, and biophysical models. Here are the core areas related to your inquiry:

1. **Molecular Foundations:** DNA/RNA nucleic acids, amino acid structures, and the Central Dogma (Transcription & Translation).
2. **Computational Algorithms:** Dynamic programming (Needleman-Wunsch, Smith-Waterman) and heuristic search (NCBI BLAST).
3. **High-Throughput Omics:** Genomics (Next-Gen Sequencing, RNA-Seq) and Proteomics (Mass Spectrometry).
4. **Bioinformatics Infrastructure:** NCBI GenBank, UniProt, and the Protein Data Bank (PDB).
5. **Modern AI Frontiers:** DeepMind AlphaFold, generative molecular diffusion models, and CRISPR guide optimization.

> 💡 **Tip:** You can paste a biological sequence (e.g., \`ATGCGATCGATC\`) to see real-time translation, or click the **"Explain Simply"** toggle for beginner-friendly analogies!`,
    suggestedQuestions: [
      "Explain the Central Dogma in simple terms",
      "How does BLAST sequence alignment work?",
      "What are the 4 levels of protein structure?",
      "Test my knowledge with a quiz question"
    ],
    topicMatch: "General Computational Biology",
    mode: "Educational Assistant"
  };
}
