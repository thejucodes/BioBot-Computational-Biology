import React, { useState } from 'react';
import { ArrowRight, Play, Sparkles, RefreshCw, MessageSquare } from 'lucide-react';

const PRESETS = [
  {
    name: "Normal Hemoglobin (HbA)",
    dna: "ATGGTGCATCTGACTCCTGAGGAG",
    description: "Standard beta-globin gene segment encoding normal soluble hemoglobin."
  },
  {
    name: "Sickle Cell Variant (HbS)",
    dna: "ATGGTGCATCTGACTCCTGTGGAG",
    description: "Point mutation (GAG → GTG) at codon 6: Glutamic acid becomes Valine, causing sickle polymerizations."
  },
  {
    name: "Insulin B-Chain Start",
    dna: "ATGTTTGTCAACCAACACCTG",
    description: "Signal sequence and N-terminal region of human Insulin hormone."
  }
];

const GENETIC_CODE = {
  'AUG': { name: 'Methionine (Start)', abbr: 'Met', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
  'GUG': { name: 'Valine', abbr: 'Val', color: 'bg-amber-100 text-amber-900 border-amber-300' },
  'CAU': { name: 'Histidine', abbr: 'His', color: 'bg-blue-100 text-blue-900 border-blue-300' },
  'CUG': { name: 'Leucine', abbr: 'Leu', color: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
  'ACU': { name: 'Threonine', abbr: 'Thr', color: 'bg-teal-100 text-teal-900 border-teal-300' },
  'CCU': { name: 'Proline', abbr: 'Pro', color: 'bg-purple-100 text-purple-900 border-purple-300' },
  'GAG': { name: 'Glutamate (Normal)', abbr: 'Glu', color: 'bg-emerald-200 text-emerald-950 border-emerald-400' },
  'UUU': { name: 'Phenylalanine', abbr: 'Phe', color: 'bg-pink-100 text-pink-900 border-pink-300' },
  'GUC': { name: 'Valine', abbr: 'Val', color: 'bg-amber-100 text-amber-900 border-amber-300' },
  'AAC': { name: 'Asparagine', abbr: 'Asn', color: 'bg-rose-100 text-rose-900 border-rose-300' },
  'CAA': { name: 'Glutamine', abbr: 'Gln', color: 'bg-cyan-100 text-cyan-900 border-cyan-300' },
  'CAC': { name: 'Histidine', abbr: 'His', color: 'bg-blue-100 text-blue-900 border-blue-300' },
  'UAA': { name: 'Ochre (Stop)', abbr: 'STOP', color: 'bg-red-100 text-red-900 border-red-300' },
  'UAG': { name: 'Amber (Stop)', abbr: 'STOP', color: 'bg-red-100 text-red-900 border-red-300' },
  'UGA': { name: 'Opal (Stop)', abbr: 'STOP', color: 'bg-red-100 text-red-900 border-red-300' },
};

export default function CentralDogmaVisualizer({ onAskBioBot }) {
  const [dnaInput, setDnaInput] = useState(PRESETS[0].dna);
  const [activeStep, setActiveStep] = useState(3); // 1: DNA, 2: Transcription, 3: Translation

  const cleanDNA = dnaInput.toUpperCase().replace(/[^ATCG]/g, '');
  const rna = cleanDNA.replace(/T/g, 'U');

  // Compute GC%
  const gcCount = (cleanDNA.match(/[GC]/g) || []).length;
  const gcPercent = cleanDNA.length > 0 ? ((gcCount / cleanDNA.length) * 100).toFixed(1) : 0;

  // Complementary DNA strand
  const compMap = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };
  const compDNA = cleanDNA.split('').map(b => compMap[b] || 'N').join('');

  // Codons and peptides
  const codons = [];
  const aminoAcids = [];
  for (let i = 0; i <= rna.length - 3; i += 3) {
    const triplet = rna.substring(i, i + 3);
    codons.push(triplet);
    aminoAcids.push(GENETIC_CODE[triplet] || { name: 'Amino Acid', abbr: triplet, color: 'bg-slate-100 text-slate-800 border-slate-300' });
  }

  const getBaseBadge = (base) => {
    switch (base) {
      case 'A': return 'bg-mint text-forest-dark border-sage font-bold';
      case 'T': return 'bg-red-100 text-red-800 border-red-300 font-bold';
      case 'U': return 'bg-pink-100 text-pink-800 border-pink-300 font-bold';
      case 'C': return 'bg-blue-100 text-blue-800 border-blue-300 font-bold';
      case 'G': return 'bg-amber-100 text-amber-800 border-amber-300 font-bold';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-sage/40 p-6 md:p-8 max-w-5xl mx-auto my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint/70 text-forest text-xs font-semibold tracking-wide uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald" /> Interactive Simulator
          </div>
          <h3 className="text-2xl font-bold text-forest-dark">Central Dogma Live Visualizer</h3>
          <p className="text-sm text-slate-600">Simulate DNA transcription to mRNA and ribosomal translation into amino acid polypeptides.</p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center gap-2">
          {PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setDnaInput(preset.dna)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                dnaInput === preset.dna
                  ? 'bg-emerald text-white shadow-sm'
                  : 'bg-offwhite text-slate-700 hover:bg-mint/50 border border-slate-200'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Input row */}
      <div className="mt-6 mb-8">
        <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-2">
          Enter or Edit DNA Coding Strand (5' → 3'):
        </label>
        <div className="relative">
          <input
            type="text"
            value={dnaInput}
            onChange={(e) => setDnaInput(e.target.value)}
            className="w-full px-4 py-3 font-mono text-sm uppercase bg-offwhite border-2 border-sage/50 rounded-xl focus:outline-none focus:border-emerald tracking-widest text-slate-900 shadow-inner"
            placeholder="e.g. ATGCGATCGATC..."
          />
          <button
            onClick={() => setDnaInput(PRESETS[0].dna)}
            title="Reset to default"
            className="absolute right-3 top-3 text-slate-400 hover:text-emerald transition"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-slate-500 font-mono">
          <span>Length: {cleanDNA.length} bp</span>
          <span>GC Content: <strong className="text-emerald font-bold">{gcPercent}%</strong></span>
          <span>Codon Count: {codons.length}</span>
        </div>
      </div>

      {/* Visual Pipeline */}
      <div className="space-y-6">
        {/* Step 1: DNA Double Helix */}
        <div className="p-4 rounded-xl bg-offwhite/70 border border-sage/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-forest uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-forest text-white text-[10px] flex items-center justify-center">1</span>
              DNA Double Strand (Template & Coding)
            </span>
            <span className="text-xs text-slate-500 font-mono">Antiparallel 5' ➔ 3' / 3' ➔ 5'</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="font-mono text-xs space-y-1.5 min-w-max">
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-slate-400 w-12">5' -</span>
                {cleanDNA.split('').map((base, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-6 h-7 leading-7 text-center rounded border ${getBaseBadge(base)} shadow-sm transition-transform hover:scale-110`}
                  >
                    {base}
                  </span>
                ))}
                <span className="text-[11px] font-bold text-slate-400 ml-1">- 3' (Coding)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-slate-400 w-12">3' -</span>
                {compDNA.split('').map((base, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-6 h-7 leading-7 text-center rounded border ${getBaseBadge(base)} opacity-80`}
                  >
                    {base}
                  </span>
                ))}
                <span className="text-[11px] font-bold text-slate-400 ml-1">- 5' (Template)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Transcription */}
        <div className="p-4 rounded-xl bg-mint/20 border border-emerald/20">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald text-white text-[10px] flex items-center justify-center">2</span>
              Transcription ➔ Messenger RNA (mRNA)
            </span>
            <span className="text-xs text-emerald-700 font-mono">Thymine (T) replaced by Uracil (U)</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex items-center gap-1 font-mono text-xs min-w-max">
              <span className="text-[11px] font-bold text-emerald-800 w-12">5' -</span>
              {rna.split('').map((base, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-6 h-7 leading-7 text-center rounded border ${getBaseBadge(base)} shadow-sm`}
                >
                  {base}
                </span>
              ))}
              <span className="text-[11px] font-bold text-emerald-800 ml-1">- 3' (mRNA)</span>
            </div>
          </div>
        </div>

        {/* Step 3: Translation */}
        <div className="p-4 rounded-xl bg-white border border-sage/40 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-forest-dark uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-forest-dark text-white text-[10px] flex items-center justify-center">3</span>
              Translation ➔ Polypeptide Chain (Ribosome decoding codons)
            </span>
            <span className="text-xs text-slate-500 font-mono">N-Terminus ➔ C-Terminus</span>
          </div>

          <div className="overflow-x-auto pb-3">
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-xs font-bold text-slate-400 font-mono">N-Term ➔</span>
              {codons.map((triplet, idx) => {
                const aa = aminoAcids[idx];
                return (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="px-2.5 py-1.5 rounded-lg border text-center shadow-sm font-mono text-xs font-bold mb-1 transition-transform hover:-translate-y-1 cursor-default ${aa.color}">
                      <div className="text-xs">{aa.abbr}</div>
                      <div className="text-[9px] font-normal opacity-80">{aa.name.split(' ')[0]}</div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      {triplet}
                    </span>
                  </div>
                );
              })}
              <span className="text-xs font-bold text-slate-400 font-mono ml-2">➔ C-Term</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action / Ask BioBot button */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Want a deeper analysis of mutation consequences or protein folding for this sequence?
        </p>
        <button
          onClick={() => onAskBioBot && onAskBioBot(`Analyze this biological sequence and explain its translation: ${cleanDNA}`)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-light text-white rounded-xl text-xs font-semibold shadow-md transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 text-mint" />
          Ask BioBot to Analyze This Sequence
        </button>
      </div>
    </div>
  );
}
