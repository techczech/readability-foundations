import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { tenSimpleThingsDocsData } from '../../data/content/tenSimpleThingsDocsData';

export const TenSimpleThingsDocs: React.FC = () => {
  return <SectionRenderer config={tenSimpleThingsDocsData} />;
};
