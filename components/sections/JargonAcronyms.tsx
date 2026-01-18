import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { jargonAcronymsData } from '../../data/content/jargonAcronymsData';

export const JargonAcronyms: React.FC = () => {
  return <SectionRenderer config={jargonAcronymsData} />;
};
