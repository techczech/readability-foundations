import React, { useState } from 'react';
import { Section } from '../Section';
import { PenTool, CheckSquare } from 'lucide-react';
import { ReadabilityChecker } from '../tools/ReadabilityChecker';
import { SimpleLanguageChecklist } from '../tools/SimpleLanguageChecklist';

export const ToolsAndChecklists: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState<'readability' | 'checklist'>('readability');

  return (
    <Section id="tools-checklists" title="Tools and checklists">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Use these interactive tools to check your documents or provide feedback to others.
      </p>

      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveToolTab('readability')}
          className={`px-6 py-4 font-bold text-sm uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${
            activeToolTab === 'readability' 
              ? 'border-indigo-600 text-indigo-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center">
            <PenTool className="w-4 h-4 mr-2" />
            Readability Checker
          </div>
        </button>
        <button
          onClick={() => setActiveToolTab('checklist')}
          className={`px-6 py-4 font-bold text-sm uppercase tracking-wide border-b-2 transition-colors whitespace-nowrap ${
            activeToolTab === 'checklist' 
              ? 'border-indigo-600 text-indigo-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
          }`}
        >
          <div className="flex items-center">
            <CheckSquare className="w-4 h-4 mr-2" />
            Simple Language Checklist
          </div>
        </button>
      </div>

      {activeToolTab === 'readability' ? (
        <ReadabilityChecker />
      ) : (
        <SimpleLanguageChecklist />
      )}
    </Section>
  );
};