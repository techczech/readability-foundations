import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { slideFormattingExamplesData } from '../../data/content/slideFormattingExamplesData';

export const SlideFormattingExamples: React.FC = () => {
  return <SectionRenderer config={slideFormattingExamplesData} />;
};
