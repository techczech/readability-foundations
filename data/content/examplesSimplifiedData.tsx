import React from 'react';
import { SectionConfig } from '../../types';
import { CheckCircle, Quote } from 'lucide-react';

export const examplesSimplifiedData: SectionConfig = {
  id: 'examples',
  title: 'Examples of simplified language',
  steps: [
    {
      id: 'rephrasing',
      title: 'Benefits of rephrasing text to address the reader',
      icon: CheckCircle,
      blocks: [
        {
          type: 'text',
          content: 'Using the principles of simple language, we can see that rephrasing text to address the reader changes the focus.'
        },
        {
          type: 'callout',
          variant: 'info',
          title: 'More leave possible for you as an employee',
          content: [{
            type: 'list',
            variant: 'bullet',
            items: [
              { content: 'Your employer **can choose to offer more leave** than the legal minimum' },
              { content: '**Extra leave** you receive does **not require same rules** as statutory leave' },
              { content: '**Example:** Extra leave may only be available to you after you have been employed for some time' }
            ]
          }]
        },
        {
          type: 'text',
          content: 'You can see another example of rephrasing a policy paragraph. Things that were changed are underlined.'
        },
        {
          type: 'comparison',
          items: [
            {
              title: 'Version with abstract nouns',
              variant: 'negative',
              content: 'The purpose of the assignment is to provide candidates with the opportunity to demonstrate that they have understood the key concepts and frameworks covered in the module and are able to synthesise and analyse this material, including examples, to construct a coherent argument.'
            },
            {
              title: 'Version that addresses the reader',
              variant: 'positive',
              content: 'This assignment will **give you an opportunity** to demonstrate that **you have understood** the key concepts and frameworks covered in the module and that **you are able** to synthesise and analyse this material, **include examples, and construct** a coherent argument.'
            }
          ]
        }
      ]
    },
    {
      id: 'shortening',
      title: 'Benefits of shortening sentences',
      icon: CheckCircle,
      blocks: [
        {
          type: 'text',
          content: 'The example above can also be improved by **splitting it into two sentences**:'
        },
        {
          type: 'callout',
          variant: 'success',
          content: 'This assignment will give you an opportunity to demonstrate that you have understood the key concepts and frameworks covered in the module. You will also show that you can to synthesise and analyse this material, include examples, and construct a coherent argument.'
        },
        {
          type: 'text',
          content: 'The reader of the modified version is more likely to focus on all parts of the assignment.'
        }
      ]
    },
    {
      id: 'decorative-text',
      title: 'Benefits of reducing decorative text',
      icon: Quote,
      blocks: [
        {
          type: 'text',
          variant: 'quote',
          content: 'Decorative text often adds a processing burden without adding any useful information. Here is an **example of a page redesign** where a prominent **welcome message was removed**. It was replaced by bullet points outlining key information and quick links.'
        },
        {
          type: 'text',
          content: 'Notice, that the amount of text on the redesigned page did not change. In fact, **words were added to the section links** to give readers a sense of what they can expect on the page.'
        }
      ]
    }
  ]
};