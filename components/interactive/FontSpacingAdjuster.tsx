import React, { useState } from 'react';
import { Plus, Minus, RefreshCw, CheckCircle } from 'lucide-react';

export const FontSpacingAdjuster: React.FC = () => {
  const [customFontSize, setCustomFontSize] = useState(20);

  const handleIncreaseFont = () => {
    if (customFontSize < 40) setCustomFontSize(prev => prev + 2);
  };

  const handleDecreaseFont = () => {
    if (customFontSize > 14) setCustomFontSize(prev => prev - 2);
  };

  const handleResetFont = () => {
    setCustomFontSize(20);
  };

  return (
    <div className="space-y-8">
      <div className="group">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Text at 12pt / 1x spacing</span>
          <span className="text-xs px-2 py-1 bg-slate-100 text-slate-500 rounded">Standard</span>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 text-slate-800 text-base leading-tight">
          An employer can choose to offer more leave than the legal minimum. They do not have to apply all the rules that apply to statutory leave to the extra leave. For example, a worker might need to be employed for a certain amount of time before they become entitled to it.
        </div>
      </div>

      <div className="group">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Text at 14pt / 1x spacing</span>
          <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded font-medium">Larger Font</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm text-slate-800 text-lg leading-tight">
          An employer can choose to offer more leave than the legal minimum. They do not have to apply all the rules that apply to statutory leave to the extra leave. For example, a worker might need to be employed for a certain amount of time before they become entitled to it.
        </div>
      </div>

      <div className="group relative">
        <div className="absolute -left-3 top-0 bottom-0 w-1 bg-emerald-400 rounded-l hidden md:block"></div>
        <div className="flex flex-wrap justify-between items-end mb-2 gap-2">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">Interactive Example</span>
            <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded font-bold flex items-center w-fit">
                <CheckCircle className="w-3 h-3 mr-1" /> Optimal + Adjustable
            </span>
          </div>
          
          {/* Controls */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <button 
              onClick={handleDecreaseFont}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hover:text-indigo-600 transition-colors"
              title="Decrease font size"
              disabled={customFontSize <= 14}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="mx-3 font-mono text-sm font-bold text-slate-700 min-w-[3ch] text-center">{customFontSize}px</span>
            <button 
              onClick={handleIncreaseFont}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-500 hover:text-indigo-600 transition-colors"
              title="Increase font size"
              disabled={customFontSize >= 40}
            >
              <Plus className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-slate-200 mx-2"></div>
            <button 
              onClick={handleResetFont}
              className="p-1.5 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors"
              title="Reset"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-200 shadow-sm text-slate-800 transition-all duration-200 ease-in-out">
          <p style={{ fontSize: `${customFontSize}px`, lineHeight: 1.5 }}>
            An employer can choose to offer more leave than the legal minimum. They do not have to apply all the rules that apply to statutory leave to the extra leave. For example, a worker might need to be employed for a certain amount of time before they become entitled to it.
          </p>
        </div>
      </div>
    </div>
  );
};