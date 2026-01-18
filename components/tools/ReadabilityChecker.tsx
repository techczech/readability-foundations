import React, { useState, useMemo } from 'react';
import { RefreshCw, PenTool } from 'lucide-react';

export const ReadabilityChecker: React.FC = () => {
  const [textInput, setTextInput] = useState("Paste your text here to check sentence lengths. Long sentences can make your text difficult to read and process. By identifying these long sentences, you can break them down into smaller chunks that are easier for your audience to understand.");

  const analysis = useMemo(() => {
    if (!textInput.trim()) return { sentences: [], totalWords: 0, sentenceCount: 0, avgWords: 0 };
    
    // Split by sentence terminators but keep them attached to the sentence
    const segments = textInput.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [];
    
    const sentences = segments.map((s, index) => {
      const text = s;
      const cleanText = text.trim();
      const words = cleanText.split(/\s+/).filter(w => w.length > 0);
      const count = words.length;
      
      let status: 'ok' | 'warning' | 'error' = 'ok';
      if (count > 35) status = 'error';
      else if (count > 20) status = 'warning';
      
      return { id: index, text, count, status };
    });

    const totalWords = sentences.reduce((acc, s) => acc + s.count, 0);
    const sentenceCount = sentences.length;
    const avgWords = sentenceCount > 0 ? Math.round((totalWords / sentenceCount) * 10) / 10 : 0;

    return { sentences, totalWords, sentenceCount, avgWords };
  }, [textInput]);

  return (
    <div className="animate-in fade-in duration-300">
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Total Sentences</div>
          <div className="text-3xl font-bold text-slate-900">{analysis.sentenceCount}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Total Words</div>
          <div className="text-3xl font-bold text-slate-900">{analysis.totalWords}</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">Avg Words / Sentence</div>
          <div className={`text-3xl font-bold ${analysis.avgWords > 20 ? 'text-amber-600' : 'text-emerald-600'}`}>
            {analysis.avgWords}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-700 flex items-center">
            <PenTool className="w-5 h-5 mr-2 text-indigo-500" />
            Input Text
          </h3>
          <button 
            onClick={() => setTextInput('')}
            className="text-slate-400 hover:text-rose-500 transition-colors text-sm font-medium flex items-center"
          >
            <RefreshCw className="w-4 h-4 mr-1" /> Clear
          </button>
        </div>
        <textarea
          className="w-full h-48 p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-700 leading-relaxed resize-y"
          placeholder="Paste your text here..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="font-bold text-slate-700">Analysis Results</h3>
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-orange-200 rounded-full mr-2"></span>
              <span className="text-slate-600">&gt; 20 Words</span>
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-rose-200 rounded-full mr-2"></span>
              <span className="text-slate-600">&gt; 35 Words</span>
            </div>
          </div>
        </div>
        <div className="p-8 leading-relaxed text-lg text-slate-800">
          {analysis.sentences.length > 0 ? (
            <div className="prose max-w-none">
              {analysis.sentences.map((s) => (
                <span 
                  key={s.id}
                  className={`
                    inline-block py-0.5 px-1 my-0.5 rounded transition-colors duration-300 mr-1
                    ${s.status === 'error' ? 'bg-rose-100 hover:bg-rose-200 text-rose-900' : ''}
                    ${s.status === 'warning' ? 'bg-orange-100 hover:bg-orange-200 text-orange-900' : ''}
                    ${s.status === 'ok' ? 'hover:bg-slate-50' : ''}
                  `}
                  title={`${s.count} words`}
                >
                  {s.text}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-slate-400 italic text-center py-8">Start typing or paste text above to see analysis...</p>
          )}
        </div>
      </div>
    </div>
  );
};