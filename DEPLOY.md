---
title: readability-foundations Cloudflare Pages preview deployment
date: 2026-11-19
register: FOR AGENTS
---

# Pages preview

Project: `readability-foundations` (account `b6ae5bced06492ee6f0c8f92776804da`). Preview: https://readability-foundations.pages.dev/ . Production canonical and citation URL: https://readability.edutools.fyi/ .

This phase uses the Pages project without custom domains. DNS and the existing Cloud Run services remain unchanged. Do not attach domains or switch addresses before Dominik approves the preview list.

```sh
npm ci
npm run build
env -u CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID=b6ae5bced06492ee6f0c8f92776804da npx wrangler@4 pages deploy dist --project-name=readability-foundations --branch=main
node ~/gitrepos/_SKILLS/skills/dev/web-design-elements/kit/check-citation.mjs https://readability-foundations.pages.dev/
```

Wrangler uses its existing OAuth session. Never inject an owner API key into this browser build. The preview build deliberately defines the legacy owner-key variables as empty strings; AI features requiring them need a server and are not repaired in this phase.

The original lucide-react 0.344.0 rejects React 19 during installation. The preview uses compatible lucide-react 0.556.0; the new lockfile records the resolved dependency graph.

The missing module script now points to the existing index.tsx entry; the original complete React source is preserved.
