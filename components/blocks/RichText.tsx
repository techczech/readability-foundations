import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

interface RichTextProps {
  content: string;
  className?: string;
}

export const RichText: React.FC<RichTextProps> = ({ content, className = '' }) => {
  const { onNavigate } = useNavigation();

  if (!content) return null;

  // Split by internal links [text](sectionId) and bolding **text**
  // Regex to match [text](link) OR **text** OR _text_
  const parts = content.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)|(_.*?_)/g).filter(Boolean);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Link
        if (part.match(/^\[(.*?)\]\((.*?)\)$/)) {
          const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
          if (match) {
            const text = match[1];
            const link = match[2];
            
            // Check if it's an external link
            if (link.startsWith('http')) {
                return (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline hover:text-indigo-800 font-medium">
                        {text}
                    </a>
                );
            }

            return (
              <button
                key={index}
                onClick={() => onNavigate(link)}
                className="text-indigo-600 underline hover:text-indigo-800 font-medium inline-block"
              >
                {text}
              </button>
            );
          }
        }

        // Bold
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }

        // Italic
        if (part.startsWith('_') && part.endsWith('_')) {
            return <em key={index} className="italic">{part.slice(1, -1)}</em>;
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};