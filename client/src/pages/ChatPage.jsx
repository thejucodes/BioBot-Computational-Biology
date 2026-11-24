import React, { useState, useEffect, useRef } from 'react';
import {
  Send, Trash2, Plus, Sparkles, Volume2, VolumeX, Copy, Check,
  RefreshCw, Bot, User, HelpCircle, ChevronRight, Zap, BookOpen, AlertCircle
} from 'lucide-react';
import MarkdownRenderer from '../components/MarkdownRenderer';

const INITIAL_SUGGESTIONS = [
  "Explain the Central Dogma in simple terms",
  "How does AlphaFold predict 3D protein structures?",
  "What is the difference between Needleman-Wunsch and BLAST?",
  "Analyze this sequence: ATGCGATCGATCGCTA",
  "How did bioinformatics help create COVID-19 mRNA vaccines?",
  "What is the biological importance of GC content in DNA?"
];

const WELCOME_MESSAGE = {
  id: 'msg-welcome',
  role: 'assistant',
  content: `### 👋 Welcome to BioBot!
I am your **Computational Biology & Bioinformatics Educational Assistant**.

Here are some things you can ask me:
- **Core Molecular Concepts:** DNA, RNA, Transcription, Translation, Protein Folding.
- **Algorithms:** BLAST, Smith-Waterman vs Needleman-Wunsch, Phylogenetic Trees.
- **Sequence Analysis:** Paste a DNA string like \`ATGCGATCGCTA\` for instant GC% calculation, transcription, and translation!
- **AI Frontiers:** AlphaFold, generative molecular diffusion models, CRISPR off-target analysis.

> 💡 **Pro-Tip:** Toggle **"Explain Simply"** at the top right if you want intuitive real-life analogies without heavy jargon!`,
  suggestedQuestions: [
    "Explain the Central Dogma of Molecular Biology simply",
    "How does the BLAST sequence alignment algorithm work?",
    "Why is DNA double-stranded while RNA is single-stranded?",
    "Test my knowledge with a quiz question"
  ],
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export default function ChatPage({ initialPrompt, clearInitialPrompt }) {
  // Chat state
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('biobot_chat_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error(e);
    }
    return [WELCOME_MESSAGE];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [explainSimply, setExplainSimply] = useState(false);
  const [educationalLevel, setEducationalLevel] = useState('College Undergrad');
  const [activeVoiceMsgId, setActiveVoiceMsgId] = useState(null);
  const [copiedMsgId, setCopiedMsgId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Persist messages in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('biobot_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  // Handle pre-filled prompt passed from homepage or concepts page
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSend(initialPrompt);
      if (clearInitialPrompt) clearInitialPrompt();
    }
  }, [initialPrompt]);

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    setError(null);
    setInput('');

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Prepare request payload
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
          explainSimply,
          educationalLevel
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();

      const botMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: data.reply || "I couldn't generate a response. Please try again.",
        suggestedQuestions: data.suggestedQuestions || [],
        topicMatch: data.topicMatch,
        provider: data.provider,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      setError('Unable to reach BioBot server. Please ensure the backend is running on port 5000.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setMessages([WELCOME_MESSAGE]);
    setError(null);
    inputRef.current?.focus();
  };

  const handleClearHistory = () => {
    if (confirm("Are you sure you want to clear your chat history?")) {
      handleNewChat();
    }
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(id);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

  // Text-to-speech
  const handleReadAloud = (text, id) => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported by your browser.");
      return;
    }

    if (activeVoiceMsgId === id) {
      window.speechSynthesis.cancel();
      setActiveVoiceMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner speech
    const cleanSpeech = text
      .replace(/###\s+/g, '')
      .replace(/##\s+/g, '')
      .replace(/#\s+/g, '')
      .replace(/\*\*/g, '')
      .replace(/```[\s\S]*?```/g, 'Code or sequence block omitted.')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/>\s+/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onend = () => setActiveVoiceMsgId(null);
    utterance.onerror = () => setActiveVoiceMsgId(null);

    setActiveVoiceMsgId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Active suggestions: use the latest bot message's suggestions, or initial ones
  const lastBotMessage = [...messages].reverse().find(m => m.role === 'assistant');
  const activeSuggestions = (lastBotMessage && lastBotMessage.suggestedQuestions && lastBotMessage.suggestedQuestions.length > 0)
    ? lastBotMessage.suggestedQuestions
    : INITIAL_SUGGESTIONS;

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 h-[calc(100vh-5rem)] flex flex-col">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl border border-sage/40 p-3 sm:p-4 mb-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        {/* Left: Title & Mode */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-forest text-white flex items-center justify-center shadow-sm">
            <Bot className="w-5 h-5 text-mint" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-extrabold text-forest-dark">BioBot Assistant</h2>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-mint text-forest uppercase">
                Active Session
              </span>
            </div>
            <p className="text-xs text-slate-500">Ask any question or paste a DNA/RNA sequence</p>
          </div>
        </div>

        {/* Right: Educational Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Explain Simply Toggle */}
          <button
            onClick={() => setExplainSimply(!explainSimply)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              explainSimply
                ? 'bg-emerald text-white border-emerald shadow-sm'
                : 'bg-offwhite text-slate-700 border-sage/50 hover:bg-mint/40'
            }`}
            title="When active, BioBot uses simple everyday analogies without heavy biological jargon"
          >
            <Sparkles className={`w-3.5 h-3.5 ${explainSimply ? 'text-white' : 'text-emerald'}`} />
            <span>Explain Simply: {explainSimply ? 'ON (ELI5)' : 'OFF'}</span>
          </button>

          {/* Educational Level Selector */}
          <select
            value={educationalLevel}
            onChange={(e) => setEducationalLevel(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-offwhite border border-sage/50 text-slate-800 focus:outline-none focus:border-emerald"
          >
            <option value="High School">Level: High School</option>
            <option value="College Undergrad">Level: Undergrad</option>
            <option value="Advanced Research">Level: Advanced</option>
          </select>

          {/* New Chat Button */}
          <button
            onClick={handleNewChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-offwhite transition shadow-2xs"
            title="Start a fresh conversation"
          >
            <Plus className="w-3.5 h-3.5 text-forest" />
            <span className="hidden sm:inline">New Chat</span>
          </button>

          {/* Clear Button */}
          <button
            onClick={handleClearHistory}
            className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
            title="Clear conversation history"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Messages Container */}
      <div className="flex-1 bg-white rounded-2xl border border-sage/40 shadow-md p-4 sm:p-6 overflow-y-auto space-y-6">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 sm:gap-4 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                  isUser
                    ? 'bg-forest text-white'
                    : 'bg-gradient-to-br from-emerald to-forest text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4 text-mint" /> : <Bot className="w-4 h-4 text-white" />}
              </div>

              {/* Message Content Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 shadow-sm text-sm ${
                  isUser
                    ? 'bg-forest text-white rounded-tr-none'
                    : 'bg-offwhite/90 border border-sage/40 text-slate-800 rounded-tl-none'
                }`}
              >
                {/* Header row for bot messages */}
                {!isUser && (
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-sage/30 text-[11px] text-slate-500">
                    <span className="font-bold text-forest flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald" /> BioBot
                      {msg.topicMatch && (
                        <span className="text-[10px] bg-mint text-forest-dark px-1.5 py-0.2 rounded font-normal">
                          {msg.topicMatch}
                        </span>
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                  </div>
                )}

                {/* Message Text */}
                {isUser ? (
                  <p className="whitespace-pre-wrap leading-relaxed font-sans">{msg.content}</p>
                ) : (
                  <MarkdownRenderer content={msg.content} />
                )}

                {/* Bot Message Action Buttons */}
                {!isUser && (
                  <div className="pt-3 mt-3 border-t border-sage/30 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      {/* Copy */}
                      <button
                        onClick={() => handleCopy(msg.content, msg.id)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-mint/60 transition text-slate-600 hover:text-forest"
                        title="Copy message to clipboard"
                      >
                        {copiedMsgId === msg.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald" />
                            <span className="text-[11px] text-emerald font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Copy</span>
                          </>
                        )}
                      </button>

                      {/* Read Aloud */}
                      <button
                        onClick={() => handleReadAloud(msg.content, msg.id)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg transition ${
                          activeVoiceMsgId === msg.id
                            ? 'bg-emerald text-white'
                            : 'hover:bg-mint/60 text-slate-600 hover:text-forest'
                        }`}
                        title="Read aloud using speech synthesis"
                      >
                        {activeVoiceMsgId === msg.id ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5" />
                            <span className="text-[11px] font-semibold">Stop Voice</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Listen</span>
                          </>
                        )}
                      </button>

                      {/* Explain Simply shortcut */}
                      <button
                        onClick={() => handleSend(`Can you explain that more simply with everyday metaphors and analogies?`)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-mint/60 transition text-slate-600 hover:text-forest"
                        title="Request an intuitive simplified breakdown"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-emerald" />
                        <span className="text-[11px]">Explain Simply</span>
                      </button>

                      {/* Quiz shortcut */}
                      <button
                        onClick={() => handleSend(`Give me a multiple-choice quiz question to test my understanding of this topic.`)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg hover:bg-mint/60 transition text-slate-600 hover:text-forest"
                        title="Generate a practice quiz on this topic"
                      >
                        <HelpCircle className="w-3.5 h-3.5 text-forest" />
                        <span className="text-[11px]">Test Me</span>
                      </button>
                    </div>

                    {msg.provider && (
                      <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                        {msg.provider}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Loading / Typing indicator */}
        {isLoading && (
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald to-forest text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-offwhite border border-sage/40 rounded-2xl rounded-tl-none p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-forest">
                <span className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                <span>BioBot is analyzing biological knowledge base...</span>
              </div>
              <div className="flex items-center gap-1.5 py-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-forest animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2.5 h-2.5 rounded-full bg-sage animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>{error}</span>
            </div>
            <button
              onClick={() => handleSend(messages[messages.length - 1]?.content)}
              className="px-2.5 py-1 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700 transition"
            >
              Retry
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions Section */}
      <div className="mt-3">
        <div className="flex items-center gap-1 text-[11px] font-bold text-forest uppercase tracking-wider mb-1.5 px-1">
          <Zap className="w-3.5 h-3.5 text-emerald" /> Suggested Questions:
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin">
          {activeSuggestions.slice(0, 4).map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(sug)}
              className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-white hover:bg-mint/50 border border-sage/40 text-xs text-slate-700 hover:text-forest-dark font-medium shadow-2xs transition-all hover:-translate-y-0.5 shrink-0"
            >
              {sug}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className="mt-2 bg-white rounded-2xl border-2 border-sage/50 p-2 shadow-lg focus-within:border-emerald transition-all">
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question (e.g. 'How does BLAST work?') or paste a sequence (e.g. 'ATGCGATCGCTA')..."
            className="flex-1 p-2 text-sm text-slate-800 bg-transparent resize-none focus:outline-none max-h-32 leading-relaxed"
          />

          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`p-3 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center ${
              !input.trim() || isLoading
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-forest hover:bg-forest-dark text-white hover:scale-105 active:scale-95'
            }`}
            aria-label="Send message"
          >
            <Send className="w-4 h-4 text-mint" />
          </button>
        </div>
      </div>
    </div>
  );
}
