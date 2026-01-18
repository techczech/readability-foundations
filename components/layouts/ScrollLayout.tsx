import React, { useEffect, useState } from 'react';
import { SectionConfig } from '../../types';
import { Section } from '../Section';
import { BlockRenderer } from '../blocks/BlockRenderer';

interface ScrollLayoutProps {
  config: SectionConfig;
}

export const ScrollLayout: React.FC<ScrollLayoutProps> = ({ config }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const mainContainer = document.getElementById('main-content-scroll');
    if (!mainContainer) return;

    const handleScroll = () => {
      const scrollTop = mainContainer.scrollTop;
      const scrollHeight = mainContainer.scrollHeight;
      const clientHeight = mainContainer.clientHeight;
      
      const totalScrollable = scrollHeight - clientHeight;
      const currentProgress = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
      
      setScrollProgress(currentProgress);
    };

    mainContainer.addEventListener('scroll', handleScroll);
    return () => mainContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update focus for accessibility
      const header = element.querySelector('h1, h2, h3');
      if (header instanceof HTMLElement) {
        header.focus();
      }
    }
  };

  return (
    <div className="relative flex flex-col xl:flex-row gap-0 xl:gap-16 items-start">
      {/* Main Content */}
      <div className="flex-1 w-full min-w-0">
        
        {/* Sticky Progress Bar - Now inside the content column to match reading width */}
        <div className="sticky top-0 z-30 w-full h-1 bg-slate-100 mb-8 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>

        <Section id={config.id} title={config.title}>
          {config.intro && (
              <div className="mb-12">
                  {Array.isArray(config.intro) ? <BlockRenderer blocks={config.intro} /> : config.intro}
              </div>
          )}
          
          <div className="space-y-16">
            {config.steps.map((step, index) => (
              <article 
                key={step.id} 
                id={step.id}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ring-1 ring-slate-900/5 scroll-mt-24"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 text-indigo-700 font-bold w-10 h-10 rounded-full flex items-center justify-center mr-4 text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded" tabIndex={-1}>
                    {step.title}
                  </h3>
                </div>
                <div>
                  {step.blocks ? <BlockRenderer blocks={step.blocks} /> : step.content}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>

      {/* Sticky Table of Contents Sidebar (Desktop Only) */}
      <aside className="hidden xl:block w-72 sticky top-8 h-fit animate-in fade-in duration-700 delay-300 flex-shrink-0">
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-bold text-xs uppercase tracking-widest text-slate-500 mb-4">On this page</h4>
          <nav className="flex flex-col space-y-3">
            <a 
              href={`#${config.id}`} 
              onClick={(e) => handleScrollToSection(e, config.id)}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none focus:text-indigo-600 focus:underline"
            >
              Introduction
            </a>
            {config.steps.map((step) => (
              <a 
                key={step.id} 
                href={`#${step.id}`}
                onClick={(e) => handleScrollToSection(e, step.id)}
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center group focus:outline-none focus:text-indigo-600"
              >
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3 group-hover:bg-indigo-400 group-focus:bg-indigo-400 transition-colors"></span>
                {step.shortTitle || step.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
};