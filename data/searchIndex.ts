export interface SearchResult {
  sectionId: string;
  category: string;
  title: string;
  content: string;
}

export const SEARCH_INDEX: SearchResult[] = [
  // Five Principles
  {
    sectionId: 'five-principles',
    category: 'Five Principles',
    title: 'Space',
    content: 'Increasing the amount of space makes it easier to process. Larger font, increased line spacing, shorter lines. Avoid underlining, all caps, italics for whole paragraphs, centred paragraphs.'
  },
  {
    sectionId: 'five-principles',
    category: 'Five Principles',
    title: 'Chunks',
    content: 'Splitting text into smaller chunks makes it easier to process. Break text into sections with headings, lists into bullet points, blocks into shorter paragraphs. Skim and scan strategies.'
  },
  {
    sectionId: 'five-principles',
    category: 'Five Principles',
    title: 'Guides',
    content: 'Adding guides helps the reader focus. Bold key phrases, provide outline summaries, add icons to help recall, use flowcharts and images.'
  },
  {
    sectionId: 'five-principles',
    category: 'Five Principles',
    title: 'Information Structure',
    content: 'Give important information first. Put background second or last. Journalistic style. Move welcomes, history, and obvious context to the end.'
  },
  {
    sectionId: 'five-principles',
    category: 'Five Principles',
    title: 'Simple Language',
    content: '15-20 words per sentence. Address the reader using "You" instead of "Users". Use verbs (action) instead of nouns (nominalisation).'
  },

  // How People Read
  {
    sectionId: 'how-people-read',
    category: 'How People Read',
    title: 'Assumptions about reading',
    content: 'People do not read from start to finish. They do not read every word. They skim first. They return for specific info. They read many documents simultaneously.'
  },
  {
    sectionId: 'how-people-read',
    category: 'How People Read',
    title: 'Reading Strategies',
    content: 'Comprehensive reading (start to finish), Skimming (reading for gist, headings, TOC), Scanning (finding specific information, searchable text).'
  },

  // Cognitive Load
  {
    sectionId: 'cognitive-load',
    category: 'Cognitive Load',
    title: 'Cognitive Load & Working Memory',
    content: 'Cognitive load is the amount of information in working memory. Reduce load by increasing meaningful chunks. Hard to read text and distractions increase load.'
  },
  {
    sectionId: 'cognitive-load',
    category: 'Cognitive Load',
    title: 'Stress Factors',
    content: 'Situational demands: Tired, busy, new environment. Permanent demands: Visual impairment, dyslexia, attention disorders, anxiety, non-native language.'
  },

  // 10 Simple Things for Documents
  {
    sectionId: '10-simple-things-docs',
    category: 'Documents',
    title: '10 Quick Wins',
    content: '1. Headings. 2. Bullet points. 3. Shorter paragraphs. 4. Bold key phrases. 5. Background last. 6. Show outline. 7. Shorter sentences. 8. Line length (70 chars). 9. Font & Spacing (Arial 12pt+). 10. Graphics use.'
  },

  // 3 Steps to Simpler Language
  {
    sectionId: '3-steps-simple',
    category: 'Simple Language',
    title: 'Shorten Sentences',
    content: 'Keep sentences under 20 words. Split at conjunctions (and, but). Avoid complex grammar. Hemingway editor.'
  },
  {
    sectionId: '3-steps-simple',
    category: 'Simple Language',
    title: 'Address the Reader',
    content: 'Use "You" instead of "The User". Use commands. Use "We" instead of organization name.'
  },
  {
    sectionId: '3-steps-simple',
    category: 'Simple Language',
    title: 'Use Verbs',
    content: 'Use verbs instead of abstract nouns. Avoid "Failure to achieve compliance" (Noun Heavy), use "If you fail to comply" (Verb Change).'
  },
  {
    sectionId: 'acronyms',
    category: 'Simple Language',
    title: 'Jargon and Acronyms',
    content: 'Avoid jargon for general public. Use jargon for professional in-groups. Acronyms can aid readability but hurt accessibility. Always explain acronyms.'
  },

  // 10 Things for PowerPoint
  {
    sectionId: '10-simple-things-ppt',
    category: 'PowerPoint',
    title: 'Text and Layout',
    content: 'Minimum 28pt font size. Short lines (under 30 chars). Bold key phrases. No text over images. Remove logos from slides.'
  },
  {
    sectionId: '10-simple-things-ppt',
    category: 'PowerPoint',
    title: 'Visuals and Animation',
    content: 'Convert bullets to SmartArt. Add icons and colours. Use minimal animations (Arrow, Circle Wipe). Make images full screen (crop). One bullet per slide.'
  },

  // Accessibility
  {
    sectionId: 'accessibility',
    category: 'Accessibility',
    title: 'Document Accessibility',
    content: 'Word: Use Heading styles, list styles, table headers, alt text. PDF: Save as PDF, convert headings to bookmarks. PowerPoint: Reading order, slide titles.'
  },
  {
    sectionId: 'accessibility',
    category: 'Accessibility',
    title: 'Links',
    content: 'Avoid "Click here". Use descriptive link names. Avoid raw URLs. Important for screen readers and dyslexia.'
  },
  {
    sectionId: 'accessibility',
    category: 'Accessibility',
    title: 'Accessibility Checker',
    content: 'Use the built-in Accessibility Checker in Word, PowerPoint, and Excel.'
  }
];
