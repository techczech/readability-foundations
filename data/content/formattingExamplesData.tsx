import React from 'react';
import { SectionConfig } from '../../types';
import { Eye, Layers, CheckCircle } from 'lucide-react';

export const formattingExamplesData: SectionConfig = {
  id: 'formatting-examples',
  title: 'Visual examples of text formatting',
  intro: [
    {
      type: 'callout',
      variant: 'tip',
      content: [
        { type: 'text', content: 'In this section, we illustrate how simple formatting changes—like space, bolding, and bullet points—can dramatically improve readability. These examples are based on content from the GOV.UK [Holiday entitlement](https://www.gov.uk/holiday-entitlement-rights) page.' },
        { type: 'text', content: '**Note:** While GOV.UK is a model of best practice, these examples show how applying specific principles can further aid processing for all readers, especially those with dyslexia or cognitive load challenges.' }
      ]
    }
  ],
  steps: [
    {
      id: 'dyslexic-experience',
      title: 'Text as experienced by dyslexic readers',
      icon: Eye,
      blocks: [
        {
          type: 'interactive',
          component: 'dyslexia-simulator'
        }
      ]
    },
    {
      id: 'benefits-space',
      title: 'Benefits of space',
      icon: Layers,
      blocks: [
        {
          type: 'text',
          content: 'Simply increasing the font size and line spacing gives the reader a much greater sense of reading ease.'
        },
        {
          type: 'interactive',
          component: 'font-adjuster'
        }
      ]
    },
    {
      id: 'highlighting',
      title: 'Benefits of highlighting key words',
      icon: CheckCircle,
      blocks: [
        {
          type: 'text',
          content: 'We can make it even easier for the reader to skim and scan the paragraph by **bolding key phrases**.'
        },
        {
          type: 'callout',
          variant: 'example',
          content: 'An **employer can choose to offer more leave** than the legal minimum. They do not have to apply all the rules that apply to statutory leave to the extra leave. **For example**, a worker might need to be employed for a certain amount of time before they become entitled to it.'
        },
        {
          type: 'text',
          content: '_This makes the text approachable and guides the eye to the main points._',
          align: 'center'
        }
      ]
    },
    {
      id: 'chunking',
      title: 'Benefits of chunking with bullet points',
      icon: Layers,
      blocks: [
        {
          type: 'text',
          content: 'An even more powerful aid to processing is breaking the text into smaller chunks. Bullet points are useful even if the text is not a list in the traditional sense.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Original Paragraph',
              variant: 'neutral',
              content: 'For this course you are required to submit one individual assignment, weighted at 100%. There will be a choice of two questions; you should answer only one of the two. The assignment should be a maximum of 3,000 words including the main body of text, tables, figures, and diagrams, and excluding appendices, footnotes, and the full list of references at the end of the document.'
            },
            {
              title: 'Chunked Content',
              variant: 'positive',
              content: [
                { type: 'text', content: 'For this course you have to submit one individual assignment weighted at 100%.' },
                { type: 'list', variant: 'bullet', items: [
                  { content: 'There will be a choice of two questions; you should answer only one of the two.' },
                  { content: 'The assignment should be a maximum of 3,000 words.' },
                  { content: 'The word count includes: **the main body of text, tables, figures, and diagrams.**' },
                  { content: 'The word count excludes: **appendices, footnotes, full list of references.**' }
                ]}
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'combining',
      title: 'Benefits of combining bullet points with bolding',
      icon: CheckCircle,
      blocks: [
        {
          type: 'text',
          content: 'Even with bullet points, bolding key phrases adds another level of guidance for the reader. It makes text more readable even with a smaller font.'
        },
        {
          type: 'callout',
          variant: 'neutral', // Dark theme simulated via renderer class usually, here using standard callout
          title: 'Assignment Details (Dark Mode Example)',
          content: [
            { type: 'text', content: 'For this course you have to **submit one individual assignment** weighted at 100%.' },
            { type: 'list', variant: 'bullet', items: [
               { content: 'There will be a choice of **two questions**; you should **answer only one** of the two.' },
               { content: 'The assignment should be a **maximum of 3,000 words**.' },
               { content: 'The **word count includes**: main body of text, tables, figures, and diagrams.' },
               { content: 'The **word count excludes**: appendices, footnotes, reference list.' }
            ]}
          ]
        }
      ]
    }
  ]
};