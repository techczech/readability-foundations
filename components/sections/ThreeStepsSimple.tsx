import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { threeStepsSimpleData } from '../../data/content/threeStepsSimpleData';

interface ThreeStepsSimpleProps {
  onNavigate?: (id: string) => void; // Kept for compatibility but unused
}

export const ThreeStepsSimple: React.FC<ThreeStepsSimpleProps> = () => {
  return <SectionRenderer config={threeStepsSimpleData} />;
};