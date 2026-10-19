# Netflix Clone

A Netflix-style streaming UI built with React and Vite. It renders a scrolling header, a hero banner, horizontally scrollable catalogue rows with hover cards, and a footer.

## Features

- **Header** — transparent on top of the hero, solid on scroll, with search, notifications and profile menu
- **Banner** — featured title with logo, play/info actions and background artwork
- **Catalogue rows** — horizontal carousels with arrow navigation and keyboard support
- **Movie cards** — hover state with play, add, and details actions
- **Footer** — link columns matching the Netflix layout

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 19 | UI library |
| Vite 8 | dev server and build |
| react-router-dom 7 | client-side routing shell |
| lucide-react | icons |
| CSS Modules | component styling |
| Oxlint | linting |

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | start dev server with HMR |
| `npm run build` | production build to `dist/` |
| `npm run preview` | preview the production build |
| `npm run lint` | run Oxlint |

## Project structure

```
src/
├── Components/
│   ├── Banner/       # hero section
│   ├── DisplayRow/   # catalogue section wrapper
│   ├── Footer/       # footer links
│   ├── Header/       # navigation bar
│   ├── MovieCard/    # poster card with hover actions
│   └── SlideShow/    # horizontal card carousel
├── Data/
│   └── Data.js       # movie and series catalogue
├── assets/           # artwork and thumbnails
├── App.jsx           # layout composition
└── main.jsx          # app entry point
```
