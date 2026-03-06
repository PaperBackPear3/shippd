---
title: "How I built this"
createdAt: 2026-03-06
category: technology
tags: [blog, how to]
linksTo: []
summary: short story on how I am making this blog
draft: false
---

# What is this and how I built it

## TLDR;

It's just a static content generator made with [Astro](https://astro.build/), customized with the [Breeze](https://astro.build/themes/details/breeze/) theme, deployed on [Github Pages](https://docs.github.com/en/pages).

read more to find out why and how (it's very easy)

### Intro

I have always wondered how companies built and manged their codebases and infrastructures, but never found anything online that was a real use case. it's always "from zero to hero tutorials" or "tech X for beginners" but they never show real world use cases or everyday problems. so here this came to be

### Tech Stack

When I wanted to start writing about my life as Dev I wanted something quick and easy, that made me focus on publishing and not on the setup, yet that I could extend and have ownership of, so I chose:

- Astro
- Breeze custom theme
- Deployed on Github Pages

### how the deploy works

Whenever I push new changes into `main` branch a Github action is triggered

These are the steps:

```yaml
steps:
  - name: Checkout
    uses: actions/checkout@v4
### installs PNPM
  - name: Setup pnpm
    uses: pnpm/action-setup@v4
    with:
      version: 10
### installs NODEJS
  - name: Setup Node.js
    uses: actions/setup-node@v4
    with:
      node-version: 22
      cache: pnpm
### installs the project dependencies from the package.json
  - name: Install dependencies
    run: pnpm install --frozen-lockfile
      - name: Build site
        env:
          SITE_URL: ${{ steps.pages.outputs.site_url }}
          BASE_PATH: ${{ steps.pages.outputs.base_path }}
        run: pnpm build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5
### uploads the built files (/dist) folder
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
### deploys the content as static website
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
