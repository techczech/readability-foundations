import React, { ReactNode } from 'react';
import { Link } from 'lucide-react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`scroll-mt-24 mb-16 md:mb-24 ${className}`}>
      {title && (
        <div className="group relative">
          <h2 
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded-lg"
            tabIndex={-1}
          >
            {title}
            <a 
              href={`#${id}`}
              className="ml-3 inline-flex items-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity text-slate-400 hover:text-indigo-600 align-middle"
              aria-label={`Link to section: ${title}`}
              title="Copy link to section"
            >
              <Link className="w-5 h-5" />
            </a>
          </h2>
        </div>
      )}
      <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};