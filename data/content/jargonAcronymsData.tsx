import React from 'react';
import { SectionConfig } from '../../types';
import { MessageSquare, Type } from 'lucide-react';

export const jargonAcronymsData: SectionConfig = {
  id: 'acronyms',
  title: 'Jargon and acronyms',
  intro: [
    {
      type: 'text',
      content: 'Avoiding jargon and acronyms is common advice for simple readable language. Unfortunately, this is not easy advice to put into action. Whether acronyms or jargon are appropriate will depend on the subject and the audience.'
    }
  ],
  steps: [
    {
      id: 'jargon',
      title: 'Jargon and difficult words',
      icon: MessageSquare,
      blocks: [
        {
          type: 'callout',
          variant: 'example',
          title: 'Thinking about the audience',
          content: [
            {
              type: 'text',
              content: 'What is a difficult word or jargon varies by the knowledge and experience of the reader. For a **professional group**, not using jargon would make communication more difficult. It would lead to misunderstanding.'
            },
            {
              type: 'callout',
              variant: 'neutral',
              content: 'In famous cartoon [xkcd: Up Goer Five](https://xkcd.com/1133/), uses only the 1000 most frequent words in English to describe a space rocket. It would be **easier for even lay readers to learn basic jargon** such as "escape hatch" than to read an entire article like this.'
            },
            {
              type: 'text',
              content: 'The **problem with using jargon** in public communication is not that the reader does not know it but that it is used unthinkingly. It is possible to use jargon in such a way that the reader\'s knowledge is built up as they read.'
            }
          ]
        },
        {
          type: 'text',
          variant: 'heading-3',
          content: 'Types of audiences and their needs'
        },
        {
          type: 'table',
          headers: ['Type of audience', 'Audience needs', 'Strategies for using jargon'],
          rows: [
            {
              icon: 'Briefcase',
              cells: [
                'Professional in-group',
                'Jargon is part of the vocabulary expected of every member',
                'Use jargon freely'
              ]
            },
            {
              icon: 'Users',
              cells: [
                'Professional out-group (e.g. related profession)',
                'Jargon is part of the vocabulary but many aspects of the specialist jargon used in the text may be unfamiliar',
                [
                  { type: 'text', content: '**Use jargon freely** but consider:' },
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Does same jargon have different meaning in different subdisciplines?' },
                    { content: 'Are some terms specific to your subdiscipline?' }
                  ]},
                  { type: 'text', content: 'Take extra care to define what you mean by specialist terms.' }
                ]
              ]
            },
            {
              icon: 'GraduationCap',
              cells: [
                'Prospective members of professional in-group',
                'Likely unfamiliar with most jargon but are expected to learn.',
                [
                  { type: 'text', content: 'Use jargon in such a way that the **readers\' knowledge is built up** gradually.' },
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Provide **frequent definitions** and glossaries.' },
                    { content: 'Consider the **stage of learning** of the reader.' }
                  ]}
                ]
              ]
            },
            {
              icon: 'Globe',
              cells: [
                'General public',
                [
                  { type: 'text', content: 'Unfamiliar with jargon of your profession and discipline.' },
                  { type: 'text', content: 'Will not engage with your text for long enough to be expected to learn or look up jargon.' }
                ],
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: '**Avoid jargon** if at all possible. Exception may be terms expected to be known by the educated public (e.g. genetics).' },
                    { content: '**Repeat the term** earlier than might seem natural rather than referring back to it with a pronoun.' },
                    { content: 'Pay special attention to **in-group language** you may have forgotten is not commonly used in non-professional setting.' },
                    { content: 'Pay attention to when you are making **wording decisions** based on what others in your group will think.' },
                    { content: '**Check understanding** with a reader outside your group.' }
                  ]}
                ]
              ]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Note',
          content: [
            { type: 'text', content: 'Avoiding jargon is a balancing act with **no perfect solution**. Even with care, many professional writers may not realise that terms they use daily in informal conversations are actually jargon.' },
            { type: 'text', content: 'Also, **jargon is usually not the biggest problem** the reader will face. Often, dense paragraphs with long complex sentences will be more of a problem.' }
          ]
        }
      ]
    },
    {
      id: 'acronyms',
      title: 'Acronyms',
      icon: Type,
      blocks: [
        {
          type: 'text',
          content: 'Acronyms are a **type of jargon**. They are often used as part of the vocabulary of a professional group. All the tips about jargon apply here, as well.'
        },
        {
          type: 'comparison',
          items: [
            {
              variant: 'positive',
              title: 'Pros of acronyms',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Reduce amount of repetitive text' },
                  { content: 'Make sentence with complex structures easier to process' },
                  { content: 'Use more familiar form of a name to a group' }
                ]
              }]
            },
            {
              variant: 'negative',
              title: 'Cons of acronyms',
              content: [{
                type: 'list',
                variant: 'bullet',
                items: [
                  { content: 'Readers with dyslexia struggle with processing unfamiliar words' },
                  { content: 'Screen readers pronounce acronyms unpredictably' },
                  { content: 'People outside your group have to learn them as jargon' }
                ]
              }]
            }
          ]
        },
        {
          type: 'text',
          variant: 'quote',
          content: '"In fact, many acronyms just become words for groups of people who use them often. They become part of the vocabulary that is expected of a member of the group. It would be doing your readers a disservice not to use the acronym even if the reader is new to the group."'
        },
        {
          type: 'text',
          variant: 'heading-3',
          content: 'How to use acronyms'
        },
        {
          type: 'table',
          headers: ['Type of audience', 'Types of document', 'Strategies'],
          rows: [
            {
              cells: [
                'Internal group',
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Internal communications such as emails or memos' },
                    { content: 'Guides and policy documents' }
                  ]}
                ],
                [
                  { type: 'text', content: 'You can **use common acronyms freely** without providing the full text anywhere.' },
                  { type: 'text', content: 'Make sure that **new members** of the group can access the acronyms.' }
                ]
              ]
            },
            {
              cells: [
                'Professional group with external members',
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Academic publications' },
                    { content: 'Reports aimed at professional bodies' }
                  ]}
                ],
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Make sure **all acronyms are explained** at least once' },
                    { content: 'If there are many new acronyms, provide a **glossary**' },
                    { content: 'Some exceptions may be well-known acronyms (DfE, DoJ, EU)' }
                  ]}
                ]
              ]
            },
            {
              cells: [
                'Public communication',
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: 'Website for potential employees' },
                    { content: 'Public relations documents' },
                    { content: 'Public guidance on professional matters' }
                  ]}
                ],
                [
                  { type: 'list', variant: 'bullet', items: [
                    { content: '**Avoid** the use of acronyms altogether' },
                    { content: 'When acronyms are **necessary for readability** provide an explanation' },
                    { content: 'Do not just spell out the acronym once, **spell it out again** after a few paragraphs' }
                  ]}
                ]
              ]
            }
          ]
        },
        {
          type: 'callout',
          variant: 'example',
          title: 'Ad-hoc acronyms',
          content: [
            { type: 'text', content: 'Writers in academic settings will often make up **acronyms for a repetitive term** that occurs frequently. Often, they do this for two **contrasting terms**. For instance, in this text, I might have chosen J, A, AHA for jargon, acronyms, and ad-hoc acronyms.' },
            { 
               type: 'callout', 
               variant: 'error',
               content: [
                 { type: 'text', content: '**This is almost never worth it.**' },
                 { type: 'text', content: 'Remember, a paragraph that may take you 15-30 minutes to write will take your reader about 1 minute to read. The reader has much less time to become familiar with it. Your readers are **more likely to confuse the terms** and misunderstand the text.' }
               ]
            }
          ]
        }
      ]
    }
  ]
};