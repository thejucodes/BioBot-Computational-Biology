import React, { useState } from 'react';
import {
  Search, BookOpen, Sparkles, MessageSquare, ArrowRight,
  ExternalLink, Layers, GitBranch, Database, Dna, Atom, Binary,
  Network, Workflow, Copy, Repeat, AlignHorizontalDistributeCenter, X
} from 'lucide-react';
import { CONCEPTS_DATA } from '../data/conceptsData';

const ICON_MAP = {
  Binary: Binary,
  Network: Network,
  Dna: Dna,
  Atom: Atom,
  Workflow: Workflow,
  Copy: Copy,
  Repeat: Repeat,
  AlignHorizontalDistributeCenter: AlignHorizontalDistributeCenter,
  Layers: Layers,
  GitBranch: GitBranch,
  Database: Database,
  Sparkles: Sparkles,
};

const CATEGORIES = [
  'All',
  'Foundations',
  'Molecular Biology',
  'Algorithms & Analysis',
  'High-Throughput Omics',
  'Data & Resources',
  'Cutting-Edge'
];

export default function ConceptsPage({ onAskBioBot }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeConcept, setActiveConcept] = useState(null);
  const [detailTab, setDetailTab] = useState('detailed'); // 'detailed' | 'simple' | 'terms'

  const filteredConcepts = CONCEPTS_DATA.filter((concept) => {
    const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      concept.title.toLowerCase().includes(q) ||
      concept.shortDescription.toLowerCase().includes(q) ||
      concept.summary.toLowerCase().includes(q) ||
      concept.keyTerms.some(kt => kt.term.toLowerCase().includes(q) || kt.definition.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-emerald" /> Interactive Curriculum
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-forest-dark tracking-tight">
          12 Core Computational Biology Knowledge Modules
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore comprehensive explanations, simplified analogies, and real-life discoveries across all foundational and cutting-edge topics.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-sage/40 shadow-md space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search concepts, algorithms (e.g. BLAST, AlphaFold, Smith-Waterman, PDB)..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-offwhite border border-sage/50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-forest text-white shadow-sm'
                  : 'bg-offwhite text-slate-700 hover:bg-mint/50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Concept Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredConcepts.map((concept, idx) => {
          const Icon = ICON_MAP[concept.icon] || BookOpen;
          return (
            <div
              key={concept.id}
              className="bg-white rounded-2xl border border-sage/30 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-mint text-forest flex items-center justify-center group-hover:bg-emerald group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-offwhite border border-sage/40 text-forest-dark">
                    {concept.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-forest-dark mb-2 group-hover:text-emerald transition-colors">
                  {concept.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {concept.shortDescription}
                </p>

                {/* Key terms pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {concept.keyTerms.slice(0, 2).map((kt, i) => (
                    <span key={i} className="text-[10px] bg-mint/50 text-forest-dark px-2 py-0.5 rounded font-mono">
                      {kt.term}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setActiveConcept(concept);
                    setDetailTab('detailed');
                  }}
                  className="px-3 py-1.5 bg-mint/70 hover:bg-mint text-forest rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  Read Concept <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onAskBioBot && onAskBioBot(`Explain ${concept.title} in detail and give me a real-life medical example.`)}
                  className="px-3 py-1.5 bg-forest hover:bg-forest-dark text-white rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm"
                  title="Ask BioBot about this topic"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-mint" />
                  Ask BioBot
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredConcepts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-sage/40 p-8 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-700">No matching concepts found</h3>
          <p className="text-xs text-slate-500">Try adjusting your search query or reset the category filter.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 bg-emerald text-white rounded-xl text-xs font-bold shadow-sm"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Detailed Concept Modal */}
      {activeConcept && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-sage/40 shadow-2xl p-6 sm:p-8 space-y-6 relative my-8">
            {/* Close button */}
            <button
              onClick={() => setActiveConcept(null)}
              className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint text-forest text-xs font-bold uppercase tracking-wider mb-2">
                {activeConcept.category}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-dark">
                {activeConcept.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">{activeConcept.summary}</p>
            </div>

            {/* Tab navigation */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setDetailTab('detailed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  detailTab === 'detailed'
                    ? 'bg-forest text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Comprehensive Study
              </button>

              <button
                onClick={() => setDetailTab('simple')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  detailTab === 'simple'
                    ? 'bg-emerald text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" /> Explain Simply (ELI5)
              </button>

              <button
                onClick={() => setDetailTab('terms')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  detailTab === 'terms'
                    ? 'bg-forest text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Key Glossary ({activeConcept.keyTerms.length})
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-sm text-slate-700 space-y-4">
              {detailTab === 'detailed' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-offwhite border border-sage/30 whitespace-pre-line leading-relaxed font-sans">
                    {activeConcept.detailed}
                  </div>

                  {/* Real-life example box */}
                  <div className="p-4 rounded-xl bg-mint/30 border-l-4 border-emerald space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest">Real-Life Application & Discovery</h4>
                    <p className="text-xs text-forest-dark italic leading-relaxed">{activeConcept.realLifeExample}</p>
                  </div>
                </div>
              )}

              {detailTab === 'simple' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-mint/40 to-offwhite border border-sage/40 space-y-3">
                    <div className="flex items-center gap-2 text-forest-dark font-bold">
                      <Sparkles className="w-4 h-4 text-emerald" />
                      <span>The Everyday Metaphor:</span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-800 italic">
                      "{activeConcept.simpleExplanation}"
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-forest uppercase">Why it matters:</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{activeConcept.summary}</p>
                  </div>
                </div>
              )}

              {detailTab === 'terms' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeConcept.keyTerms.map((kt, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-offwhite border border-sage/30 space-y-1">
                      <span className="font-bold text-forest-dark text-xs font-mono">{kt.term}</span>
                      <p className="text-xs text-slate-600 leading-relaxed">{kt.definition}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Ready to discuss this with AI?</span>
              <button
                onClick={() => {
                  setActiveConcept(null);
                  onAskBioBot && onAskBioBot(`Explain ${activeConcept.title} in detail and test my understanding.`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-forest hover:bg-forest-dark text-white rounded-xl text-xs font-bold shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-mint" />
                Ask BioBot About {activeConcept.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
