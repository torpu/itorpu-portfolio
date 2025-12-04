# iTorpu - Developer & Innovation Architect Portfolio

A flashy, modern personal portfolio website showcasing expertise in full-stack development, innovation architecture, AI music production, and creative technology.

## 🎨 Design Highlights

**Neon Cyberpunk Aesthetic** with:
- Dark backgrounds with electric magenta (#FF006E), cyan (#00D9FF), and purple (#9D4EDD) accents
- Glowing text effects and animated gradients
- Smooth scroll-triggered animations and hover effects
- Responsive design that works on all devices
- Fast performance optimized with Vite

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📦 What's Inside

| Directory | Purpose |
|-----------|---------|
| `client/src/pages/` | Page components (Home, NotFound) |
| `client/src/components/` | Reusable UI components from shadcn/ui |
| `client/src/index.css` | Global styles and design tokens |
| `client/public/images/` | Static images and visual assets |
| `client/index.html` | HTML template with meta tags |

## 🎯 Key Features

- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Smooth Animations**: Framer Motion and CSS animations
- **Icon Library**: Lucide React icons throughout
- **Form Components**: shadcn/ui pre-built components
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Dark Theme**: Neon cyberpunk color scheme

## 🛠️ Technology Stack

| Technology | Purpose |
|-----------|---------|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 4 | Styling |
| TypeScript | Type safety |
| Framer Motion | Animations |
| Lucide React | Icons |
| shadcn/ui | Component library |
| Wouter | Client-side routing |

## 📝 Customization Guide

### Update Content
Edit `client/src/pages/Home.tsx` to customize:
- Bio and professional description
- Project information and links
- Social media profiles
- Contact information
- Section content

### Change Colors
Edit `client/src/index.css` CSS variables:
```css
--neon-magenta: #FF006E;  /* Primary accent */
--neon-cyan: #00D9FF;     /* Secondary accent */
--neon-purple: #9D4EDD;   /* Tertiary accent */
--dark-bg: #0a0e27;       /* Background */
```

### Add Images
1. Place images in `client/public/images/`
2. Reference in components: `<img src="/images/filename.png" />`

### Modify Typography
Edit the font imports in `client/index.html` and font definitions in `client/src/index.css`:
- Headings use "Space Mono" (monospace, bold)
- Body text uses "Inter" (sans-serif, readable)

## 🚀 Deployment

### Deploy to Netlify (Recommended)

**Via Git (Automatic Deploys)**:
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `pnpm build`
4. Publish directory: `dist`

**Via CLI**:
```bash
npm install -g netlify-cli
pnpm build
netlify deploy --prod --dir=dist
```

**Via Drag & Drop**:
1. Run `pnpm build`
2. Visit [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist` folder

### Connect Custom Domain
1. In Netlify dashboard, go to Domain settings
2. Add custom domain (e.g., itorpu.com)
3. Update DNS settings at your domain registrar

### Other Hosting Options
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Build and push `dist/` to gh-pages branch
- **Traditional Hosting**: Upload `dist/` folder via FTP

## 📚 File Structure

```
itorpu-portfolio/
├── client/
│   ├── public/
│   │   ├── images/              # Visual assets
│   │   └── index.html           # HTML template
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx         # Main portfolio page
│   │   │   └── NotFound.tsx     # 404 page
│   │   ├── components/
│   │   │   ├── ui/              # shadcn/ui components
│   │   │   └── ErrorBoundary.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx # Dark theme provider
│   │   ├── lib/                 # Utility functions
│   │   ├── App.tsx              # Main app with routing
│   │   ├── main.tsx             # React entry point
│   │   └── index.css            # Global styles
│   └── package.json
├── server/                      # Backend placeholder (not used)
├── QUICKSTART.md                # Quick deployment guide
├── DEPLOYMENT.md                # Detailed deployment docs
├── README.md                    # This file
└── package.json
```

## 🎨 Design Philosophy

The website follows a **Neon Cyberpunk** aesthetic emphasizing:

1. **Neon Vibrancy**: Electric colors create immediate visual impact
2. **Layered Depth**: Overlapping elements with glowing effects
3. **Kinetic Motion**: Constant subtle animations that feel alive
4. **Bold Typography**: Heavy fonts with dramatic scale contrasts
5. **Asymmetrical Layout**: Unexpected element placement for visual interest

## 🔧 Development Tips

### Add New Sections
1. Create component in `client/src/pages/Home.tsx`
2. Use existing Card components as templates
3. Apply Tailwind classes for styling
4. Add animations with CSS or Framer Motion

### Extend Components
- Edit `client/src/components/ui/` for shadcn/ui customizations
- Create custom components in `client/src/components/`
- Import and use throughout the app

### Debug Styling
- Check Tailwind class names in `index.css`
- Use browser DevTools to inspect elements
- Verify color tokens are applied correctly

## 📊 Performance

The site is optimized for speed:
- **Vite**: Instant HMR and fast builds
- **Tree-shaking**: Unused code removed in production
- **Image Optimization**: Generated images are already optimized
- **CSS Purging**: Tailwind removes unused styles
- **Code Splitting**: Automatic with Vite

## 🌐 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile: iOS Safari 12+, Chrome Android latest

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| `pnpm not found` | Install: `npm install -g pnpm` |
| Port 3000 in use | Kill process: `lsof -ti:3000 \| xargs kill -9` |
| Build errors | Clear: `rm -rf node_modules && pnpm install` |
| Images missing | Verify paths in code match `/public/images/` |
| Netlify build fails | Test locally first: `pnpm build` |

## 📖 Documentation

- [Vite Guide](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Netlify Docs](https://docs.netlify.com)

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Credits

Built with:
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **shadcn/ui** - Components
- **Framer Motion** - Animations

---

**Made with innovation and creativity** ✨

For questions or customization help, refer to `QUICKSTART.md` and `DEPLOYMENT.md`.
