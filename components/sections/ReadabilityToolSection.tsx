import React from 'react';
import { Section } from '../Section';
import { ReadabilityChecker } from '../tools/ReadabilityChecker';

export const ReadabilityToolSection: React.FC = () => {
  return (
    <Section id="readability-tool" title="Readability Checker">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Interactive tool to check sentence length and identify complex text.
      </p>
      <ReadabilityChecker />
    </Section>
  );
};
