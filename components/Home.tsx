import React from 'react';
import { NAV_GROUPS } from '../types';
import { Logo } from './Logo';
import { 
  Layout, 
  Eye, 
  Brain, 
  FileText, 
  Zap, 
  MonitorPlay, 
  ArrowRight, 
  BookOpen, 
  Accessibility, 
  PenTool, 
  ClipboardList,
  CheckSquare,
  MessageSquare, 
  Layers, 
  Presentation, 
  Scale
} from 'lucide-react';

interface HomeProps {
  onNavigate: (id: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Eye,
  Brain,
  FileText, 
  Zap, 
  MonitorPlay, 
  Accessibility, 
  PenTool, 
  ClipboardList, 
  CheckSquare, 
  MessageSquare, 
  BookOpen, 
  Layers, 
  Presentation, 
  Scale
};

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 lg:py-24">
          
          {/* Header Text */}
          <div className="text-center max-w-5xl mx-auto mb-12">
            <div className="flex justify-center mb-8">
              <div className="p-5 bg-white rounded-3xl shadow-lg shadow-indigo-100 border border-slate-100 ring-1 ring-slate-900/5">
                <Logo className="w-20 h-20" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Foundations of Readability
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Create accessible, easy-to-process documents and presentations based on the work of Dominik Lukeš.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <button 
                onClick={() => onNavigate('five-principles')}
                className="flex items-center font-bold text-white bg-indigo-600 px-8 py-4 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Start the Guide <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 text-center text-sm text-slate-400">
             Dominik Lukeš, CC BY • Version from May 2023
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {NAV_GROUPS.map((group, index) => (
          <div key={index}>
            <div className="flex items-center mb-10">
              <span className="w-8 h-px bg-indigo-200 mr-4"></span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{group.title}</h2>
              <span className="flex-grow h-px bg-slate-200 ml-4"></span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((section) => {
                const Icon = iconMap[section.iconName];
                return (
                  <button
                    key={section.id}
                    onClick={() => onNavigate(section.id)}
                    className="group flex flex-col items-start text-left bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 h-full"
                  >
                    <div className="p-3 bg-indigo-50 rounded-xl mb-6 group-hover:bg-indigo-100 transition-colors">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                      {section.description}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                      Go to Section <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p className="mb-2">Foundations of Readability</p>
        <p className="text-sm">Based on the work of Dominik Lukeš (CC BY)</p>
      </footer>
    </div>
  );
};