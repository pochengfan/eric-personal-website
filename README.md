
```markdown
# Eric (范博丞) — Personal Website

This repo contains a React + Vite + Tailwind personal site for 范博丞. The repository is configured with a GitHub Actions workflow that builds and deploys the site to GitHub Pages (gh-pages branch) on push to main.

Quick start
1. Install node (>=18) and npm.
2. Install dependencies:
   - npm install
3. Run dev server:
   - npm run dev
4. Build:
   - npm run build

Deployment (automated)
- Push to main → GitHub Actions will run the workflow and publish ./dist to gh-pages using the workflow in .github/workflows/deploy.yml.
- Expected Pages URL (default): https://pochengfan.github.io/eric-personal-website/

Notes
- Add your profile image to public/profile.jpg and your resume to public/resume.pdf. The site will fallback to a placeholder avatar if profile.jpg is missing.
- If you rename the repo, update base in vite.config.js.

```
