import React from 'react';
import { ContentBlock, TextBlock, ListBlock, CalloutBlock, ComparisonBlock, ImageBlock, StatGridBlock, InteractiveBlock, TableBlock, SlideSimulationBlock } from '../../types';
import { RichText } from './RichText';
import * as Icons from 'lucide-react';
import { DyslexiaSimulator } from '../interactive/DyslexiaSimulator';
import { FontSpacingAdjuster } from '../interactive/FontSpacingAdjuster';
import { ReadabilityChecker } from '../tools/ReadabilityChecker';
import { SimpleLanguageChecklist } from '../tools/SimpleLanguageChecklist';
import { LinkToSection } from '../interactive/LinkToSection';
import { SlideSimulation } from '../interactive/SlideSimulation';

// --- Sub-renderers ---

const TextRenderer: React.FC<{ block: TextBlock }> = ({ block }) => {
  const alignClass = block.align === 'center' ? 'text-center' : block.align === 'right' ? 'text-right' : 'text-left';
  
  if (block.variant === 'heading-2') {
    return <h2 className={`text-2xl font-bold text-slate-900 mb-4 mt-8 ${alignClass}`}><RichText content={block.content} /></h2>;
  }
  if (block.variant === 'heading-3') {
    return <h3 className={`text-xl font-bold text-slate-900 mb-3 mt-6 ${alignClass}`}><RichText content={block.content} /></h3>;
  }
  if (block.variant === 'quote') {
    return (
        <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 italic text-slate-700 my-6 bg-slate-50 rounded-r-lg">
            <RichText content={block.content} />
        </blockquote>
    );
  }
  return <p className={`text-lg text-slate-700 mb-4 leading-relaxed ${alignClass}`}><RichText content={block.content} /></p>;
};

