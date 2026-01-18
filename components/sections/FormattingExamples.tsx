import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { formattingExamplesData } from '../../data/content/formattingExamplesData';

export const FormattingExamples: React.FC = () => {
  return <SectionRenderer config={formattingExamplesData} />;
};