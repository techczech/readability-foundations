import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { accessibilityData } from '../../data/content/accessibilityData';

export const Accessibility: React.FC = () => {
  return <SectionRenderer config={accessibilityData} />;
};
