import React from 'react';
import { SectionConfig } from '../../types';
import { 
  Heading, List, AlignLeft, Bold, ArrowDown, ListOrdered, Scissors, Minimize, Type, Image
} from 'lucide-react';

export const tenSimpleThingsDocsData: SectionConfig = {
  id: '10-simple-things-docs',
  title: '10 tips for readable documents',
  intro: [{
      type: 'text',
      content: 'Using the five principles, you can improve the readability of your document in 10 steps.'
  }],
  steps: [
    {
      id: 'headings',
      title: 'Headings',
      icon: Heading,
      blocks: [
        {
          type: 'text',
          content: 'Break documents into section using headings and subheadings.'
        },
        {
          type: 'callout',
          variant: 'tip',
          content: 'You must mark headings with styles such as Heading 1, Heading 2, and so on.'
        },
        {
          type: 'callout',
          variant: 'example',
          content: [
              { type: 'text', variant: 'heading-2', content: 'Heading 1' },
              { type: 'text', content: 'Section content goes here...' },
              { type: 'text', variant: 'heading-3', content: 'Heading 2' },
              { type: 'text', content: 'Subsection content goes here...' },
          ]
        }
      ]
    },
    {
      id: 'bullet-points',
      title: 'Bullet points',
      icon: List,
      blocks: [
        {
          type: 'list',
          variant: 'bullet',
          items: [
            { content: 'Break lists into bullet points.' },
            { content: 'Number the list if you often refer to individual points.', variant: 'positive' }
          ]
        }
      ]
    },
    {
      id: 'shorter-paragraphs',
      title: 'Shorter paragraphs',
      icon: AlignLeft,
      blocks: [
        {
          type: 'text',
          content: 'Break text into shorter paragraphs. That will greatly increase ease of scanning. Your readers will also not be put off by a big block of text.'
        }
      ]
    },
    {
      id: 'bold-key-phrases',
      title: 'Bold key phrases',
      icon: Bold,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              variant: 'positive',
              content: '**Bold key phrases** in longer paragraphs. This has been shown to **increase comprehension**.'
            },
            {
              variant: 'negative',
              content: '**Do not bold** entire sentences or paragraphs. **Blocks of bold text are more difficult to process visually.**'
            }
          ]
        }
      ]
    },
    {
      id: 'background-last',
      title: 'Background last',
      icon: ArrowDown,
      blocks: [
        {
          type: 'text',
          content: 'Start with the key new information. Do not leave out important background but put it last. _Sometimes all you have to do is take the first paragraph and put it second or at the end._'
        },
        {
          type: 'list',
          variant: 'ordered',
          items: [
            { content: '**Key Information**', variant: 'positive' },
            { content: 'Background / Context' },
            { content: 'Decorative / Welcomes', variant: 'negative' }
          ]
        },
        {
          type: 'callout',
          variant: 'error',
          content: 'Do not remove important information, but documents often start with welcomes and introductions that are essentially decorative. You can easily **skip decorative text**. Decorative text just gets in the way.'
        }
      ]
    },
    {
      id: 'show-outline',
      title: 'Show outline',
      icon: ListOrdered,
      blocks: [
        {
          type: 'text',
          content: 'Show the outline of the text. You can use:'
        },
        {
          type: 'stat-grid',
          items: [
             { label: 'Table of contents', value: '1', description: '' },
             { label: 'List of key points', value: '2', description: '' },
             { label: 'Icons with keywords', value: '3', description: '' }
          ]
        }
      ]
    },
    {
      id: 'shorter-sentences',
      title: 'Shorter sentences',
      icon: Scissors,
      blocks: [
        {
          type: 'text',
          content: 'Shortening sentences will increase readability of your text more than any other advice on simple language. Keep the average between **15 and 20 words per sentence**.'
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Some other language tips:',
          content: [{
            type: 'list',
            variant: 'check',
            items: [
              { content: 'Address the reader rather than talk about them.' },
              { content: 'Use verbs rather than nouns when possible.' },
              { content: 'Avoid repeating the same word in lists.' }
            ]
          }]
        }
      ]
    },
    {
      id: 'line-length',
      title: 'Line length',
      icon: Minimize,
      blocks: [
        {
          type: 'text',
          content: 'Shorter lines are easier to scan. It is not the physical length but the number of characters. Keep your lines between **50 and 70 characters**.'
        },
        {
          type: 'callout',
          variant: 'example',
          content: '~ 60 characters wide ~\nThis box demonstrates a constrained line length. It is much easier for the eye to track back to the start of the next line when the line is not too long.'
        },
        {
          type: 'list',
          variant: 'grid',
          columns: 2,
          items: [
            { content: 'People who use **magnifiers** will find it easier to follow.' },
            { content: '**Increasing the font size** achieves the same effect.' }
          ]
        }
      ]
    },
    {
      id: 'font-size',
      title: 'Font size and spacing',
      icon: Type,
      blocks: [
        {
          type: 'text',
          content: 'You can increase speed of reading by up to 10% if you simply make the font bigger and increasing line spacing. This should really be the first thing you do but you may not always have control over this.'
        },
        {
           type: 'comparison',
           items: [
             {
               title: 'Ideal Settings',
               variant: 'positive',
               content: [{
                 type: 'list',
                 variant: 'bullet',
                 items: [
                   { title: 'Line Spacing', content: '**1.2 - 1.5**' },
                   { title: 'Font Size', content: '**Min 12pt** (more is often better)' }
                 ]
               }]
             },
             {
               title: 'Examples',
               variant: 'neutral',
               content: [{
                 type: 'list',
                 variant: 'bullet',
                 items: [
                   { title: 'Handout', content: 'Arial 14pt' },
                   { title: 'Long Text', content: 'Times New Roman 13pt' },
                   { title: 'PowerPoint', content: 'Arial 28pt+' },
                   { title: 'Email', content: 'Calibri 14pt' }
                 ]
               }]
             }
           ]
        }
      ]
    },
    {
      id: 'graphics-use',
      title: 'Graphics use',
      icon: Image,
      blocks: [
        {
          type: 'text',
          content: 'Graphics can increase comprehension and ease navigation. They also make the text more approachable. However, beware of overusing graphics by simply adding too many decorative elements that have little relevance to the content.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Good uses',
              variant: 'positive',
              content: [{
                type: 'list',
                variant: 'check',
                items: [
                  { content: 'Icons added to lists' },
                  { content: 'Charts used to summarise' },
                  { content: 'Images used to illustrate' }
                ]
              }]
            },
            {
              title: 'Avoid',
              variant: 'negative',
              content: [{
                type: 'list',
                variant: 'bullet', // Default dot for negative
                items: [
                  { content: 'Superfluous images' },
                  { content: 'Images not related to the text' },
                  { content: 'Very busy and distracting images or icons' }
                ]
              }]
            }
          ]
        }
      ]
    }
  ]
};