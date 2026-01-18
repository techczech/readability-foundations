import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { evidenceData } from '../../data/content/evidenceData';

export const Evidence: React.FC = () => {
  return <SectionRenderer config={evidenceData} />;
};
