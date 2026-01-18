import React from 'react';
import { SectionConfig } from '../../types';
import { Zap, MessageSquare, Activity } from 'lucide-react';

export const threeStepsSimpleData: SectionConfig = {
  id: '3-steps-simple',
  title: '3 steps to simpler language',
  intro: [
    { type: 'text', content: 'You can find many guides to simple language or Plain English. These three steps are intended to give you a usable guide that will give you the most benefit.' },
    { 
        type: 'interactive', 
        component: 'link-to-section', 
        data: { target: 'examples', text: 'See Examples of simplified language' } 
    }
  ],
  steps: [
    {
      id: 'shorten-sentences',
      title: 'Shorten sentences',
      icon: Zap,
      blocks: [
        {
          type: 'text',
          content: 'Long sentences take more time and effort to process both visually and grammatically. Keeping your average length under 20 words is a sensible rule of thumb.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Why long sentences are difficult:',
              variant: 'negative',
              content: [{
                type: 'list',
                variant: 'ordered',
                items: [
                  { content: 'It is more difficult to visually scan to the important point' },
                  { content: 'You have to use more complex grammar to connect sentences' },
                  { content: 'There is more to keep in memory' }
                ]
              }]
            },
            {
              title: 'How to shorten sentences:',
              variant: 'positive',
              content: [{
                type: 'list',
                variant: 'ordered',
                items: [
                  { content: 'Divide the sentence up at the conjunction such as \'but\' or \'and\'.' },
                  { content: 'Instead of using \'and\', simply start a new sentence.' },
                  { content: 'Instead of \'because\', start next sentence with \'this is because\'.' },
                  { content: 'Convert long sequences to lists.' },
                  { content: 'Rephrase with a command.' }
                ]
              }]
            }
          ]
        },
        {
            type: 'comparison',
            items: [
                {
                    title: 'Useful signals of length/complexity:',
                    variant: 'neutral',
                    content: 'Words like: **While**, **Whether**, **However**.'
                },
                {
                    title: 'When NOT to shorten:',
                    variant: 'neutral',
                    content: [{
                        type: 'list',
                        variant: 'bullet',
                        items: [
                            { content: 'You need to express a very complex idea.' },
                            { content: 'Splitting would create more language to process.' }
                        ]
                    }]
                }
            ]
        },
        {
            type: 'interactive',
            component: 'link-to-section',
            data: { target: 'readability-tool', text: 'Try Readability Checker' }
        }
      ]
    },
    {
      id: 'address-reader',
      title: 'Address the reader',
      icon: MessageSquare,
      blocks: [
        {
          type: 'text',
          content: 'Addressing the reader is a subtle signal that what you are saying applies to them. This makes them more likely to pay attention.'
        },
        {
          type: 'stat-grid',
          items: [
            {
              value: '"You"',
              label: 'Instead of a noun',
              description: '"You must wear a mask" vs "Attendees must..."'
            },
            {
              value: 'Command',
              label: 'Direct Instruction',
              description: 'Plain verb without "to"'
            },
            {
              value: '"We"',
              label: 'Instead of institution',
              description: '"We will help" vs "Our organisation will..."'
            }
          ]
        }
      ]
    },
    {
      id: 'use-verbs',
      title: 'Use verbs instead of nouns',
      icon: Activity,
      blocks: [
        {
          type: 'text',
          content: 'Written English uses more nouns than verbs. Because of this we often use **nouns to describe actions**. This take **longer to process** and readers may feel **less likely to do the action**.'
        },
        {
          type: 'text',
          content: 'Complicated nouns are common in academic and bureaucratic English. E.g. **Provision, Availability, Attendance, Failure**.'
        },
        {
          type: 'comparison',
          items: [
             {
               title: 'Noun Heavy',
               variant: 'negative',
               content: '"Failure to achieve compliance will result prosecution."'
             },
             {
               title: 'Verb Change',
               variant: 'neutral',
               content: '"If you fail to comply, you will be prosecuted."'
             }
          ]
        },
        {
            type: 'callout',
            variant: 'success',
            title: 'Direct Speech',
            content: '"If you do not follow the rules, we will take you to court."'
        }
      ]
    }
  ]
};