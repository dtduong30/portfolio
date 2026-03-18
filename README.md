## 🚀 Deployment Nịnh vợ

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Deploy to GitHub Pages

1. Update `vite.config.ts` with your repo name:

```typescript
export default defineConfig({
  base: "/your-repo-name/",
});
```

2. Build and deploy:

```bash
npm run build
npm run deploy
```
