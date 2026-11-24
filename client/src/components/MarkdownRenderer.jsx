import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function MarkdownRenderer({ content = '' }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  // Simple, robust markdown block parser
  const renderFormatted = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBuffer = [];
    let codeLang = '';
    let inTable = false;
    let tableRows = [];
    let listBuffer = [];
    let listType = null; // 'ul' or 'ol'

    const flushList = (key) => {
      if (listBuffer.length > 0) {
        if (listType === 'ol') {
          elements.push(
            <ol key={`ol-${key}`} className="list-decimal pl-6 space-y-1.5 my-2.5 text-slate-700">
              {listBuffer.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ol>
          );
        } else {
          elements.push(
            <ul key={`ul-${key}`} className="list-disc pl-6 space-y-1.5 my-2.5 text-slate-700 marker:text-emerald">
              {listBuffer.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
              ))}
            </ul>
          );
        }
        listBuffer = [];
        listType = null;
      }
    };

    const flushTable = (key) => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(1).filter(r => !r.every(c => c.match(/^:?-+:?$/)));
        elements.push(
          <div key={`table-${key}`} className="overflow-x-auto my-3 border border-sage/40 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-mint/40 text-forest-dark border-b border-sage/40 font-semibold">
                <tr>
                  {headerRow.map((col, i) => (
                    <th key={i} className="p-2.5 font-bold" dangerouslySetInnerHTML={{ __html: parseInline(col.trim()) }} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-offwhite/80 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="p-2.5 text-slate-700 font-mono" dangerouslySetInnerHTML={{ __html: parseInline(cell.trim()) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      // Code block start/end
      if (line.trim().startsWith('```')) {
        flushList(index);
        flushTable(index);
        if (inCodeBlock) {
          const fullCode = codeBuffer.join('\n');
          const blockIdx = index;
          elements.push(
            <div key={`code-${index}`} className="relative my-3 rounded-xl bg-slate-900 text-slate-100 overflow-hidden shadow-md border border-slate-800">
              <div className="flex items-center justify-between px-4 py-1.5 bg-slate-950/70 border-b border-slate-800 text-[11px] font-mono text-slate-400">
                <span>{codeLang || 'sequence / code'}</span>
                <button
                  onClick={() => handleCopy(fullCode, blockIdx)}
                  className="flex items-center gap-1 hover:text-emerald transition-colors text-xs"
                >
                  {copiedIdx === blockIdx ? <Check className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedIdx === blockIdx ? 'Copied' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed">
                <code>{fullCode}</code>
              </pre>
            </div>
          );
          codeBuffer = [];
          codeLang = '';
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
          codeLang = line.trim().slice(3).trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      // Table line
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        flushList(index);
        const cells = line.split('|').slice(1, -1);
        tableRows.push(cells);
        inTable = true;
        return;
      } else if (inTable) {
        flushTable(index);
      }

      // Headers
      if (line.startsWith('#### ')) {
        flushList(index);
        elements.push(<h4 key={index} className="text-sm font-bold text-forest-dark uppercase tracking-wide mt-4 mb-1.5">{line.slice(5)}</h4>);
        return;
      }
      if (line.startsWith('### ')) {
        flushList(index);
        elements.push(<h3 key={index} className="text-base font-bold text-forest mt-4 mb-2 flex items-center gap-2">{line.slice(4)}</h3>);
        return;
      }
      if (line.startsWith('## ')) {
        flushList(index);
        elements.push(<h2 key={index} className="text-lg font-extrabold text-forest-dark mt-5 mb-2.5 pb-1 border-b border-sage/30">{line.slice(3)}</h2>);
        return;
      }
      if (line.startsWith('# ')) {
        flushList(index);
        elements.push(<h1 key={index} className="text-xl font-black text-forest-dark mt-6 mb-3">{line.slice(2)}</h1>);
        return;
      }

      // Blockquote
      if (line.startsWith('> ')) {
        flushList(index);
        elements.push(
          <div key={index} className="my-2.5 pl-4 pr-3 py-2 bg-mint/30 border-l-4 border-emerald rounded-r-lg text-sm text-forest-dark italic shadow-sm" dangerouslySetInnerHTML={{ __html: parseInline(line.slice(2)) }} />
        );
        return;
      }

      // Unordered list item
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        if (listType === 'ol') flushList(index);
        listType = 'ul';
        listBuffer.push(line.trim().slice(2));
        return;
      }

      // Ordered list item
      const olMatch = line.trim().match(/^(\d+)\.\s+(.*)/);
      if (olMatch) {
        if (listType === 'ul') flushList(index);
        listType = 'ol';
        listBuffer.push(olMatch[2]);
        return;
      }

      // Horizontal rule
      if (line.trim() === '---' || line.trim() === '***') {
        flushList(index);
        elements.push(<hr key={index} className="my-4 border-t border-sage/40" />);
        return;
      }

      // Regular paragraph or empty line
      flushList(index);
      if (line.trim().length > 0) {
        elements.push(
          <p key={index} className="text-sm leading-relaxed my-2 text-slate-700" dangerouslySetInnerHTML={{ __html: parseInline(line) }} />
        );
      }
    });

    flushList('end');
    flushTable('end');

    return elements;
  };

  const parseInline = (text) => {
    return text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-forest-dark">$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em class="italic text-slate-800">$1</em>')
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-mint/50 font-mono text-forest-dark text-[12px] font-semibold border border-sage/50">$1</code>')
      // Math KaTeX simulated inline
      .replace(/\\text\{([^}]+)\}/g, '$1')
      .replace(/\\xrightarrow\{([^}]+)\}/g, ' ➔ $1 ➔ ');
  };

  return <div className="space-y-1 font-sans">{renderFormatted(content)}</div>;
}
