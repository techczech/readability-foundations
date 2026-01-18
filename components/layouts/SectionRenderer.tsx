import React, { useState } from 'react';
import { SectionConfig } from '../../types';
import { ScrollLayout } from './ScrollLayout';
import { CarouselLayout } from './CarouselLayout';
import { Layout, Rows } from 'lucide-react';

interface SectionRendererProps {
  config: SectionConfig;
  initialMode?: 'scroll' | 'carousel';
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ config, initialMode = 'scroll' }) => {
  const [mode, setMode] = useState<'scroll' | 'carousel'>(initialMode);

  return (
    <div>
      {/* Layout Toggle (visible on larger screens to avoid clutter on mobile) */}
      <div className="flex justify-end mb-4">
        <div className="bg-slate-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setMode('scroll')}
            className={`p-2 rounded-md transition-all ${
              mode === 'scroll' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
            title="Scroll View"
          >
            <Rows className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMode('carousel')}
            className={`p-2 rounded-md transition-all ${
              mode === 'carousel' 
                ? 'bg-white text-indigo-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
            title="Step-by-Step View"
          >
            <Layout className="w-4 h-4" />
          </button>
        </div>
      </div>

      {mode === 'scroll' ? (
        <ScrollLayout config={config} />
      ) : (
        <CarouselLayout config={config} />
      )}
    </div>
  );
};