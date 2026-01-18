import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { tenSimpleThingsPptData } from '../../data/content/tenSimpleThingsPptData';

export const TenSimpleThingsPpt: React.FC = () => {
  return <SectionRenderer config={tenSimpleThingsPptData} />;
};
