import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { KNOWLEDGE_BASE } from '../server/data/knowledgeBase.js';
import { QUIZ_DATABASE } from '../server/data/quizzes.js';
import { askGemini } from '../server/services/geminiService.js';
import { generateKnowledgeResponse } from '../server/services/knowledgeEngine.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY');
  res.json({
    status: 'online',
    product: 'BioBot – Computational Biology Assistant API',
    mode: hasKey ? 'Live AI (Google Gemini Connected)' : 'Educational Demo Mode (Built-in Knowledge Engine)',
    hasApiKey: hasKey,
    timestamp: new Date().toISOString()
  });
});

// Curriculum & Concepts endpoints
app.get('/api/concepts', (req, res) => {
  res.json({
    total: KNOWLEDGE_BASE.length,
    concepts: KNOWLEDGE_BASE
  });
});

app.get('/api/concepts/:id', (req, res) => {
  const concept = KNOWLEDGE_BASE.find(c => c.id === req.params.id);
  if (!concept) {
    return res.status(404).json({ error: 'Concept not found' });
  }
  res.json(concept);
});

// Quiz endpoints
app.get('/api/quizzes', (req, res) => {
  const { topic, difficulty } = req.query;
  let filtered = [...QUIZ_DATABASE];

  if (topic && topic !== 'all') {
    filtered = filtered.filter(q => q.topicId === topic);
  }
  if (difficulty && difficulty !== 'all') {
    filtered = filtered.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
  }

  res.json({
    total: filtered.length,
    quizzes: filtered
  });
});

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, explainSimply = false, educationalLevel = 'College Undergrad', topic = null } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const response = await askGemini(messages, {
      explainSimply,
      educationalLevel,
      topic
    });

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'An internal error occurred while processing your request.',
      details: error.message
    });
  }
});

// Direct Sequence Analysis endpoint
app.post('/api/analyze-sequence', (req, res) => {
  const { sequence } = req.body;
  if (!sequence || typeof sequence !== 'string') {
    return res.status(400).json({ error: 'Valid biological sequence string is required.' });
  }
  const result = generateKnowledgeResponse(sequence);
  res.json(result);
});

export default app;
