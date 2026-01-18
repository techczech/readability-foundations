import React, { useState } from 'react';
import { Check, MessageSquare, Trash2, RefreshCw } from 'lucide-react';

interface ChecklistItem {
  id: number;
  label: string;
  checked: boolean;
  note: string;
}

const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 1, label: 'Average sentence length is under 20 words', checked: false, note: '' },
  { id: 2, label: 'Addressed the reader as "You"', checked: false, note: '' },
  { id: 3, label: 'Used active verbs instead of abstract nouns', checked: false, note: '' },
  { id: 4, label: 'Paragraphs are short (under 5 sentences)', checked: false, note: '' },
  { id: 5, label: 'Key information is placed first', checked: false, note: '' },
  { id: 6, label: 'Formatting (bolding) used for key phrases', checked: false, note: '' },
  { id: 7, label: 'Lists broken into bullet points', checked: false, note: '' },
  { id: 8, label: 'Headings used to structure content', checked: false, note: '' },
  { id: 9, label: 'Layout uses plenty of white space', checked: false, note: '' },
];

export const SimpleLanguageChecklist: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(INITIAL_CHECKLIST);
  const [activeNoteId, setActiveNoteId] = useState<number | null>(null);

  const toggleCheck = (id: number) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const updateNote = (id: number, note: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, note } : item
    ));
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
           <h3 className="font-bold text-slate-700">Simple Language Checklist</h3>
           <p className="text-sm text-slate-500">Go through your document item by item. Add notes to give feedback or track changes.</p>
        </div>
        <div className="divide-y divide-slate-100">
          {checklist.map((item) => (
            <div key={item.id} className="p-4 md:p-6 transition-colors hover:bg-slate-50/50">
              <div className="flex items-start justify-between">
                <label className="flex items-center cursor-pointer flex-grow mr-4">
                   <div className="relative flex items-center justify-center w-6 h-6 mr-4">
                     <input 
                       type="checkbox" 
                       checked={item.checked}
                       onChange={() => toggleCheck(item.id)}
                       className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-lg checked:bg-indigo-600 checked:border-indigo-600 transition-all cursor-pointer"
                     />
                     <Check className="w-4 h-4 text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                   </div>
                   <span className={`text-lg transition-colors ${item.checked ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                     {item.label}
                   </span>
                </label>
                <button 
                  onClick={() => setActiveNoteId(activeNoteId === item.id ? null : item.id)}
                  className={`p-2 rounded-lg transition-colors flex-shrink-0 ${
                    activeNoteId === item.id || item.note 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                  }`}
                  title="Add Note"
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
              
              {/* Note Area */}
              {(activeNoteId === item.id || item.note) && (
                <div className={`mt-4 pl-10 animate-in slide-in-from-top-2 duration-200 ${activeNoteId === item.id ? 'block' : 'hidden md:block'}`}>
                  <div className="relative">
                    <textarea
                      value={item.note}
                      onChange={(e) => updateNote(item.id, e.target.value)}
                      placeholder="Add a note or feedback..."
                      className="w-full bg-yellow-50/50 border border-yellow-200 rounded-xl p-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all placeholder:text-yellow-700/30"
                      rows={2}
                    />
                    {item.note && (
                      <button 
                        onClick={() => updateNote(item.id, '')}
                        className="absolute right-2 top-2 text-yellow-700/30 hover:text-rose-500 p-1 rounded transition-colors"
                        title="Clear Note"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
         <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
           <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all checks and notes?')) {
                setChecklist(INITIAL_CHECKLIST);
              }
            }}
            className="text-sm font-medium text-slate-500 hover:text-rose-600 flex items-center transition-colors"
           >
             <RefreshCw className="w-4 h-4 mr-2" /> Reset Checklist
           </button>
         </div>
      </div>
    </div>
  );
};