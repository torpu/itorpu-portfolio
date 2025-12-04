# Quick Start Guide - iTorpu Portfolio

## What You Have

A complete, production-ready personal portfolio website with:

✨ **Neon Cyberpunk Design** - Dark backgrounds with glowing electric accents  
⚡ **Fast Performance** - Built with Vite for instant development and optimized builds  
📱 **Fully Responsive** - Works beautifully on mobile, tablet, and desktop  
🎨 **Customizable** - Easy to modify colors, content, and sections  
🚀 **Ready to Deploy** - Just push to Netlify and you're live  

## Getting Started (5 minutes)

### 1. Install Dependencies
```bash
cd itorpu-portfolio
pnpm install
```

### 2. Run Locally
```bash
pnpm dev
```
Open `http://localhost:3000` in your browser.

### 3. Customize Your Content

Edit `/client/src/pages/Home.tsx`:
- Update your bio and descriptions
- Change project information
- Modify social media links
- Add or remove sections as needed

### 4. Change Colors (Optional)

Edit `/client/src/index.css` and modify these CSS variables:
```css
--neon-magenta: #FF006E;  /* Primary accent */
--neon-cyan: #00D9FF;     /* Secondary accent */
--neon-purple: #9D4EDD;   /* Tertiary accent */
--dark-bg: #0a0e27;       /* Background */
```

## Deployment to Netlify (2 minutes)

### Method 1: GitHub + Netlify (Recommended)

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/itorpu-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Deploy!

3. **Add Your Custom Domain**:
   - In Netlify dashboard, go to Domain settings
   - Add custom domain: `itorpu.com`
   - Update your domain registrar's DNS settings

### Method 2: Direct Netlify Deploy

```bash
npm install -g netlify-cli
pnpm build
netlify deploy --prod --dir=dist
```

### Method 3: Drag & Drop

1. Run `pnpm build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist` folder
4. Done! (You'll get a temporary URL)

## File Structure You Need to Know

```
itorpu-portfolio/
├── client/src/pages/Home.tsx      ← Edit this for content
├── client/src/index.css           ← Edit this for colors
├── client/public/images/          ← Add your own images here
├── package.json                   ← Project metadata
└── dist/                          ← Generated build (deploy this)
```

## Common Customizations

### Change the Title
Edit `client/index.html`:
```html
<title>Your Name - Developer & Innovator</title>
```

### Add Your Own Images
1. Place images in `/client/public/images/`
2. Reference them in components: `<img src="/images/your-image.png" />`

### Update Social Links
Edit `/client/src/pages/Home.tsx` and find the contact section. Update URLs:
```tsx
<a href="https://your-twitch-url">Twitch</a>
<a href="https://your-github-url">GitHub</a>
```

### Add New Sections
1. Create a new section in `Home.tsx`
2. Use the existing card components as templates
3. Style with Tailwind classes

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `pnpm not found` | Install pnpm: `npm install -g pnpm` |
| Port 3000 in use | Kill process: `lsof -ti:3000 \| xargs kill -9` |
| Build fails | Clear cache: `rm -rf node_modules && pnpm install` |
| Images not showing | Check paths in code match files in `/public/images/` |
| Netlify build fails | Ensure `pnpm build` works locally first |

## What's Included

- **React 19** - Modern UI framework
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icon library
- **shadcn/ui** - Pre-built components

## Next Steps

1. ✅ Customize content in `Home.tsx`
2. ✅ Test locally with `pnpm dev`
3. ✅ Push to GitHub
4. ✅ Deploy to Netlify
5. ✅ Connect your domain
6. ✅ Share with the world!

## Need Help?

- **Vite**: https://vitejs.dev/guide/
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com/docs
- **Netlify**: https://docs.netlify.com

---

**Your flashy portfolio is ready to shine! 🚀**
