import React from 'react';
import { SectionConfig } from '../../types';
import { Layout, AlignLeft, MousePointerClick, ArrowDown, Zap } from 'lucide-react';

export const fivePrinciplesData: SectionConfig = {
  id: 'five-principles',
  title: 'Five principles of readability',
  intro: [
    {
      type: 'text',
      content: 'Mastering these five foundational principles will instantly elevate the quality and accessibility of your documents.'
    }
  ],
  steps: [
    {
      id: 'space',
      title: 'Space',
      shortTitle: '1. Space',
      icon: Layout,
      blocks: [
        {
          type: 'text',
          content: 'Increasing the amount of space makes it **easier to process**. The more space around the text, the **more attention** is available for content.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Easiest ways of increasing space:',
              variant: 'positive',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Larger font' },
                  { content: 'Increased line spacing' },
                  { content: 'Shorter lines' }
                ]
              }]
            },
            {
              title: 'Avoid formatting that distorts:',
              variant: 'negative',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Underlining' },
                  { content: 'ALL CAPS' },
                  { content: '_Italics for whole paragraphs_' },
                  { content: 'Centred paragraphs' }
                ]
              }]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          content: 'Tip: Avoid table borders being too close to the text.'
        }
      ]
    },
    {
      id: 'chunks',
      title: 'Chunks',
      shortTitle: '2. Chunks',
      icon: AlignLeft,
      blocks: [
        {
          type: 'text',
          content: 'Splitting text into smaller **chunks makes it easier to process**. Readers can both **skim and scan the text more quickly**.'
        },
        {
          type: 'text',
          content: '**You should break:**'
        },
        {
          type: 'list',
          variant: 'grid',
          columns: 3,
          items: [
            {
              title: 'Text',
              content: 'into sections and subsections marked with headings'
            },
            {
              title: 'Lists',
              content: 'into bullet points or numbered lists'
            },
            {
              title: 'Blocks',
              content: 'of text into shorter paragraphs'
            }
          ]
        }
      ]
    },
    {
      id: 'guides',
      title: 'Guides',
      shortTitle: '3. Guides',
      icon: MousePointerClick,
      blocks: [
        {
          type: 'text',
          content: 'Adding guides helps the reader spend less time decoding and **focus on what you want to say**.'
        },
        {
          type: 'list',
          variant: 'icon',
          items: [
            { content: '**Bold key phrases** in long paragraphs', icon: 'ChevronRight' },
            { content: 'Provide an **outline summary**', icon: 'ChevronRight' },
            { content: 'Add **icons** to help recall', icon: 'ChevronRight' },
            { content: 'Summarise instructions with **flowcharts**', icon: 'ChevronRight' },
            { content: 'Use **images** to illustrate', icon: 'ChevronRight' }
          ]
        }
      ]
    },
    {
      id: 'structure',
      title: 'Information Structure',
      shortTitle: '4. Structure',
      icon: ArrowDown,
      blocks: [
        {
          type: 'comparison',
          items: [
             {
               variant: 'neutral',
               content: [
                 {
                   type: 'text',
                   content: 'Give the **important information first**. Put **background second or last**. Take your cues from journalistic texts. Start with the new information.'
                 },
                 {
                   type: 'callout',
                   variant: 'info',
                   content: '**Important!** This does not mean removing background info, just moving it to the end or a linked document.'
                 }
               ]
             },
             {
               title: 'Move these to the end:',
               variant: 'warning',
               content: [{
                 type: 'list',
                 variant: 'ordered',
                 items: [
                   { content: 'Welcomes and thanks' },
                   { content: 'Historical or institutional background' },
                   { content: 'Information obvious from context' }
                 ]
               }]
             }
          ]
        }
      ]
    },
    {
      id: 'simple-language',
      title: 'Simple Language',
      shortTitle: '5. Simple Language',
      icon: Zap,
      blocks: [
        {
          type: 'stat-grid',
          items: [
            {
              value: '15-20',
              label: 'Words per sentence',
              description: 'Use shorter sentences'
            },
            {
              value: '"You"',
              label: 'Address the reader',
              description: 'Instead of "Users"'
            },
            {
              value: 'Verbs',
              label: 'Action over Nouns',
              description: '"Arrive" vs "Arrival"'
            }
          ]
        }
      ]
    }
  ]
};