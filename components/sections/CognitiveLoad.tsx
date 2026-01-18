import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { cognitiveLoadData } from '../../data/content/cognitiveLoadData';

export const CognitiveLoad: React.FC = () => {
  return <SectionRenderer config={cognitiveLoadData} />;
};