const ListRenderer: React.FC<{ block: ListBlock }> = ({ block }) => {
  const isGrid = block.variant === 'grid' || block.columns;
  
  if (isGrid) {
    const cols = block.columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
    return (
      <div className={`grid ${cols} gap-4 mb-8`}>
        {block.items.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col">
            {item.title && (
                 <div className="font-bold text-indigo-900 mb-2 block">
                     {item.icon && React.createElement((Icons as any)[item.icon] || Icons.Circle, { className: "w-5 h-5 inline mr-2 mb-0.5 text-indigo-500" })}
                     {item.title}
                 </div>
            )}
            <div className="text-slate-600 text-sm flex-grow">
              {typeof item.content === 'string' 
                ? <RichText content={item.content} />
                : <BlockRenderer blocks={item.content} />
              }
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-3 mb-6">
      {block.items.map((item, i) => {
        let icon: React.ElementType = Icons.Circle;
        let iconColor = 'text-slate-300';
        let bgClass = '';

        if (block.variant === 'check' || item.variant === 'positive') {
            icon = Icons.CheckCircle;
            iconColor = 'text-emerald-500';
        } else if (item.variant === 'negative') {
            icon = Icons.XCircle;
            iconColor = 'text-rose-500';
        } else if (item.variant === 'warning') {
            icon = Icons.AlertTriangle;
            iconColor = 'text-amber-500';
        } else if (block.variant === 'ordered') {
            // handled below
        } else if (item.icon) {
            icon = (Icons as any)[item.icon] || Icons.Circle;
            iconColor = 'text-indigo-500';
        }

        if (block.variant === 'ordered') {
             return (
                <li key={i} className="flex items-start">
                    <span className="bg-indigo-100 text-indigo-700 w-6 h-6 rounded flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div className="text-slate-700">
                        {item.title && <strong className="block text-slate-900 mb-1">{item.title}</strong>}
                        {typeof item.content === 'string' ? <RichText content={item.content} /> : <BlockRenderer blocks={item.content} />}
                    </div>
                </li>
             );
        }

        return (
          <li key={i} className={`flex items-start ${bgClass}`}>
             <div className={`mt-1 mr-3 flex-shrink-0 ${iconColor}`}>
               {React.createElement(icon, { className: "w-5 h-5" })}
             </div>
             <div className="text-slate-700">
                {item.title && <strong className="font-bold text-slate-900 mr-1">{item.title}</strong>}
                {typeof item.content === 'string' ? <RichText content={item.content} /> : <BlockRenderer blocks={item.content} />}
             </div>
          </li>
        );
      })}
    </ul>
  );
};

const CalloutRenderer: React.FC<{ block: CalloutBlock }> = ({ block }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-100 text-blue-900',
    success: 'bg-emerald-50 border-emerald-100 text-emerald-900',
    warning: 'bg-amber-50 border-amber-100 text-amber-900',
    error: 'bg-rose-50 border-rose-100 text-rose-900',
    neutral: 'bg-slate-50 border-slate-200 text-slate-900',
    tip: 'bg-indigo-50 border-indigo-100 text-indigo-900',
    example: 'bg-white border-2 border-slate-100 shadow-sm text-slate-800'
  };

  const style = styles[block.variant] || styles.neutral;
  const DefaultIcon = block.variant === 'success' ? Icons.CheckCircle : 
                      block.variant === 'error' ? Icons.XCircle :
                      block.variant === 'warning' ? Icons.AlertTriangle :
                      block.variant === 'tip' ? Icons.Zap : Icons.Info;

  return (
    <div className={`p-6 rounded-2xl border mb-8 ${style}`}>
      {(block.title || block.variant === 'tip' || block.variant === 'warning') && (
        <div className="font-bold mb-3 flex items-center text-lg">
           {block.variant !== 'example' && React.createElement((Icons as any)[block.title ? 'Info' : 'Zap'] || DefaultIcon, { className: "w-5 h-5 mr-2" })}
           {block.title || (block.variant === 'tip' ? 'Tip' : block.variant === 'warning' ? 'Important' : '')}
        </div>
      )}
      <div className={block.variant === 'example' ? 'text-lg' : ''}>
         {typeof block.content === 'string' ? <RichText content={block.content} /> : <BlockRenderer blocks={block.content} />}
      </div>
    </div>
  );
};

const ComparisonRenderer: React.FC<{ block: ComparisonBlock }> = ({ block }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {block.items.map((item, i) => {
        const style = item.variant === 'positive' ? 'bg-emerald-50 border-emerald-100 text-emerald-900' :
                      item.variant === 'negative' ? 'bg-rose-50 border-rose-100 text-rose-900' :
                      'bg-slate-50 border-slate-200 text-slate-900';
        
        const Icon = item.variant === 'positive' ? Icons.CheckCircle :
                     item.variant === 'negative' ? Icons.XCircle : Icons.Info;
                     
        return (
          <div key={i} className={`p-6 rounded-2xl border ${style}`}>
             {item.title && (
                <div className="font-bold mb-4 flex items-center">
                   <Icon className="w-5 h-5 mr-2" />
                   {item.title}
                </div>
             )}
             <div>
               {typeof item.content === 'string' ? <RichText content={item.content} /> : <BlockRenderer blocks={item.content} />}
             </div>
          </div>
        );
      })}
    </div>
  );
};

