import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <svg 
      viewBox="0 0 48 48" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Document Outline with folded corner */}
      <path 
        d="M10 6H30L40 16V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V8C8 6.89543 8.89543 6 10 6Z" 
        stroke="currentColor"
        className="text-slate-800" 
      />
      <path 
        d="M30 6V16H40" 
        stroke="currentColor"
        className="text-slate-800" 
      />
      
      {/* Content Lines representing structured readability */}
      <path 
        d="M16 22H32" 
        stroke="currentColor"
        className="text-indigo-600" 
      />
      <path 
        d="M16 30H28" 
        stroke="currentColor"
        className="text-slate-400" 
      />
      <path 
        d="M16 38H24" 
        stroke="currentColor"
        className="text-slate-400" 
      />
    </svg>
  );
};
