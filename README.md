# EmojiHub😜

![Banner](public/emojihub-cover.png)

A beautiful, fully functional emoji search and copy application built with Next.js 13, Framer Motion, and modern web technologies.

## Features

- **Search Functionality**: Search through hundreds of emojis by name, category, or tags
- **Smart Suggestions**: Get intelligent search suggestions as you type
- **Copy to Clipboard**: Click any emoji to instantly copy it to your clipboard
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Category Organization**: Browse emojis by categories including Smileys, Hearts, Gestures, Animals, Food, Sports, Transport, Objects, Symbols, and Nature
- **Responsive Design**: Works perfectly on all devices - mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth hover effects
- **Fast Performance**: Optimized with Next.js 13 static generation

## Tech Stack

- **Next.js 13**: React framework with App Router
- **TypeScript**: Type-safe development
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, accessible component library
- **Lucide React**: Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/codewithdhruba01/EmojiHub.git
cd emojihub
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build
```

The optimized static site will be generated in the `.next` folder.

## Project Structure

```
emojihub/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page component
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── navbar.tsx            # Navigation bar
│   ├── hero-section.tsx      # Hero section with search
│   ├── emoji-grid.tsx        # Grid layout for emojis
│   └── emoji-card.tsx        # Individual emoji card
├── lib/
│   ├── emoji-data.ts         # Emoji data and types
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
```

## Features in Detail

### Search

- Type in the search bar to filter emojis
- Search by emoji name, category, or tags
- Real-time search suggestions appear as you type
- Click suggestions to quickly search

### Copy Functionality

- Click any emoji card to copy it to your clipboard
- Visual feedback with a checkmark animation
- Smooth hover effects for better UX

### Categories

Browse emojis organized by categories:

- **Smileys**: Happy, sad, and expressive faces
- **Hearts**: Different colored hearts and love symbols
- **Gestures**: Hand gestures and body language
- **Animals**: Cute animals, birds, and sea creatures
- **Food**: Delicious food and drink emojis
- **Sports**: Sports equipment and activities
- **Transport**: Vehicles and transportation
- **Objects**: Everyday objects and tools
- **Symbols**: Various symbols and shapes
- **Nature**: Weather, plants, and natural elements

### Animations

- Smooth page transitions
- Staggered emoji card animations
- Hover effects with rotation and scale
- Copy confirmation animations
- Search suggestion animations

## Customization

### Adding More Emojis

Edit `lib/emoji-data.ts` to add more emojis:

```typescript
{
  emoji: '🎉',
  name: 'Party Popper',
  category: 'Objects',
  tags: ['party', 'celebration', 'confetti']
}
```

### Changing Colors

Modify the colors in `tailwind.config.ts` or update the gradient classes in components.

### Adjusting Animations

Edit animation parameters in component files. Framer Motion settings are inline for easy customization.

## Performance

- Static site generation for optimal performance
- Lazy loading of components
- Optimized bundle size
- Fast search with useMemo hooks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE) - feel free to use this project for personal or commercial purposes.

---

<div align="center">
   
⭐ If you find this project useful, please give it a star!

**Built with ❤️ by Dhrubaraj Pati for developers**

[Website](https://codewithdhruba.vercel.app/) • [GitHub](https://github.com/codewithdhruba01) • [Twitter](https://x.com/codewithdhruba)

</div>