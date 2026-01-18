import React from 'react';
import { Section } from '../Section';
import { SimpleLanguageChecklist } from '../tools/SimpleLanguageChecklist';

export const ChecklistSection: React.FC = () => {
  return (
    <Section id="checklist" title="Simple Language Checklist">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Use this checklist to audit your content for simple language principles.
      </p>
      <SimpleLanguageChecklist />
    </Section>
  );
};
