import React from 'react';
import { SectionConfig } from '../../types';
import { Type, Layout, Zap, BookOpen, Library } from 'lucide-react';

export const evidenceData: SectionConfig = {
  id: 'evidence',
  title: 'How do we know? (The evidence)',
  intro: [
    {
      type: 'callout',
      variant: 'info',
      title: 'Readability Research',
      content: [
        { type: 'text', content: 'Readability is a difficult subject to get reliable data on. It is difficult to define exactly what a readable text is and how to measure it. Various measures have been introduced:' },
        { type: 'list', variant: 'grid', columns: 2, items: [
           { content: 'Speed of reading' }, { content: 'Comprehension' }, { content: 'Subjective perception' }, { content: 'Text interaction' }
        ]},
        { type: 'text', content: 'But each of these has many confounders. Because no unified measures exist, there are few systematic reviews. However, many studies generally point in the same direction.' }
      ]
    }
  ],
  steps: [
    {
      id: 'formatting',
      title: 'Evidence for text formatting',
      icon: Type,
      blocks: [
        {
          type: 'text',
          content: 'The key interventions supported by evidence are:'
        },
        {
          type: 'list',
          variant: 'bullet',
          items: [
            { 
              title: 'Font size', 
              content: '(Rello and Baeza-Yates 2017; Rello, Pielot, and Marcos 2016; Simas da Rocha et al. 2020)' 
            },
            { 
              title: 'Line length', 
              content: '(Nanavati and Bias 2005)' 
            },
            { 
              title: 'Bolding of key words', 
              content: '(Rello, Kanvinde, and Baeza-Yates 2012)' 
            },
            { 
              title: 'Using colours', 
              content: '(Simas da Rocha et al. 2020; Jandreau, Muncer, and Bever 1986)' 
            }
          ]
        }
      ]
    },
    {
      id: 'structure',
      title: 'Evidence for text structure',
      icon: Layout,
      blocks: [
        {
          type: 'list',
          variant: 'bullet',
          items: [
            {
              title: 'Structured text is easier to read',
              content: '(Kendeou and van den Broek 2007; Schwarz and Flammer 1981)'
            },
            {
              title: 'Eye tracking studies support this',
              content: 'Well supported by eye tracking studies on web reading by [Norman Nielsen Group](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/).'
            }
          ]
        }
      ]
    },
    {
      id: 'simple-language',
      title: 'Evidence for simple language',
      icon: Zap,
      blocks: [
        {
          type: 'list',
          variant: 'bullet',
          items: [
            {
              title: 'Using frequent and short words',
              content: '(Rello et al. 2013; Dale and Chall 1949)'
            },
            {
              title: 'Limits of readability formulas',
              content: '(Bruce, Rubin, and Starr 1981)'
            }
          ]
        }
      ]
    },
    {
      id: 'reading-strategies',
      title: 'Evidence for reading strategies',
      icon: BookOpen,
      blocks: [
        {
          type: 'callout',
          variant: 'neutral',
          content: 'Strategic reading is one of the key recommendations for improving academic reading. There is good evidence that it improves comprehension and information retention. \n\n**(Voss and Silfies 1996; Kendeou and van den Broek 2007; Bogaerds-Hazenberg, Evers-Vermeul, and Bergh 2021)**'
        }
      ]
    },
    {
      id: 'references',
      title: 'References',
      icon: Library,
      blocks: [
        {
          type: 'list',
          variant: 'bullet', // Can be styled differently in renderer if we add 'reference' variant
          items: [
            { content: 'Bogaerds-Hazenberg, Suzanne T. M., Jacqueline Evers-Vermeul, and Huub van den Bergh. 2021. ‘A Meta-Analysis on the Effects of Text Structure Instruction on Reading Comprehension in the Upper Elementary Grades’. _Reading Research Quarterly_ 56 (3): 435–62. [https://doi.org/10.1002/rrq.311](https://doi.org/10.1002/rrq.311)' },
            { content: 'Bruce, Bertram, Andee Rubin, and Kathleen Starr. 1981. ‘Why Readability Formulas Fail’. _IEEE Transactions on Professional Communication_ PC-24 (1): 50–52. [https://doi.org/10.1109/TPC.1981.6447826](https://doi.org/10.1109/TPC.1981.6447826)' },
            { content: 'Dale, Edgar, and Jeanne S. Chall. 1949. ‘The Concept of Readability’. _Elementary English_ 26 (1): 19–26.' },
            { content: 'Jandreau, Steven M, Steven J Muncer, and Thomas G Bever. 1986. ‘Improving the Readability of Text with Automatic Phrase-Sensitive Formating’. _British Journal of Educational Technology_ 17 (2): 128–33. [https://doi.org/10.1111/j.1467-8535.1986.tb00502.x](https://doi.org/10.1111/j.1467-8535.1986.tb00502.x)' },
            { content: 'Kendeou, Panayiota, and Paul van den Broek. 2007. ‘The Effects of Prior Knowledge and Text Structure on Comprehension Processes during Reading of Scientific Texts’. _Memory & Cognition_ 35 (7): 1567–77. [https://doi.org/10.3758/BF03193491](https://doi.org/10.3758/BF03193491)' },
            { content: 'Nanavati, Anuj A., and Randolph G. Bias. 2005. ‘Optimal Line Length in Reading - A Literature Review’. _Visible Language_ 39 (2): 120–44.' },
            { content: 'Rello, Luz, and Ricardo Baeza-Yates. 2017. ‘How to Present More Readable Text for People with Dyslexia’. _Universal Access in the Information Society_ 16 (1): 29–49.' },
            { content: 'Rello, Luz, Ricardo Baeza-Yates, Laura Dempere-Marco, and Horacio Saggion. 2013. ‘Frequent Words Improve Readability and Short Words Improve Understandability for People with Dyslexia’. In _IFIP Conference on Human-Computer Interaction_, 203–19. Springer.' },
            { content: 'Rello, Luz, Gaurang Kanvinde, and Ricardo Baeza-Yates. 2012. ‘Layout Guidelines for Web Text and a Web Service to Improve Accessibility for Dyslexics’. In _Proceedings of the International Cross-Disciplinary Conference on Web Accessibility_, 1–9.' },
            { content: 'Rello, Luz, Martin Pielot, and Mari-Carmen Marcos. 2016. ‘Make It Big! The Effect of Font Size and Line Spacing on Online Readability’. In _Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems_, 3637–48.' },
            { content: 'Schwarz, Maria N. K., and August Flammer. 1981. ‘Text Structure and Title—Effects on Comprehension and Recall’. _Journal of Verbal Learning and Verbal Behavior_ 20 (1): 61–66. [https://doi.org/10.1016/S0022-5371(81)90301-7](https://doi.org/10.1016/S0022-5371(81)90301-7)' },
            { content: 'Simas da Rocha, Bruno, Cassia Garcia Moraes, Lucas Miyake Okumura, Fernanda da Cruz, Lisana Sirtori, and Emilia da Silva Pons. 2020. ‘Interventions to Reduce Problems Related to the Readability and Comprehensibility of Drug Packages and Labels: A Systematic Review.’ _Journal of Patient Safety_, April. [https://doi.org/10.1097/pts.0000000000000619](https://doi.org/10.1097/pts.0000000000000619)' },
            { content: 'Voss, James F., and Laurie Ney Silfies. 1996. ‘Learning From History Text: The Interaction of Knowledge and Comprehension Skill with Text Structure’. _Cognition and Instruction_ 14 (1): 45–68. [https://doi.org/10.1207/s1532690xci1401_2](https://doi.org/10.1207/s1532690xci1401_2)' }
          ]
        }
      ]
    }
  ]
};