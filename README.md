# nouh.is-a.dev

Personal site of Nouh Khouyi Etbar, Data Science student (UPV, IMT Atlantique).

Built with [Astro](https://astro.build) as a static site, in English (`/`) and Spanish (`/es/`).
The hero is an interactive transit map of my career, rendered at build time and enhanced with a small script.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

- `src/data/site.ts` holds all copy in both languages and the map geometry.
- `src/components/` has the page sections; `TransitMap.astro` is the network map.
- `src/styles/global.css` holds the design tokens (light and dark) and layout.

Deployed on Cloudflare Pages.
