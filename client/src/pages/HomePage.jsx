import React from 'react';
import {
  Dna, Sparkles, ArrowRight, MessageSquare, BookOpen,
  Award, ShieldCheck, Cpu, Terminal, Share2, Compass, Layers, CheckCircle
} from 'lucide-react';
import DnaHelixCanvas from '../components/DnaHelixCanvas';
import CentralDogmaVisualizer from '../components/CentralDogmaVisualizer';

export default function HomePage({ setActivePage, onStartChatWithPrompt }) {
  // 5 Quick Access Cards required by spec: DNA, RNA, Proteins, Genetics, Bioinformatics
  const quickAccessCards = [
    {
      title: "DNA (Deoxyribonucleic Acid)",
      category: "Nucleic Acids",
      color: "from-emerald-500/10 to-mint/30 border-emerald/30",
      iconColor: "text-emerald",
      badge: "Double Helix",
      description: "Explore the 4-letter digital code of life (A-T, G-C), Chargaff's rules, antiparallel strands, and replication fidelity.",
      prompt: "Explain DNA structure, Chargaff's rules, and why G-C pairs are more thermally stable than A-T pairs."
    },
    {
      title: "RNA (Ribonucleic Acid)",
      category: "Nucleic Acids",
      color: "from-teal-500/10 to-mint/30 border-teal/30",
      iconColor: "text-teal-600",
      badge: "Messenger & Catalytic",
      description: "Discover mRNA, tRNA, rRNA, ribozymes, and how Uracil replaces Thymine with a reactive 2'-OH ribose backbone.",
      prompt: "What are the structural differences between DNA and RNA, and why is RNA chemically more reactive?"
    },
    {
      title: "Proteins & Folding",
      category: "Macromolecules",
      color: "from-sage/20 to-mint/40 border-sage/40",
      iconColor: "text-forest",
      badge: "3D Nanomachines",
      description: "From primary amino acid sequences to complex tertiary 3D folding, alpha-helices, beta-sheets, and active catalytic sites.",
      prompt: "Explain the 4 levels of protein structure and how Anfinsen's dogma relates to protein folding."
    },
    {
      title: "Genetics & Central Dogma",
      category: "Inheritance",
      color: "from-emerald/15 to-mint/30 border-emerald/30",
      iconColor: "text-emerald-700",
      badge: "Information Flow",
      description: "Master the unidirectional flow of genetic information: DNA replication ➔ Transcription into mRNA ➔ Translation into Protein.",
      prompt: "Explain the Central Dogma of Molecular Biology and exceptions like reverse transcriptase."
    },
    {
      title: "Bioinformatics & Algorithms",
      category: "Computational Sciences",
      color: "from-forest/10 to-sage/30 border-forest/20",
      iconColor: "text-forest-dark",
      badge: "Algorithms & Omics",
      description: "BLAST sequence alignment, dynamic programming (Needleman-Wunsch & Smith-Waterman), and biological databases (NCBI, UniProt, PDB).",
      prompt: "How does the BLAST algorithm perform fast local sequence alignment compared to Smith-Waterman?"
    }
  ];

  const highlights = [
    {
      title: "Beginner-Friendly 'Explain Simply'",
      desc: "Stuck on complex concepts like Okazaki fragments or affine gap penalties? BioBot translates biological jargon into intuitive real-world metaphors with a single click.",
      icon: Sparkles
    },
    {
      title: "Interactive Sequence Analyzer",
      desc: "Paste raw DNA/RNA strings to calculate GC percentage, transcribe to mRNA, and generate ribosomal reading frames into translated peptide chains.",
      icon: Terminal
    },
    {
      title: "Comprehensive Quiz Zone",
      desc: "Test your mastery across 15+ curated questions with immediate biological explanations, score tracking, and instant difficulty filters.",
      icon: Award
    },
    {
      title: "Deep AI & Structural Frontiers",
      desc: "Learn modern breakthroughs like Google DeepMind's AlphaFold, RFdiffusion de novo design, and machine learning models for CRISPR guide targeting.",
      icon: Cpu
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-offwhite to-mint/20 border-b border-sage/25">
        {/* Subtle biological background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-mint/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-sage/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/70 border border-sage/40 text-forest-dark text-xs font-bold tracking-wide">
                <Dna className="w-4 h-4 text-emerald" />
                <span>Next-Generation Computational Biology Assistant</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-forest-dark tracking-tight leading-tight">
                Explore the Science of Life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald to-forest">AI</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Your intelligent companion for learning Computational Biology. Demystify DNA, RNA, protein folding, sequence alignment algorithms, and cutting-edge structural AI through interactive conversations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActivePage('chat')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-forest hover:bg-forest-dark text-white font-bold text-base shadow-lg shadow-forest/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 text-mint" />
                  Start Chatting Now
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <button
                  onClick={() => setActivePage('concepts')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-mint/30 text-forest-dark font-semibold text-base border-2 border-sage/50 shadow-sm transition-all hover:scale-105"
                >
                  <BookOpen className="w-5 h-5 text-emerald" />
                  Explore 12 Concepts
                </button>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-sage/30 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-forest">12</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Core Modules</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-emerald">100%</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Offline Ready</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-forest">AlphaFold</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">AI Coverage</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Animation Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white border border-sage/40 shadow-2xl p-6 flex flex-col items-center justify-between overflow-hidden">
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-forest">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-ping" />
                    Live 3D Double Helix
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Watson & Crick (1953)</span>
                </div>

                {/* Animated Canvas */}
                <div className="w-full h-56 my-2 relative">
                  <DnaHelixCanvas className="w-full h-full" />
                </div>

                {/* Micro prompt card */}
                <div className="w-full bg-offwhite rounded-2xl p-3.5 border border-sage/40 text-xs text-slate-700 space-y-1.5 shadow-sm">
                  <div className="flex items-center justify-between font-semibold text-forest-dark">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-emerald" /> Try asking BioBot:
                    </span>
                    <span className="text-[10px] text-emerald bg-mint px-2 py-0.5 rounded font-mono">Instant Answer</span>
                  </div>
                  <p className="italic text-slate-600">"Why do G-C base pairs have 3 hydrogen bonds while A-T only has 2?"</p>
                  <button
                    onClick={() => onStartChatWithPrompt("Why do G-C base pairs have 3 hydrogen bonds while A-T only has 2? Explain with biological examples.")}
                    className="w-full mt-1 py-1.5 bg-emerald hover:bg-emerald-dark text-white rounded-lg font-bold text-[11px] transition text-center shadow-sm"
                  >
                    Ask This Question ➔
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold uppercase tracking-wider">
            Curriculum Shortcuts
          </div>
          <h2 className="text-3xl font-extrabold text-forest-dark">Explore Core Knowledge Pillars</h2>
          <p className="text-sm text-slate-600">
            Click any pillar to instantly dive into tailored explanations, algorithms, and interactive conversations with BioBot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccessCards.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-gradient-to-br ${card.color} bg-white border shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/90 text-forest border border-sage/40 shadow-xs">
                    {card.category}
                  </span>
                  <span className="text-xs font-bold text-emerald bg-mint/80 px-2 py-0.5 rounded">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-forest-dark group-hover:text-emerald transition-colors mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-sage/30 flex items-center justify-between">
                <button
                  onClick={() => onStartChatWithPrompt(card.prompt)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-emerald transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Ask BioBot
                </button>
                <button
                  onClick={() => setActivePage('concepts')}
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-forest transition-colors"
                >
                  Read Concept <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Card: Jump to Quiz Zone */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-forest to-emerald text-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-white/20 text-mint mb-4">
                <Award className="w-3 h-3 text-mint" /> Knowledge Verification
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Test Your Understanding</h3>
              <p className="text-xs text-mint/90 leading-relaxed mb-4">
                Put your computational biology understanding to the test! Challenge yourself with multiple-choice questions across all 12 modules with comprehensive rationales.
              </p>
            </div>
            <button
              onClick={() => setActivePage('quiz')}
              className="w-full py-2.5 bg-white text-forest hover:bg-mint rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
            >
              Enter Quiz Zone <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Central Dogma Live Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CentralDogmaVisualizer
          onAskBioBot={(prompt) => onStartChatWithPrompt(prompt)}
        />
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-sage/30 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald uppercase tracking-wider bg-mint px-3 py-1 rounded-full">
              Educational Pedagogical Design
            </span>
            <h2 className="text-3xl font-extrabold text-forest-dark">Engineered for Clear, Active Learning</h2>
            <p className="text-sm text-slate-600">
              Computational biology can feel intimidating with its blend of biochemistry, graph theory, and dynamic programming. BioBot bridges that gap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-offwhite border border-sage/30 hover:border-emerald/40 transition">
                  <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald" />
                  </div>
                  <h4 className="text-base font-bold text-forest-dark mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-forest-dark via-forest to-emerald p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mint text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Start Learning in Seconds
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">Ready to master Computational Biology?</h3>
            <p className="text-xs sm:text-sm text-sage-light max-w-xl">
              Ask any question, paste a DNA sequence, or generate a customized topic quiz with BioBot right now.
            </p>
          </div>

          <button
            onClick={() => setActivePage('chat')}
            className="z-10 px-8 py-4 bg-white hover:bg-mint text-forest-dark font-extrabold text-sm rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald" />
            Launch AI Chatbot
          </button>
        </div>
      </section>
    </div>
  );
}
