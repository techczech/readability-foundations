import React from 'react';
import { SectionConfig } from '../../types';
import { 
  Type, CheckCircle, XCircle, MousePointerClick, Maximize, Layers 
} from 'lucide-react';

export const tenSimpleThingsPptData: SectionConfig = {
  id: '10-simple-things-ppt',
  title: '10 tips for readable slides',
  intro: [
    {
      type: 'callout',
      variant: 'tip',
      content: 'Visual examples in **Appendix 5: Examples of slide formatting**. Also see **Appendix 1: PowerPoint and Word Templates**.'
    }
  ],
  steps: [
    {
      id: 'text-size',
      title: 'Text size',
      icon: Type,
      blocks: [
        {
          type: 'callout',
          variant: 'info',
          title: 'Minimum 28pt for Arial',
          content: 'Other fonts may need bigger point sizes. Everything else will follow.'
        },
        {
          type: 'text',
          content: 'Text can be slightly smaller when presenting online. But if you’re presenting **text under 18pt**, don’t expect the audience to read it.'
        },
        {
          type: 'list',
          variant: 'check',
          items: [
            { title: 'Larger text means you can:', content: '' },
            { content: 'Break text over multiple slides' },
            { content: 'Use fewer bullet points' },
            { content: 'Create a summary slide' }
          ]
        }
      ]
    },
    {
      id: 'short-lines',
      title: 'Short lines',
      icon: Type,
      blocks: [
        {
          type: 'text',
          content: 'Do not have lines of text run across the whole slide. Keep to under **30 characters** per line.'
        },
        {
           type: 'callout',
           variant: 'success',
           title: 'You can get shorter lines by:',
           content: [{
             type: 'list',
             variant: 'ordered',
             items: [
               { content: 'Increasing the font size' },
               { content: 'Using two columns' },
               { content: 'Using SmartArt' }
             ]
           }]
        }
      ]
    },
    {
      id: 'bolding',
      title: 'Bolding of key phrases',
      icon: Type,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              title: 'DO',
              variant: 'positive',
              content: '**Bold key phrases** in any block of text such as quotation. You should even bold key phrases or key words in **longer lists**.'
            },
            {
              title: 'AVOID',
              variant: 'negative',
              content: '**Avoid** bolding complete sentences or whole paragraphs. Too much bold text is more difficult to process visually.'
            }
          ]
        }
      ]
    },
    {
      id: 'no-text-over-images',
      title: 'No text over images',
      icon: Layers,
      blocks: [
        {
          type: 'callout',
          variant: 'example',
          content: 'Always add a solid background to text if the slide has an image in the background.'
        },
        {
          type: 'list',
          variant: 'check',
          items: [
            { content: 'Do not place text over an image.' },
            { content: 'You can make the **text background slightly transparent** (max 25%).' },
            { content: 'You can also increase the **transparency of an image** to make it less distracting.' }
          ]
        }
      ]
    },
    {
      id: 'remove-logos',
      title: 'Remove logos from every slide',
      icon: XCircle,
      blocks: [
        {
          type: 'text',
          content: 'You do not need a logo on every slide. Keep any branding to **only the title and final slide**. Logos on every slide introduce another element of potential distraction.'
        }
      ]
    },
    {
      id: 'smart-art',
      title: 'Convert bullets to SmartArt',
      icon: Layers,
      blocks: [
        {
          type: 'text',
          content: 'Use SmartArt instead of bullets. Right-click on any list and choose: **Convert to SmartArt**.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Benefits',
              variant: 'info',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Provides visual division' },
                  { content: 'Makes it easier to indicate relationships' },
                  { content: 'Forces shorter text' },
                  { content: 'Transforms logical structure to visuals' }
                ]
              }]
            },
            {
              title: 'Avoid',
              variant: 'negative',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                   { content: 'Small text' },
                   { content: 'Too much text' },
                   { content: 'Very busy and complicated lists' }
                ]
              }]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'neutral',
          title: 'SmartArt tips',
          content: [{
            type: 'list',
            variant: 'bullet',
            items: [
              { content: 'Use Design Ideas to convert lists' },
              { content: 'Edit text in the outline, not graphics' },
              { content: 'Convert to shapes for further editing' }
            ]
          }]
        }
      ]
    },
    {
      id: 'icons-colours',
      title: 'Add icons and or colours to lists',
      icon: CheckCircle,
      blocks: [
        {
          type: 'comparison',
          items: [
            {
              variant: 'neutral',
              content: [
                { type: 'text', content: 'Adding icons or colours to lists makes them easier to process and remember. Icons also provide visual division.' },
                { 
                  type: 'list', 
                  variant: 'check', 
                  items: [ { content: 'Easier to process' }, { content: 'Easier to remember' }, { content: 'Easier visual navigation' } ] 
                }
              ]
            },
            {
              title: 'Important!',
              variant: 'warning',
              content: [
                { type: 'text', content: 'Never use **colour as the only way** to get important information (e.g., \'items marked in red are compulsory\').' },
                { type: 'text', content: '**Alternatives:** Bolding, Shapes/Outline, Asterisk, Position, Graphics' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'animations',
      title: 'Use animations to draw attention',
      icon: MousePointerClick,
      blocks: [
        {
          type: 'text',
          content: 'Animations can be very distracting. **Use them minimally.** But they can be very useful to **draw interest** to particular elements.'
        },
        {
           type: 'callout',
           variant: 'neutral',
           title: 'Examples that support processing:',
           content: [{
             type: 'list',
             variant: 'ordered',
             items: [
               { content: '**Arrow** Wipe or Fly in **to point** to an element of an image' },
               { content: '**Circle Wipe** to highlight text' },
               { content: '**Colour change** of a slide element' }
             ]
           }]
        },
        {
          type: 'callout',
          variant: 'tip',
          content: 'You can add more than one animation to the same element.'
        },
        {
           type: 'text',
           variant: 'quote',
           content: '"Your aim is to draw the viewers\' attention to what you are talking about at the moment."'
        }
      ]
    },
    {
      id: 'full-screen-images',
      title: 'Make images full screen',
      icon: Maximize,
      blocks: [
        {
          type: 'text',
          content: 'You can make **images more impactful** if you stretch them across the whole screen.'
        },
        {
          type: 'list',
          variant: 'grid',
          columns: 3,
          items: [
            { content: 'Zoom in on what is important' },
            { content: 'Force you to use less text' },
            { content: 'Make the slide look more modern' }
          ]
        },
        {
          type: 'text',
          content: 'Many people are afraid to crop. **But cropping is an essential technique** for amplifying the message.'
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'Transparency to reduce overload',
          content: [
              { type: 'text', content: 'Images covering the full slide can be overwhelming. You should set their **transparency to between 30 and 50%**. This is particularly important when you place text over the image.' },
              { 
                type: 'list', 
                variant: 'grid', 
                columns: 3,
                items: [
                  { content: 'Image with 50% transparency' },
                  { content: 'Image with 30% transparency' },
                  { content: 'Image without transparency' }
                ] 
              }
          ]
        }
      ]
    },
    {
      id: 'one-bullet',
      title: 'One bullet, one slide',
      icon: CheckCircle,
      blocks: [
        {
          type: 'text',
          content: 'Think of the **purpose** of the PowerPoint slide: It is to **help your audience process** what you are saying while you speak. Only show things relevant to the moment.'
        },
        {
          type: 'callout',
          variant: 'neutral',
          title: 'If you have a slide with 5 bullets and will spend 1 minute on each:',
          content: [{
            type: 'list',
            variant: 'ordered',
            items: [
              { content: 'A **title slide** introducing the topic' },
              { content: 'Individual **slide for each** bullet' },
              { content: '**Overview slide** showing the summary of all points' }
            ]
          }]
        }
      ]
    }
  ]
};