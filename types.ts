import React from 'react';

export interface NavSection {
  id: string;
  title: string;
  description: string;
  iconName: 'Layout' | 'Eye' | 'Brain' | 'FileText' | 'Zap' | 'MonitorPlay' | 'Accessibility' | 'PenTool' | 'ClipboardList' | 'CheckSquare' | 'MessageSquare' | 'BookOpen' | 'Layers' | 'Presentation' | 'Scale';
}

export interface NavGroup {
  title: string;
  items: NavSection[];
}

// --- Semantic Block Types ---

export type BlockType = 'text' | 'list' | 'callout' | 'comparison' | 'stat-grid' | 'image' | 'interactive' | 'table' | 'slide-simulation';

export interface BaseBlock {
  type: BlockType;
  id?: string;
}

export type RichText = string; // Supports **bold**, _italic_, [link](url)

export interface TextBlock extends BaseBlock {
  type: 'text';
  content: RichText;
  variant?: 'paragraph' | 'heading-2' | 'heading-3' | 'quote';
  align?: 'left' | 'center' | 'right';
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  variant: 'bullet' | 'ordered' | 'check' | 'icon' | 'grid';
  items: ListItem[];
  columns?: 2 | 3;
}

export interface ListItem {
  title?: string;
  content: RichText | ContentBlock[];
  icon?: string; // lucide icon name
  variant?: 'default' | 'positive' | 'negative' | 'warning';
}

export interface CalloutBlock extends BaseBlock {
  type: 'callout';
  variant: 'info' | 'success' | 'warning' | 'error' | 'neutral' | 'tip' | 'example';
  title?: string;
  content: RichText | ContentBlock[];
}

export interface ComparisonBlock extends BaseBlock {
  type: 'comparison';
  items: ComparisonItem[];
}

export interface ComparisonItem {
  title?: string;
  variant: 'positive' | 'negative' | 'neutral' | 'info' | 'warning' | 'error';
  content: RichText | ContentBlock[];
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  label?: string; // e.g. "Crowded & Overwhelming"
  labelColor?: 'red' | 'green' | 'blue' | 'gray';
  overlayIcon?: 'thumbs-up' | 'thumbs-down';
}

export interface StatGridBlock extends BaseBlock {
  type: 'stat-grid';
  items: StatItem[];
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface TableBlock extends BaseBlock {
  type: 'table';
  headers: string[];
  rows: Array<{
    cells: Array<RichText | ContentBlock[]>;
    icon?: string; // Optional icon for the row
  }>;
}

export interface SlideSimulationBlock extends BaseBlock {
  type: 'slide-simulation';
  variant: 'text-heavy' | 'structured-sequence' | 'small-graphic' | 'zoomed-graphic' | 'split-attention' | 'immersive';
  data: {
    title?: string;
    items?: string[];
    labels?: string[];
    imageSrc?: string;
  };
  caption?: string;
  feedback?: 'positive' | 'negative';
}

export interface InteractiveBlock extends BaseBlock {
  type: 'interactive';
  component: 'dyslexia-simulator' | 'readability-checker' | 'font-adjuster' | 'checklist' | 'link-to-section' | 'custom-widget';
  data?: any;
}

export type ContentBlock = 
  | TextBlock 
  | ListBlock 
  | CalloutBlock 
  | ComparisonBlock 
  | ImageBlock 
  | StatGridBlock 
  | TableBlock
  | SlideSimulationBlock
  | InteractiveBlock;

// --- Section Config ---

export interface SectionStep {
  id: string;
  title: string;
  shortTitle?: string;
  icon?: React.ElementType;
  blocks?: ContentBlock[]; 
  content?: React.ReactNode; // Deprecated, keeping for legacy fallback
}

export interface SectionConfig {
  id: string;
  title: string;
  intro?: ContentBlock[] | React.ReactNode;
  steps: SectionStep[];
}

export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Principles of readability',
    items: [
      { 
        id: 'five-principles', 
        title: 'Five principles',
        description: 'Learn the core principles: Space, Chunks, Guides, Information Structure, and Simple Language.',
        iconName: 'Layout'
      },
      { 
        id: 'how-people-read', 
        title: 'How people read',
        description: 'Understand reading strategies like skimming and scanning to better inform document creation.',
        iconName: 'Eye'
      },
      { 
        id: 'cognitive-load', 
        title: 'Cognitive load',
        description: 'Explore how working memory limits affect reading and how to reduce mental effort for your readers.',
        iconName: 'Brain'
      },
    ]
  },
  {
    title: 'Readability of slides & documents',
    items: [
      { 
        id: '10-simple-things-docs', 
        title: '10 tips for documents',
        description: 'Actionable steps to immediately improve your documents, from headings to font choices.',
        iconName: 'FileText'
      },
      { 
        id: '10-simple-things-ppt', 
        title: '10 tips for slides',
        description: 'Increase impact with text size, smart cropping, animations, and better slide structure.',
        iconName: 'MonitorPlay'
      },
      {
        id: 'formatting-examples',
        title: 'Visual examples (Text)',
        description: 'See the difference effective formatting makes with side-by-side comparisons of space, bolding, and structure.',
        iconName: 'Layers'
      },
      {
        id: 'slide-formatting-examples',
        title: 'Visual examples (Slides)',
        description: 'Before and after examples of slide layouts, zooming, and structure.',
        iconName: 'Presentation'
      }
    ]
  },
  {
    title: 'Readable language',
    items: [
      { 
        id: '3-steps-simple', 
        title: '3 steps to simple language',
        description: 'Master the art of simplification: shorter sentences, addressing the reader, and using verbs.',
        iconName: 'Zap'
      },
      {
        id: 'examples',
        title: 'Examples',
        description: 'Concrete examples of simplified language and how rephrasing improves clarity.',
        iconName: 'BookOpen'
      },
      {
        id: 'acronyms',
        title: 'Jargon & Acronyms',
        description: 'How to handle jargon and acronyms for different audiences.',
        iconName: 'MessageSquare'
      },
      {
        id: 'readability-tool',
        title: 'Readability Checker',
        description: 'Interactive tool to check sentence length and identify complex text.',
        iconName: 'PenTool'
      },
      {
        id: 'checklist',
        title: 'Language Checklist',
        description: 'A quick checklist to audit your content for simple language principles.',
        iconName: 'CheckSquare'
      }
    ]
  },
  {
    title: 'Accessibility & Evidence',
    items: [
      { 
        id: 'accessibility', 
        title: 'Accessibility',
        description: 'Essential guidelines for screen readers, magnifiers, Word, PDF, and meaningful links.',
        iconName: 'Accessibility'
      },
      {
        id: 'evidence',
        title: 'Evidence',
        description: 'Scientific evidence and research supporting these readability principles.',
        iconName: 'Scale'
      }
    ]
  }
];

export const NAV_SECTIONS: NavSection[] = NAV_GROUPS.flatMap(group => group.items);