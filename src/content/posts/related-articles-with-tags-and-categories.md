---
title: Related Articles with Tags and Categories
createdAt: 2026-03-04
category: vibe-coding
tags: [astro, tutorial]
linksTo: [markdown-guide]
summary: How related posts now work in this blog, and what GitHub Copilot changed to enable it.
draft: false
---

I wanted articles in this blog to be connected to each other, so this update adds an automatic **Related articles** section to every post.

This implementation was made by **GitHub Copilot** directly in the project code.

## What was changed

The single post page now computes related content in `src/pages/posts/[...slug].astro`.

The logic works like this:

1. Load all posts
2. Exclude the current post
3. Score each candidate post
4. Keep only posts with a positive score
5. Sort by score, then by most recent date
6. Show the top 3

## How scoring works

Each candidate post receives points based on metadata overlap:

- `+10` for each shared tag
- `+3` if the category is the same

This means tag overlap has the strongest influence, while category acts as a useful fallback.

## Why this approach

- Uses data already present in frontmatter (`tags` and `category`)
- Does not require a new content field
- Gives relevant recommendations without manual curation
- Scales naturally as more posts are added

## Where it appears

The section appears on each post page under the tag chips with the heading **Related articles**.

It reuses the existing `PostPreview` component, so the visual style stays consistent with the rest of the theme.

## Links and backlinks

This update also adds explicit article graphing via frontmatter.

- New post field: `linksTo`
- Purpose: declare outgoing links to other posts by slug
- Result: post pages now render both **Links** and **Backlinks** sections

`Backlinks` are computed automatically by scanning all posts and finding which ones include the current post in `linksTo`.

This part of the implementation was also made by **GitHub Copilot**.

## Notes for future improvements

If needed, this can be expanded later to include:

- A minimum shared-tag threshold
- Optional manual overrides in frontmatter
- Weighted recency boosting
- Cross-category recommendations with softer scoring