const ImageRenderer: React.FC<{ block: ImageBlock }> = ({ block }) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className={`relative overflow-hidden rounded-xl border border-slate-200 shadow-sm ${block.overlayIcon ? 'group' : ''} bg-white w-full max-w-3xl`}>
         <img src={block.src} alt={block.alt} className="w-full h-auto object-cover" />
         
         {block.label && (
           <div className={`absolute bottom-0 left-0 right-0 p-2 text-center text-xs font-bold uppercase tracking-widest bg-white/90 backdrop-blur-sm border-t
             ${block.labelColor === 'red' ? 'text-rose-600' : 
               block.labelColor === 'green' ? 'text-emerald-600' : 'text-slate-600'}
           `}>
             {block.label}
           </div>
         )}
         
         {block.overlayIcon && (
            <div className={`absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow-lg
              ${block.overlayIcon === 'thumbs-up' ? 'text-emerald-500' : 'text-rose-500'}
            `}>
               {block.overlayIcon === 'thumbs-up' ? <Icons.ThumbsUp className="w-6 h-6" /> : <Icons.ThumbsDown className="w-6 h-6" />}
            </div>
         )}
      </div>
      {block.caption && (
        <p className="mt-3 text-sm text-slate-500 italic text-center max-w-2xl">
          <RichText content={block.caption} />
        </p>
      )}
    </div>
  );
};

const StatGridRenderer: React.FC<{ block: StatGridBlock }> = ({ block }) => {
  return (
    <div className={`grid md:grid-cols-${block.items.length > 2 ? '3' : '2'} gap-6 mb-8`}>
      {block.items.map((item, i) => (
        <div key={i} className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
           <div className="font-bold text-3xl text-indigo-600 mb-2">{item.value}</div>
           <div className="font-medium text-slate-900">{item.label}</div>
           {item.description && <div className="text-xs text-slate-500 mt-2">{item.description}</div>}
        </div>
      ))}
    </div>
  );
};

const TableRenderer: React.FC<{ block: TableBlock }> = ({ block }) => {
  return (
    <div className="overflow-x-auto mb-8 rounded-2xl border border-slate-200 shadow-sm">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {block.headers.map((header, i) => (
              <th key={i} className="p-4 font-bold text-slate-900 whitespace-nowrap">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.cells.map((cell, j) => (
                <td key={j} className={`p-4 align-top ${j === 0 ? 'font-medium text-indigo-900' : ''}`}>
                   {j === 0 && row.icon && React.createElement((Icons as any)[row.icon] || Icons.Circle, { className: "w-4 h-4 inline mr-2 mb-1" })}
                   {typeof cell === 'string' ? <RichText content={cell} /> : <BlockRenderer blocks={cell} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SlideSimulationRenderer: React.FC<{ block: SlideSimulationBlock }> = ({ block }) => {
  return <SlideSimulation block={block} />;
};

const InteractiveRenderer: React.FC<{ block: InteractiveBlock }> = ({ block }) => {
  switch (block.component) {
    case 'dyslexia-simulator': return <DyslexiaSimulator />;
    case 'font-adjuster': return <FontSpacingAdjuster />;
    case 'readability-checker': return <ReadabilityChecker />;
    case 'checklist': return <SimpleLanguageChecklist />;
    case 'link-to-section': 
        return (
            <div className="mt-6 flex justify-center">
                <LinkToSection sectionId={block.data.target} className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors flex items-center shadow-md hover:shadow-lg">
                    {block.data.text || 'Go to section'} <Icons.ArrowRight className="ml-2 w-5 h-5" />
                </LinkToSection>
            </div>
        );
    default: return null;
  }
};

// --- Main Renderer ---

export const BlockRenderer: React.FC<{ blocks: ContentBlock[] }> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        const key = block.id || index;
        switch (block.type) {
          case 'text': return <TextRenderer key={key} block={block} />;
          case 'list': return <ListRenderer key={key} block={block} />;
          case 'callout': return <CalloutRenderer key={key} block={block} />;
          case 'comparison': return <ComparisonRenderer key={key} block={block} />;
          case 'image': return <ImageRenderer key={key} block={block} />;
          case 'stat-grid': return <StatGridRenderer key={key} block={block} />;
          case 'table': return <TableRenderer key={key} block={block} />;
          case 'slide-simulation': return <SlideSimulationRenderer key={key} block={block} />;
          case 'interactive': return <InteractiveRenderer key={key} block={block} />;
          default: return null;
        }
      })}
    </>
  );
};