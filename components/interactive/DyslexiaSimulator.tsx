import React, { useState } from 'react';
import { MousePointerClick, AlertTriangle, Eye } from 'lucide-react';

export const DyslexiaSimulator: React.FC = () => {
  const [isCrampedRevealed, setIsCrampedRevealed] = useState(false);

  return (
    <>
      <p className="text-slate-600 mb-6">This example simulates cramped text to illustrate how <strong>people with dyslexia often experience reading</strong>. Click the box to see the text clearly.</p>
      
      <div 
        onClick={() => setIsCrampedRevealed(!isCrampedRevealed)}
        className={`p-8 rounded-xl border mb-8 max-w-2xl mx-auto cursor-pointer transition-all duration-300 relative group
          ${isCrampedRevealed 
            ? 'bg-white border-indigo-200 shadow-md scale-105' 
            : 'bg-slate-200 border-slate-300 hover:bg-slate-300'
          }
        `}
      >
        <p className={`
          transition-all duration-500 ease-in-out
          ${isCrampedRevealed 
            ? 'font-sans text-base leading-relaxed text-slate-800' 
            : 'font-serif text-justify text-[10px] leading-[0.8] tracking-[-0.08em] word-spacing-[-2px] text-slate-600 blur-[0.3px]'
          }
        `}>
          An employer can choose to offer more leave than the legal minimum. They do not have to apply all the rules that apply to statutory leave to the extra leave. For example, a worker might need to be employed for a certain amount of time before they become entitled to it.
        </p>
        
        {!isCrampedRevealed && (
          <div className="absolute inset-x-0 bottom-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm border border-indigo-100">
              <MousePointerClick className="w-3 h-3 mr-1.5" /> Click to reveal
            </span>
          </div>
        )}
      </div>

      <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
        <h4 className="font-bold text-rose-900 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Seeing text like this increases:
        </h4>
        <ul className="grid sm:grid-cols-3 gap-4">
          <li className="flex items-center text-rose-800 font-medium bg-white p-3 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Visual tiredness
          </li>
          <li className="flex items-center text-rose-800 font-medium bg-white p-3 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Stress & anxiety
          </li>
          <li className="flex items-center text-rose-800 font-medium bg-white p-3 rounded-lg shadow-sm">
            <span className="w-2 h-2 bg-rose-400 rounded-full mr-3"></span>Reluctance to read
          </li>
        </ul>
      </div>
    </>
  );
};