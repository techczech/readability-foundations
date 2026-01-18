import React, { useEffect, useRef } from 'react';
import { FivePrinciples } from './sections/FivePrinciples';
import { HowPeopleRead } from './sections/HowPeopleRead';
import { CognitiveLoad } from './sections/CognitiveLoad';
import { TenSimpleThingsDocs } from './sections/TenSimpleThingsDocs';
import { ThreeStepsSimple } from './sections/ThreeStepsSimple';
import { TenSimpleThingsPpt } from './sections/TenSimpleThingsPpt';
import { Accessibility } from './sections/Accessibility';
import { ExamplesSimplified } from './sections/ExamplesSimplified';
import { JargonAcronyms } from './sections/JargonAcronyms';
import { ChecklistSection } from './sections/ChecklistSection';
import { ReadabilityToolSection } from './sections/ReadabilityToolSection';
import { FormattingExamples } from './sections/FormattingExamples';
import { SlideFormattingExamples } from './sections/SlideFormattingExamples';
import { Evidence } from './sections/Evidence';
import { NAV_GROUPS } from '../types';
import { ChevronRight } from 'lucide-react';

interface ContentProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Content: React.FC<ContentProps> = ({ activeSection, onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus Management: Move focus to the first heading when activeSection changes
  useEffect(() => {
    if (containerRef.current) {
      const heading = containerRef.current.querySelector('h1, h2');
      if (heading instanceof HTMLElement) {
        heading.focus();
      }
    }
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'five-principles':
        return <FivePrinciples />;
      case 'how-people-read':
        return <HowPeopleRead />;
      case 'cognitive-load':
        return <CognitiveLoad />;
      case '10-simple-things-docs':
        return <TenSimpleThingsDocs />;
      case '3-steps-simple':
        return <ThreeStepsSimple onNavigate={onNavigate} />;
      case '10-simple-things-ppt':
        return <TenSimpleThingsPpt />;
      case 'accessibility':
        return <Accessibility />;
      case 'examples':
        return <ExamplesSimplified />;
      case 'acronyms':
        return <JargonAcronyms />;
      case 'checklist':
        return <ChecklistSection />;
      case 'readability-tool':
        return <ReadabilityToolSection />;
      case 'formatting-examples':
        return <FormattingExamples />;
      case 'slide-formatting-examples':
        return <SlideFormattingExamples />;
      case 'evidence':
        return <Evidence />;
      default:
        return <div>Section not found</div>;
    }
  };

  // Find Breadcrumb Data
  const getBreadcrumbs = () => {
    for (const group of NAV_GROUPS) {
      const section = group.items.find(item => item.id === activeSection);
      if (section) {
        return { groupTitle: group.title, sectionTitle: section.title };
      }
    }
    return null;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-6 py-8 md:py-16 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-sm text-slate-500">
           <span className="font-medium">{breadcrumbs.groupTitle}</span>
           <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
           <span className="font-bold text-indigo-600" aria-current="page">{breadcrumbs.sectionTitle}</span>
        </nav>
      )}

      {renderSection()}
    </div>
  );
};