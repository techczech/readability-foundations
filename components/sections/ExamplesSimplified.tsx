import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { examplesSimplifiedData } from '../../data/content/examplesSimplifiedData';

export const ExamplesSimplified: React.FC = () => {
  return <SectionRenderer config={examplesSimplifiedData} />;
};
