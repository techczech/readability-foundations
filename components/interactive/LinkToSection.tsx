import React from 'react';
import { useNavigation } from '../../context/NavigationContext';

interface LinkToSectionProps {
  sectionId: string;
  className?: string;
  children: React.ReactNode;
}

export const LinkToSection: React.FC<LinkToSectionProps> = ({ sectionId, className = '', children }) => {
  const { onNavigate } = useNavigation();
  return (
    <button 
      onClick={() => onNavigate(sectionId)} 
      className={`text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};