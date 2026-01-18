import React from 'react';
import { SectionConfig } from '../../types';
import { FileText, ScanFace, Link2 } from 'lucide-react';

export const accessibilityData: SectionConfig = {
  id: 'accessibility',
  title: 'Accessibility for users of screen readers or magnifiers',
  intro: [
    {
      type: 'text',
      content: 'All of the top 10 readability tips will increase the overall accessibility of your documents. You must also take into account people who may use screen readers or magnifiers.'
    }
  ],
  steps: [
    {
      id: 'document-types',
      title: 'Document Guidelines',
      icon: FileText,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              title: 'Word',
              variant: 'info',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Always mark sections with **Heading styles**' },
                  { content: 'Use the **list for bullets**' },
                  { content: 'Mark first **row of tables** as header' },
                  { content: 'Indicate **Alternative Text** for images' },
                  { content: '**Do not** place text in text boxes or tables for borders', variant: 'negative' }
                ]
              }]
            },
            {
              title: 'PDF',
              variant: 'error', // Red theme
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Start from an **accessible Word** document' },
                  { content: 'Use **Save as PDF** (don\'t print)' },
                  { content: 'Convert **Headings to PDF bookmarks**' },
                  { content: '**Add title** to document info' }
                ]
              }]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'PowerPoint',
          content: [{
            type: 'list',
            variant: 'bullet',
            items: [
              { content: 'Use **template layouts**' },
              { content: 'Every slide must have **a title** (can be hidden)' },
              { content: 'Use **tables** for complex relationships' },
              { content: 'All images must have **Alternative text**' },
              { content: 'Save **PowerPoint as PDF** for SmartArt' }
            ]
          }]
        }
      ]
    },
    {
      id: 'checker',
      title: 'Accessibility Checker',
      icon: ScanFace,
      blocks: [
        {
          type: 'callout',
          variant: 'tip',
          title: 'Use the Accessibility Checker',
          content: 'Available in Word, PowerPoint, and Excel to get detailed reports on your document\'s accessibility issues.'
        }
      ]
    },
    {
      id: 'alternatives',
      title: 'Alternative to slides',
      icon: FileText,
      blocks: [
        {
          type: 'text',
          content: 'Slides are primarily a visual medium. Providing **a structured handout** with an outline of the key points and references can be more useful for somebody with a screen reader than adding image descriptions to slides.'
        }
      ]
    },
    {
      id: 'links',
      title: 'Links',
      icon: Link2,
      blocks: [
        {
          type: 'text',
          content: 'When sharing links in documents, emails, or webpages, make sure the content of the link is clear without context.'
        },
        {
          type: 'comparison',
          items: [
             {
               title: 'What to do',
               variant: 'positive',
               content: [
                 { type: 'text', content: 'Use the **name of the page** instead and make it clickable.' },
                 { type: 'text', content: '**Avoid:** "Click here", Raw URLs' }
               ]
             },
             {
               title: 'Why it matters',
               variant: 'neutral',
               content: [{
                 type: 'list',
                 variant: 'bullet',
                 items: [
                   { content: 'Screen reader users often navigate directly by link, and "Click here" provides no context.' },
                   { content: 'Reading out a long URL is confusing and difficult to understand.' },
                   { content: 'Dyslexic readers are confused by the additional visual noise of raw URLs.' }
                 ]
               }]
             }
          ]
        }
      ]
    }
  ]
};