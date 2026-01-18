import React from 'react';
import { SectionConfig } from '../../types';
import { AlertTriangle, Brain } from 'lucide-react';

export const cognitiveLoadData: SectionConfig = {
  id: 'cognitive-load',
  title: 'Readability through the lens of cognitive load',
  intro: [
    {
      type: 'text',
      content: 'Cognitive load is the **amount of information** placed in working memory. Working memory **limits what you can reason about**.'
    },
    {
      type: 'callout',
      variant: 'example',
      title: 'The Golden Rule',
      content: '"The best way to reduce cognitive load is to **increase the number of meaningful chunks**."'
    }
  ],
  steps: [
    {
      id: 'factors',
      title: 'Load Factors',
      icon: Brain,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              title: 'Increases Load',
              variant: 'negative',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Hard to read text' },
                  { content: 'Distractions' },
                  { content: 'Irrelevant images' },
                  { content: 'Unasked for movement' },
                  { content: 'Noise' }
                ]
              }]
            },
            {
              title: 'Decreases Load',
              variant: 'positive',
              content: [{
                type: 'list',
                variant: 'check',
                items: [
                  { content: 'Shorter chunks' },
                  { content: 'Meaningful chunks' },
                  { content: 'Meaningful structure' },
                  { content: 'Visual guides' },
                  { content: 'Combined text and audio' }
                ]
              }]
            }
          ]
        }
      ]
    },
    {
      id: 'stress',
      title: 'Stress Factors',
      icon: AlertTriangle,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              title: 'Situational Demands',
              variant: 'neutral',
              content: [{
                type: 'list',
                variant: 'grid',
                columns: 2,
                items: [
                   { content: 'Tired' }, { content: 'Busy' }, { content: 'New environment' }
                ]
              }]
            },
            {
              title: 'Permanent Demands',
              variant: 'neutral',
              content: [{
                type: 'list',
                variant: 'grid',
                columns: 2,
                items: [
                   { content: 'Visual impairment' }, { content: 'Dyslexia' }, 
                   { content: 'Attention disorders' }, { content: 'Anxiety' }, { content: 'Non-native language' }
                ]
              }]
            }
          ]
        }
      ]
    }
  ]
};