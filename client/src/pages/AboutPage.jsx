import React from 'react';
import {
  Info, Dna, Cpu, ShieldCheck, Server, Globe, Award,
  Sparkles, ExternalLink, Code, Database, BookOpen, Layers
} from 'lucide-react';

export default function AboutPage({ setActivePage }) {
  const techStack = [
    {
      category: "Frontend UI",
      items: ["React 18", "Tailwind CSS", "Lucide React", "Canvas HTML5 (DNA double helix)", "Vite"]
    },
    {
      category: "Backend Services",
      items: ["Node.js Express", "RESTful API Architecture", "CORS Middleware", "Dotenv Config"]
    },
    {
      category: "AI & Intelligence",
      items: ["Google Gemini Generative AI (1.5 Flash)", "Built-in Rule & Semantic Knowledge Engine", "Sequence Analyzer Tool"]
    },
    {
      category: "Educational Scope",
      items: ["12 Core Modules", "Central Dogma Simulator", "15+ Multiple Choice Quizzes", "ELI5 Simplified Explainer"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold uppercase tracking-wider">
          <Info className="w-3.5 h-3.5 text-emerald" /> Project Overview
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-forest-dark">
          About BioBot – Computational Biology Assistant
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          An interactive, AI-powered pedagogical platform built to bridge molecular biology and algorithmic computer science for modern students.
        </p>
      </div>

      {/* Mission & Problem Statement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white rounded-3xl p-8 border border-sage/40 shadow-lg space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-emerald" />
            </div>
            <h2 className="text-xl font-bold text-forest-dark">The Educational Challenge</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Computational Biology is one of the fastest-growing modern scientific fields, yet students often face a steep learning barrier. Computer science students find biological systems (transcription factors, histone modifications, 3D hydrophobic collapse) overwhelming, while biology students struggle with computational concepts (dynamic programming, affine gap penalties, heuristic seed matches).
            </p>
          </div>
          <div className="p-3 rounded-xl bg-offwhite border border-sage/30 text-xs text-forest-dark font-medium italic">
            "BioBot is created to remove this friction by translating dense biological jargon into intuitive real-life analogies and interactive hands-on simulations."
          </div>
        </div>

        <div className="bg-gradient-to-br from-forest to-emerald text-white rounded-3xl p-8 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-mint" />
            </div>
            <h2 className="text-xl font-bold">The BioBot Solution</h2>
            <p className="text-xs sm:text-sm text-mint/90 leading-relaxed">
              BioBot combines an active AI tutoring engine with concrete interactive tools:
            </p>
            <ul className="space-y-2 text-xs text-mint/90 list-disc pl-4">
              <li><strong>Interactive Central Dogma Visualizer:</strong> Live translation from raw DNA to RNA to amino acid peptides.</li>
              <li><strong>Explain Simply (ELI5):</strong> Switches from academic papers to kitchen recipes, train tracks, and zipper metaphors.</li>
              <li><strong>Offline Zero-Setup Mode:</strong> Operates 100% reliably with a built-in biological knowledge engine when no external API key is provided.</li>
            </ul>
          </div>

          <button
            onClick={() => setActivePage('chat')}
            className="w-full py-2.5 bg-white text-forest-dark font-bold text-xs rounded-xl shadow-md hover:bg-mint transition text-center"
          >
            Experience BioBot in Action ➔
          </button>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white rounded-3xl p-8 border border-sage/40 shadow-xl space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald uppercase tracking-wider bg-mint px-3 py-1 rounded-full">
            Full-Stack Architecture
          </span>
          <h3 className="text-2xl font-extrabold text-forest-dark">Clean Separation of Concerns</h3>
          <p className="text-xs text-slate-500">
            Engineered with strict security practices: API keys are maintained exclusively on the backend and never leaked to the client browser.
          </p>
        </div>

        {/* Visual Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Client Box */}
          <div className="p-5 rounded-2xl bg-offwhite border-2 border-sage/50 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald text-white mx-auto flex items-center justify-center text-xs font-bold">1</div>
            <h4 className="text-sm font-bold text-forest-dark">Client Layer (React + Vite)</h4>
            <p className="text-xs text-slate-600">Responsive UI, canvas DNA animation, local storage chat persistence, markdown rendering with sequence tags.</p>
            <span className="inline-block text-[10px] bg-mint text-forest px-2 py-0.5 rounded font-mono">Port 3000 / Static</span>
          </div>

          {/* Server Box */}
          <div className="p-5 rounded-2xl bg-offwhite border-2 border-emerald/50 space-y-3 relative">
            <div className="w-8 h-8 rounded-lg bg-forest text-white mx-auto flex items-center justify-center text-xs font-bold">2</div>
            <h4 className="text-sm font-bold text-forest-dark">API Server (Express)</h4>
            <p className="text-xs text-slate-600">Secure proxy endpoint, sequence translation logic, quiz database management, and prompt engineering layer.</p>
            <span className="inline-block text-[10px] bg-mint text-forest px-2 py-0.5 rounded font-mono">Port 5000 / Node.js</span>
          </div>

          {/* AI / Engine Box */}
          <div className="p-5 rounded-2xl bg-offwhite border-2 border-sage/50 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-forest-dark text-white mx-auto flex items-center justify-center text-xs font-bold">3</div>
            <h4 className="text-sm font-bold text-forest-dark">Intelligence Layer</h4>
            <p className="text-xs text-slate-600">Google Gemini AI when API key is provided, or instant fallback to BioBot's offline Knowledge Engine.</p>
            <span className="inline-block text-[10px] bg-mint text-forest px-2 py-0.5 rounded font-mono">Gemini REST / In Silico</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Breakdown */}
      <div className="bg-white rounded-3xl p-8 border border-sage/40 shadow-xl space-y-6">
        <h3 className="text-xl font-bold text-forest-dark flex items-center gap-2">
          <Code className="w-5 h-5 text-emerald" /> Technology Stack
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((col, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-offwhite border border-sage/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest">{col.category}</h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Acknowledgments & Scientific References */}
      <div className="p-6 rounded-2xl bg-mint/30 border border-sage/50 space-y-3 text-xs text-slate-700 leading-relaxed">
        <h4 className="font-bold text-forest-dark uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-emerald" /> Scientific References & Open Data Repositories:
        </h4>
        <p>
          Curriculums and sequence data in BioBot are modeled according to international standards established by the
          <strong> National Center for Biotechnology Information (NCBI)</strong>,
          <strong> Universal Protein Resource (UniProtKB)</strong>,
          <strong> Worldwide Protein Data Bank (wwPDB)</strong>, and peer-reviewed literature in structural bioinformatics.
        </p>
      </div>
    </div>
  );
}
