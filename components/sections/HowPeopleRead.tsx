import React from 'react';
import { SectionRenderer } from '../layouts/SectionRenderer';
import { howPeopleReadData } from '../../data/content/howPeopleReadData';

export const HowPeopleRead: React.FC = () => {
  return <SectionRenderer config={howPeopleReadData} />;
};
