import React from 'react';
import { Dna, Heart, Sparkles, BookOpen, ExternalLink, GitBranch } from 'lucide-react';

export default function Footer({ setActivePage }) {
  return (
    <footer className="bg-forest-dark text-white border-t border-forest pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: BioBot info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-sage flex items-center justify-center text-forest-dark shadow-md">
                <Dna className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">BioBot</span>
            </div>
            <p className="text-xs text-sage-light leading-relaxed">
              An intelligent, interactive AI educational platform designed to make Computational Biology and Bioinformatics intuitive, accessible, and exciting for students.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-sage">
              <span className="w-2 h-2 rounded-full bg-emerald"></span>
              <span>College Final Year / Capstone Ready</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage">Platform Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-mint transition">
                  Explore Landing Page
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('chat')} className="hover:text-mint transition flex items-center gap-1.5">
                  AI Chatbot Assistant <span className="text-[10px] bg-emerald/40 text-mint px-1.5 py-0.2 rounded">Live</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('concepts')} className="hover:text-mint transition">
                  12 Core Knowledge Modules
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('quiz')} className="hover:text-mint transition">
                  Interactive Quiz Zone
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-mint transition">
                  Project Architecture & Mission
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Knowledge Topics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage">Core Curriculums</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Central Dogma (DNA ➔ RNA ➔ Protein)</li>
              <li>Sequence Alignment (BLAST & Dynamic Prog.)</li>
              <li>AlphaFold & Generative AI in Biology</li>
              <li>Genomics, Proteomics & Mass Spectrometry</li>
              <li>Biological Databases (NCBI, UniProt, PDB)</li>
            </ul>
          </div>

          {/* Col 4: Scientific Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sage">Open Biological Repositories</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-mint transition">
                <span>NCBI GenBank & PubMed</span>
                <ExternalLink className="w-3 h-3 text-sage" />
              </a>
              <a href="https://www.rcsb.org/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-mint transition">
                <span>RCSB Protein Data Bank (PDB)</span>
                <ExternalLink className="w-3 h-3 text-sage" />
              </a>
              <a href="https://www.uniprot.org/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-mint transition">
                <span>UniProt Protein Knowledgebase</span>
                <ExternalLink className="w-3 h-3 text-sage" />
              </a>
              <a href="https://alphafold.ebi.ac.uk/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-mint transition">
                <span>AlphaFold Protein Structure Database</span>
                <ExternalLink className="w-3 h-3 text-sage" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-forest/60 flex flex-col sm:flex-row items-center justify-between text-xs text-sage gap-4">
          <p>© {new Date().getFullYear()} BioBot – Computational Biology Assistant. Educational Open-Source Project.</p>
          <div className="flex items-center gap-2">
            <span>Built with precision for Life Sciences & Computer Science</span>
            <span className="text-emerald font-bold">●</span>
            <span className="text-white font-semibold">React + Tailwind + Express + Gemini AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
