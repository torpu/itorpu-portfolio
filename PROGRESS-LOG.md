## 2025-12-04 – Session Progress

- **Project setup**
  - Unzipped `itorpu-portfolio-source.zip` and confirmed the Vite/React project structure.
  - Verified `vite.config.ts` uses `client` as the root and outputs to `dist/public`.
  - Installed `pnpm` globally and switched the project to use `pnpm install` / `pnpm dev` instead of `npm`.
  - Successfully ran the site locally on the dev server.

- **Content and links**
  - Reviewed `client/src/pages/Home.tsx` for hero, AI Music, and contact sections.
  - Updated external links to real profiles:
    - Twitch: `https://www.twitch.tv/itorpu`
    - Suno profile: `https://suno.com/@orp20`
    - GitHub: `https://github.com/torpu`
    - Email: `itorpu@itorpu.com`

- **Netlify deployment**
  - Pushed the project to GitHub (repository: `torpu/itorpu-portfolio` – assumed / recommended).
  - Created a Netlify site from the GitHub repository.
  - Fixed Netlify 404 by correcting the **Publish directory** to `dist/public` (matching Vite’s `outDir`).
  - Confirmed that the site builds and deploys successfully to `itorpu.netlify.app`.

- **Custom domain (`itorpu.com`) – status & next steps**
  - Discussed two options for pointing `itorpu.com` to Netlify:
    - Use **Netlify DNS** (change nameservers at registrar to Netlify’s).
    - Or keep existing DNS and create a **CNAME** `www.itorpu.com → itorpu.netlify.app`, plus root-domain handling.
  - **Next session TODOs:**
    - Decide which DNS option to use based on your registrar (Namecheap/GoDaddy/Cloudflare, etc.).
    - Configure DNS records or nameservers for `itorpu.com`.
    - Verify HTTPS is active for `https://itorpu.com` and `https://www.itorpu.com`.
    - Do one more pass over content (text/images) and consider adding more sections or projects if needed.



