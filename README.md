# Aether Hacker Agent

A mystical, agent-driven security toolkit inspired by ancient Greek goddess mythology.

## Project Structure

```
aetherhackeragent/
├── app/
│   ├── components/
│   │   ├── DownloadButton.tsx      # Client-side script downloader
│   │   └── TerminalSandbox.tsx     # Animated terminal simulator
│   ├── skill/
│   │   └── [id]/
│   │       └── page.tsx             # Individual skill detail page
│   ├── globals.css                  # Global styles & Tailwind
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Landing page (skill listing)
├── lib/
│   └── skills.json                  # Skill definitions
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Design System

### Colors
- **Background**: `#ffe6cb` (Warm Parchment)
- **Primary Text**: `#041C1C` (Dark Teal)
- **Accent Teal**: `#17a2a2` (Dividers, borders)
- **Divine Green**: `#00dd66` (CTAs, actions)
- **Sacred Purple**: `#b74a9e` (Hover states)
- **Divine Gold**: `#d4af37` (Special moments)

### Typography
- **Headers**: rulesexpanded (font-expanded)
- **Body**: mondwestfont (font-mondwest)
- **Code/Terminal**: Courier Prime (font-courier)
- **Fallback**: System sans-serif (font-sans)

### Medieval Aesthetics
- Ornamental borders with corner brackets `⌈ ⌉`
- Halo glow effects on skill cards
- Double-border terminal windows
- Smooth transitions (200-250ms ease-out)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Features

### Landing Page (`/`)
- Skills grouped by category
- Visual cards with descriptions
- Difficulty badges
- Hover effects with ornamental styling

### Skill Detail Page (`/skill/[id]`)
- Full skill documentation (overview, features)
- Technical specifications
- Live terminal sandbox simulation
- Download installation script (client-side)
- Tags and metadata

### Terminal Sandbox Component
Parses `[DELAY-XXX]` markers in mock output:
- Extracts delay duration and visible text
- Renders with asynchronous delays
- Auto-scrolls to bottom
- Shows blinking cursor while running
- No markers visible to user

### Script Download
- Client-side Blob generation
- No server-side file serving
- Memory-safe URL revocation
- Content embedded in JSON

## Development Notes

- **No API calls**: All data is loaded from static JSON
- **Client-side rendering**: Terminal simulator uses React hooks
- **Responsive design**: Mobile-first, responsive grid layout
- **Type-safe**: Full TypeScript support

## Next Steps

1. Add more skills to `lib/skills.json`
2. Customize fonts (import actual font files)
3. Add search/filtering
4. Add user skill bookmarking
5. Implement skill versioning
6. Add related skills linking
