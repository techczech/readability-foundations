import React from 'react';
import { SectionConfig } from '../../types';
import { AlertTriangle, BookOpen } from 'lucide-react';

export const howPeopleReadData: SectionConfig = {
  id: 'how-people-read',
  title: 'How people read: strategies and approaches',
  intro: [
    {
      type: 'callout',
      variant: 'tip', // Using tip style for the intro highlight
      title: 'We don\'t read documents like stories.',
      content: 'Most documents are not stories, and they are not (and should not) be read that way. People read strategically.'
    }
  ],
  steps: [
    {
      id: 'assumptions',
      title: '5 assumptions about reading',
      icon: AlertTriangle,
      blocks: [
        {
          type: 'text',
          content: 'When creating a document, assume most readers will:'
        },
        {
          type: 'list',
          variant: 'ordered',
          items: [
            { content: 'Not read from start to finish' },
            { content: 'Not read every word' },
            { content: 'Skim first to decide to read' },
            { content: 'Return only for specific info' },
            { content: 'Read many other documents simultaneously' }
          ]
        }
      ]
    },
    {
      id: 'strategies',
      title: '3 Reading Strategies',
      icon: BookOpen,
      blocks: [
        {
          type: 'list',
          variant: 'grid',
          columns: 3,
          items: [
            {
              title: 'Strategy 1: Comprehensive',
              content: [
                 { type: 'text', content: 'Reading from start to finish. Used for stories.' },
                 { type: 'callout', variant: 'neutral', content: '**Support:** Logical structure, narrative arc.' }
              ]
            },
            {
              title: 'Strategy 2: Skimming',
              content: [
                 { type: 'text', content: 'Reading for gist. Jumping around.' },
                 { type: 'callout', variant: 'neutral', content: '**Support:** Headings, TOC, Lists, Highlights.' }
              ]
            },
            {
              title: 'Strategy 3: Scanning',
              content: [
                 { type: 'text', content: 'Finding specific information.' },
                 { type: 'callout', variant: 'neutral', content: '**Support:** Clickable TOC, Searchable text.' }
              ]
            }
          ]
        }
      ]
    }
  ]
};