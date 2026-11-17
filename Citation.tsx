import { useState } from 'react';
import { applyCitation, citeText } from './kit/citation';
import type { CitePage } from './kit/citation';
import { copyText } from './kit/copy';

export const siteCitation: CitePage = {"title": "Foundations of Readability", "site": "Foundations of Readability", "url": "https://readability.edutools.fyi/", "description": "Guidance for readable and accessible documents based on the work of Dominik Lukeš.", "authors": ["Dominik Lukeš"], "type": "webpage"};

export function setPageCitation(page: CitePage): void {
  applyCitation(page);
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = page.url;
}

export function CiteThisPage({ page = siteCitation }: { page?: CitePage }) {
  const [status, setStatus] = useState('');
  const text = citeText(page);
  return <section className="mt-6 text-sm leading-relaxed" aria-label="Cite this page">
    <h2 className="font-semibold">Cite this page</h2>
    <p>{text}</p>
    <button type="button" className="underline" onClick={async () =>
      setStatus(await copyText(text) ? 'Citation copied.' : 'Copy failed. Select the citation and copy it by hand.')
    }>Copy citation</button>
    <p role="status">{status}</p>
  </section>;
}
