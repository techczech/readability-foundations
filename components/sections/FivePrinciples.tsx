import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { fivePrinciplesData } from '../../data/content/fivePrinciplesData';

export const FivePrinciples: React.FC = () => {
  return <SectionRenderer config={fivePrinciplesData} />;
};