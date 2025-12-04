# iTorpu Portfolio - Deployment Guide

## Overview

This is a flashy, modern personal portfolio website built with React, Tailwind CSS, and Vite. The site features a neon cyberpunk aesthetic with smooth animations and interactive elements.

## Features

- **Neon Cyberpunk Design**: Dark backgrounds with electric magenta, cyan, and purple accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Glowing effects, hover states, and scroll-triggered reveals
- **Fast Performance**: Optimized with Vite for rapid development and production builds
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Project Structure

```
itorpu-portfolio/
├── client/
│   ├── public/
│   │   └── images/          # Static images (hero, gradients, music visuals)
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts
│   │   ├── lib/             # Utility functions
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── server/                  # Server placeholder (not used for static deployment)
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## Local Development

### Prerequisites

- Node.js 18+ and pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Build the static site
pnpm build

# Preview the production build locally
pnpm preview
```

The production build will be in the `dist/` directory.

## Deployment to Netlify

### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Option 2: Deploy via Git (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: iTorpu portfolio"
   git remote add origin https://github.com/yourusername/itorpu-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose your repository
   - Configure build settings:
     - **Build command**: `pnpm build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

### Option 3: Deploy via Drag & Drop

1. Build the project locally:
   ```bash
   pnpm build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

## Connecting Your Custom Domain

Once deployed on Netlify:

1. Go to your site's settings
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Enter `itorpu.com`
5. Follow DNS configuration instructions for your domain registrar

## Environment Variables

This is a static site and doesn't require environment variables. However, if you want to enable analytics:

- The site includes placeholder for Umami analytics
- Update the `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` in your build configuration if needed

## Customization

### Update Content

Edit `/client/src/pages/Home.tsx` to update:
- Bio and descriptions
- Project information
- Social media links
- Contact information

### Modify Colors

Edit `/client/src/index.css` to change the neon color palette:
- `--neon-magenta`: Primary accent color
- `--neon-cyan`: Secondary accent color
- `--neon-purple`: Tertiary accent color
- `--dark-bg`: Background color

### Add New Sections

1. Create a new component in `/client/src/components/`
2. Import and add it to the Home page
3. Style using Tailwind CSS classes

## Performance Optimization

The site is already optimized with:

- **Vite**: Fast build tool with hot module replacement
- **Tailwind CSS**: Utility-first CSS with minimal bundle size
- **Image Optimization**: Generated images are already optimized
- **Code Splitting**: Automatic with Vite

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

## Troubleshooting

### Build fails with dependency errors
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Images not loading
- Ensure images are in `/client/public/images/`
- Check image paths in components (should be `/images/filename.png`)

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild the project: `pnpm build`

## Support & Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Netlify Documentation](https://docs.netlify.com)

## License

This project is open source and available under the MIT License.

---

**Built with innovation and creativity by iTorpu**
