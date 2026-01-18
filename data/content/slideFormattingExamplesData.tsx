import React from 'react';
import { SectionConfig } from '../../types';
import { Layout, Layers, ThumbsUp } from 'lucide-react';

export const slideFormattingExamplesData: SectionConfig = {
  id: 'slide-formatting-examples',
  title: 'Visual examples of slide formatting',
  intro: [
    {
      type: 'text',
      content: 'Visual comparisons demonstrating how to break down complex slides, remove clutter, and maximize visual impact.'
    }
  ],
  steps: [
    {
      id: 'one-bullet',
      title: 'One bullet, one slide',
      icon: Layout,
      blocks: [
        {
          type: 'text',
          content: 'Instead of keeping a single slide with a title and six bullets, break it down into an introductory slide, a summary slide, and individual slides.'
        },
        {
          type: 'comparison',
          items: [
            {
              variant: 'negative',
              title: 'Crowded & Overwhelming',
              content: [{
                type: 'slide-simulation',
                variant: 'text-heavy',
                feedback: 'negative',
                caption: 'Too much text in one place',
                data: {
                  title: 'Collaborative thinking to further the overall value proposition',
                  items: [
                    'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
                    'Iterative approaches to corporate strategy foster collaborative thinking.',
                    'Organically grow the holistic world view of disruptive innovation.',
                    'Bring to the table win-win survival strategies to ensure domination.',
                    'At the end of the day, going forward, a new normal that has evolved.',
                    'User generated content in real-time will have multiple touchpoints.'
                  ]
                }
              }]
            },
            {
              variant: 'positive',
              title: 'Structured Sequence',
              content: [{
                type: 'slide-simulation',
                variant: 'structured-sequence',
                feedback: 'positive',
                caption: 'Broken down into Intro, Summary, and Detail slides',
                data: {
                  labels: ['Collaborative thinking']
                }
              }]
            }
          ]
        }
      ]
    },
    {
      id: 'remove-text',
      title: 'Remove extraneous text from images',
      icon: Layers,
      blocks: [
        {
          type: 'text',
          content: 'Clean up complex diagrams by removing the title and descriptive paragraphs, allowing you to zoom in on the graphic itself.'
        },
        {
          type: 'comparison',
          items: [
            {
              variant: 'negative',
              title: 'Small Graphic & Small Text',
              content: [{
                type: 'slide-simulation',
                variant: 'small-graphic',
                feedback: 'negative',
                caption: 'The audience strains to read the small text',
                data: {
                  title: 'Nanotechnology immersion along the highway',
                  items: ['Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.']
                }
              }]
            },
            {
              variant: 'positive',
              title: 'Zoomed In & Clear',
              content: [{
                type: 'slide-simulation',
                variant: 'zoomed-graphic',
                feedback: 'positive',
                caption: 'The graphic fills the screen and speaks for itself',
                data: {}
              }]
            }
          ]
        }
      ]
    },
    {
      id: 'zooming',
      title: 'Zooming in on images',
      icon: ThumbsUp,
      blocks: [
        {
          type: 'text',
          content: 'Full-screen images are better than images next to text. You almost never lose any important information by cropping.'
        },
        {
          type: 'comparison',
          items: [
            {
              variant: 'negative',
              title: 'Split Attention',
              content: [{
                type: 'slide-simulation',
                variant: 'split-attention',
                feedback: 'negative',
                caption: 'Text competes with image',
                data: {
                  title: 'Maximising minimums',
                  imageSrc: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400',
                  items: [
                    'Proactively envisioned multimedia',
                    'Expertise and cross-media growth',
                    'Quality intellectual capital',
                    'Superior collaboration'
                  ]
                }
              }]
            },
            {
              variant: 'positive',
              title: 'Immersive & Focused',
              content: [{
                type: 'slide-simulation',
                variant: 'immersive',
                feedback: 'positive',
                caption: 'Image sets the context instantly',
                data: {
                  title: 'Maximising minimums',
                  labels: ['(Carls, Chunk, Hendersson 2016)'],
                  imageSrc: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800'
                }
              }]
            }
          ]
        }
      ]
    }
  ]
};