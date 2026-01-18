# Architecture: Foundations of Readability

## 1. Project Overview
This application is an interactive guide designed to teach readability principles. It is a Single Page Application (SPA) built with React, TypeScript, and Tailwind CSS. 

The core architectural philosophy is **"Content as Data."** Instead of writing educational content directly in JSX/HTML, content is stored as semantic JSON-like objects. A central rendering engine (`BlockRenderer`) transforms these objects into UI components.

## 2. Tech Stack
- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build/Entry**: Standard ES Modules via `index.html` and `index.tsx`

---

## 3. Core Architecture: Semantic Block System

The application separates **Content** from **Presentation**.

### The Data Model (`types.ts`)
Content is organized into **Sections** (pages). Each Section has **Steps** (sub-pages), and each Step contains an array of **Blocks**.

**Block Types:**
- `text`: Headings, paragraphs, quotes.
- `list`: Bullet, ordered, checklist, grid, or icon lists.
- `callout`: Colored boxes for tips, warnings, examples.
- `comparison`: Side-by-side "Do vs. Don't" grids.
- `image`: Images with captions, overlays, and labels.
- `stat-grid`: Key metric visualizers.
- `table`: structured data matrices.
- `slide-simulation`: Specialized component to render PowerPoint slide makeovers.
- `interactive`: Placeholders for functional widgets (simulators, tools).

### The Rendering Engine (`components/blocks/`)
- **`BlockRenderer.tsx`**: The main "switchboard." It iterates through the content array and renders the specific component required for each block type.
- **`RichText.tsx`**: A utility component used by blocks to parse markdown-like syntax (e.g., `**bold**`, `[link](target)`) within strings.

---

## 4. Key Features & Implementation Locations

### A. Navigation & Routing
The app uses manual client-side state routing (not React Router) to maintain a seamless "app-like" feel.

| Feature | Location | Description |
| :--- | :--- | :--- |
| **Global Navigation** | `components/Navigation.tsx` | Sidebar with collapsible state and search. |
| **Routing State** | `App.tsx` | Manages `view` ('home' vs 'guide') and `activeSection`. |
| **Context** | `context/NavigationContext.tsx` | Provides `onNavigate` globally to allow deep linking from content. |
| **Home Page** | `components/Home.tsx` | Landing page with grid navigation. |

### B. Layout Engine
Users can toggle between reading modes.

| Feature | Location | Description |
| :--- | :--- | :--- |
| **Layout Switcher** | `components/layouts/SectionRenderer.tsx` | Toggles between Scroll and Carousel modes. |
| **Vertical Read** | `components/layouts/ScrollLayout.tsx` | Classic document scroll with sticky TOC and progress bar. |
| **Slide Mode** | `components/layouts/CarouselLayout.tsx` | Step-by-step wizard view with progress indicators. |

### C. Interactive Tools
Custom widgets embedded within the educational content.

| Feature | Location | Description |
| :--- | :--- | :--- |
| **Dyslexia Simulator** | `components/interactive/DyslexiaSimulator.tsx` | blurs/cramps text to simulate processing difficulty. |
| **Font Adjuster** | `components/interactive/FontSpacingAdjuster.tsx` | Live demo of changing font size/spacing. |
| **Readability Checker** | `components/tools/ReadabilityChecker.tsx` | Analyzes input text for sentence length. |
| **Checklist** | `components/tools/SimpleLanguageChecklist.tsx` | Interactive audit tool with notes. |
| **Slide Simulator** | `components/interactive/SlideSimulation.tsx` | Renders "Bad vs Good" PowerPoint slide layouts from data. |

### D. Search & Accessibility
| Feature | Location | Description |
| :--- | :--- | :--- |
| **Search Engine** | `components/Navigation.tsx` | Filters the static index based on user input. |
| **Search Index** | `data/searchIndex.ts` | Manual index of content for searchability. |
| **Text Resizer** | `context/PreferencesContext.tsx` | Global state for adjusting app-wide font size (`standard`, `large`, `xl`). |

---

## 5. Directory Structure

```text
/
├── index.html                   # Entry HTML
├── index.tsx                    # React Entry
├── App.tsx                      # Main Layout & Routing Logic
├── types.ts                     # Semantic Block Type Definitions
├── Architecture.md              # System Documentation
│
├── context/                     # Global State
│   ├── NavigationContext.tsx
│   └── PreferencesContext.tsx
│
├── data/
│   ├── searchIndex.ts           # Searchable content content
│   └── content/                 # CONTENT SOURCE OF TRUTH
│       ├── fivePrinciplesData.tsx
│       ├── tenSimpleThingsDocsData.tsx
│       └── ... (all content files)
│
└── components/
    ├── Navigation.tsx           # Sidebar
    ├── Content.tsx              # Section Loader (Mapping ID to Component)
    ├── Home.tsx                 # Landing Page
    │
    ├── blocks/                  # SEMANTIC RENDERING
    │   ├── BlockRenderer.tsx    # Main Render Logic
    │   └── RichText.tsx         # Text Parser
    │
    ├── layouts/                 # PAGE STRUCTURES
    │   ├── SectionRenderer.tsx  # Layout Toggle
    │   ├── ScrollLayout.tsx     # Vertical View
    │   └── CarouselLayout.tsx   # Step-by-step View
    │
    ├── interactive/             # WIDGETS
    │   ├── DyslexiaSimulator.tsx
    │   ├── SlideSimulation.tsx
    │   └── ...
    │
    ├── sections/                # PAGE WRAPPERS
    │   ├── FivePrinciples.tsx   # Wraps data file with SectionRenderer
    │   └── ...
    │
    └── tools/                   # STANDALONE TOOLS
        ├── ReadabilityChecker.tsx
        └── ...
```

## 6. How to Add Content

1.  **Create Data File**: Create a new file in `data/content/` (e.g., `newData.tsx`).
2.  **Define Config**: Export an object matching `SectionConfig` from `types.ts`.
3.  **Add Blocks**: Use the `blocks: []` array to define content using types like `text`, `list`, `callout`.
4.  **Create Wrapper**: Create a component in `components/sections/` that passes this data to `<SectionRenderer />`.
5.  **Register**: Add the new section to `components/Content.tsx` (switch statement) and `types.ts` (`NAV_GROUPS`).
