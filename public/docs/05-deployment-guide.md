# 🚀 Deployment Guide: Gym Yohanes to Vercel

*Step-by-step guide to deploy your Vue.js gym website to Vercel*

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Project runs locally without errors (`npm run dev`)
- [ ] All routes work correctly (Home `/`, Food `/food`)
- [ ] Git repository is up to date
- [ ] GitHub repository exists (public or private)

---

## 🔧 Step 1: Test Production Build Locally

Before deploying to Vercel, test if your production build works correctly.

### 1.1 Build the Project

Open your terminal in the project folder and run:

```bash
npm run build
```

**What to expect:**
```
vite v7.2.4 building for production...
✓ 1234 modules transformed.
dist/index.html                   0.85 kB │ gzip:  0.45 kB
dist/assets/index-abc123.css     45.23 kB │ gzip: 12.34 kB
dist/assets/index-def456.js     234.56 kB │ gzip: 78.90 kB
✓ built in 3.45s
```

**If you see errors:**
- Read the error message carefully
- Fix the issues in your source code
- Run `npm run build` again

### 1.2 Preview the Build

After successful build, preview it locally:

```bash
npm run preview
```

**What to expect:**
```
  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 1.3 Test All Routes

Open `http://localhost:4173/` in your browser and test:

- [ ] Home page loads (`/`)
- [ ] Food page loads (`/food`)
- [ ] Navigation works (click links in Navbar)
- [ ] **IMPORTANT:** Refresh page on `/food` (should NOT show 404)
- [ ] All images load correctly
- [ ] All styles look correct
- [ ] No console errors (press F12 → Console tab)

**If everything works, you're ready to deploy!** ✅

---

## 🌐 Step 2: Prepare GitHub Repository

Vercel deploys from GitHub, so your code must be on GitHub first.

### 2.1 Check Git Status

```bash
git status
```

**If you see uncommitted changes:**
```bash
git add .
git commit -m "Ready for deployment"
```

### 2.2 Push to GitHub

```bash
git push origin main
```

**Or if your branch is named `master`:**
```bash
git push origin master
```

### 2.3 Verify on GitHub

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/gym-yohanes`
2. Make sure all files are there
3. Check that the latest commit shows "Ready for deployment"

---

## 🎯 Step 3: Deploy to Vercel

### 3.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### 3.2 Import Your Project

**Method A: Via Vercel Dashboard (Recommended)**

1. After login, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"gym-yohanes"** and click **"Import"**

**Method B: Via Direct Link**

Go to: `https://vercel.com/new`

### 3.3 Configure Project Settings

Vercel will auto-detect your project settings:

**Framework Preset:** Vite ✅ (auto-detected)

**Build Settings:**
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Root Directory:** `./` (leave as default)

**Environment Variables:** (skip for now, can add later)

### 3.4 Deploy!

1. Click **"Deploy"**
2. Wait 1-3 minutes while Vercel:
   - Clones your repository
   - Runs `npm install`
   - Runs `npm run build`
   - Deploys to their CDN

**You'll see a progress screen:**
```
⏳ Queued
🔨 Building
📦 Uploading
✅ Ready
```

### 3.5 Success! 🎉

When deployment is complete, you'll see:

```
🎉 Congratulations!

Your project is live at:
https://gym-yohanes-abc123.vercel.app
```

**Click the link to view your live website!**

---

## ✅ Step 4: Test Your Live Website

### 4.1 Basic Tests

- [ ] Visit your Vercel URL
- [ ] Home page loads correctly
- [ ] Click "FOOD" in navbar → Food page loads
- [ ] **CRITICAL TEST:** Type `/food` directly in URL bar and press Enter
  - Should load Food page (NOT 404) ✅
- [ ] All images display
- [ ] All styles work
- [ ] Mobile responsive (resize browser window)

### 4.2 Test on Different Devices

- [ ] Desktop browser
- [ ] Mobile browser (use your phone)
- [ ] Tablet (if available)

### 4.3 Check Performance

1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Click **"Generate report"**
4. Check scores (should be 90+ for Performance)

---

## 🔄 Step 5: Update Your Website (Future)

Every time you want to update your website:

### 5.1 Make Changes Locally

Edit your code in `src/` folder

### 5.2 Test Locally

```bash
npm run dev
# Test your changes
```

### 5.3 Commit and Push

```bash
git add .
git commit -m "Update: describe what you changed"
git push
```

### 5.4 Auto-Deploy! 🚀

**Vercel automatically detects the push and redeploys!**

- No need to do anything else
- Wait 1-2 minutes
- Your website is updated!

**You'll receive an email:**
```
✅ Deployment succeeded
Your deployment is now live at:
https://gym-yohanes-abc123.vercel.app
```

---

## 🌟 Step 6: Custom Domain (Optional)

Want `coachmogot.com` instead of `gym-yohanes-abc123.vercel.app`?

### 6.1 Buy a Domain

**Recommended registrars:**
- Namecheap (~$10/year)
- Cloudflare (~$10/year)
- Niagahoster (~Rp 150k/year)

### 6.2 Add Domain to Vercel

1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `coachmogot.com`
4. Click **"Add"**

### 6.3 Configure DNS

Vercel will show you DNS records to add:

**Type A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Type CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 6.4 Wait for Propagation

- DNS changes take 1-24 hours
- Vercel automatically provisions SSL (HTTPS)
- Your site will be live at `https://coachmogot.com`

---

## 🛠️ Troubleshooting

### Problem 1: Build Fails

**Error message:**
```
Error: Cannot find module 'xyz'
```

**Solution:**
```bash
# Make sure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

### Problem 2: 404 on Direct URL Access

**Symptom:** `/food` works when clicking navbar, but shows 404 when accessing directly

**Solution:** Vercel should handle this automatically for Vite projects. If not:

1. Create `vercel.json` in project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

2. Commit and push:
```bash
git add vercel.json
git commit -m "Add Vercel config for SPA routing"
git push
```

---

### Problem 3: Images Not Loading

**Symptom:** Images show broken icon

**Possible causes:**
1. Images not in `public/` folder
2. Wrong path in code
3. Case-sensitive filenames (GitHub is case-sensitive!)

**Solution:**
1. Move images to `public/images/`
2. Reference as `/images/photo.jpg` (with leading `/`)
3. Make sure filename case matches exactly

---

### Problem 4: Styles Not Working

**Symptom:** Website looks unstyled

**Check:**
1. Tailwind CSS is in dependencies ✅ (already in your package.json)
2. CSS files are imported in `main.js` ✅
3. Build completed successfully ✅

**If still broken:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
npm run preview
```

---

## 📊 Vercel Dashboard Features

### Deployments

View all your deployments:
- Production (from `main` branch)
- Preview (from other branches or PRs)

### Analytics

See visitor statistics:
- Page views
- Unique visitors
- Top pages
- Countries

### Logs

Debug issues:
- Build logs
- Function logs (if using serverless functions)
- Real-time logs

### Environment Variables

Add secrets (for future backend integration):
```
VITE_API_URL=https://api.gym-yohanes.com
VITE_FIREBASE_KEY=your-key-here
```

---

## 🎯 Best Practices

### Branch Strategy

```
main (production)
  ↓
  Deploys to: gym-yohanes.vercel.app

develop (staging)
  ↓
  Deploys to: gym-yohanes-git-develop.vercel.app
```

**Workflow:**
1. Make changes in `develop` branch
2. Test on preview URL
3. Merge to `main` when ready
4. Production auto-deploys

### Commit Messages

Good commit messages help track changes:

```bash
✅ git commit -m "Add meal plan section"
✅ git commit -m "Fix: navbar mobile menu not closing"
✅ git commit -m "Update: hero section images"

❌ git commit -m "update"
❌ git commit -m "fix bug"
```

### Performance Optimization

**Images:**
- Use WebP format (smaller file size)
- Compress images before upload
- Use lazy loading for images below fold

**Code:**
- Lazy load routes (already done! ✅)
- Remove unused dependencies
- Use production build (Vite does this automatically)

---

## 📱 Progressive Web App (PWA) - Future Enhancement

Want users to "install" your website like an app?

### Add PWA Support

1. Install Vite PWA plugin:
```bash
npm install vite-plugin-pwa -D
```

2. Update `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Coach Yohanes Fitness',
        short_name: 'Coach Yohan',
        description: 'Personal Training & Nutrition',
        theme_color: '#your-primary-color',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

3. Users can now install your website on their phone!

---

## 🔐 Security Best Practices

### Environment Variables

Never commit sensitive data:

```javascript
// ❌ Bad
const API_KEY = 'sk_live_abc123xyz'

// ✅ Good
const API_KEY = import.meta.env.VITE_API_KEY
```

Add in Vercel Dashboard → Settings → Environment Variables

### HTTPS

Vercel provides free SSL automatically ✅

### CORS (for future API)

When connecting to backend:

```javascript
// Frontend (Vue)
const response = await fetch('https://api.gym-yohanes.com/trainers')

// Backend must allow your domain:
// Access-Control-Allow-Origin: https://gym-yohanes.vercel.app
```

---

## 📈 Monitoring & Analytics

### Vercel Analytics

Enable in Dashboard:
- Real-time visitor data
- Core Web Vitals
- Performance metrics

### Google Analytics (Optional)

1. Create GA4 property
2. Add tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎓 Next Steps After Deployment

### Immediate (This Week)
- [ ] Share your live URL with friends/family
- [ ] Test on multiple devices
- [ ] Get feedback
- [ ] Fix any issues found

### Short Term (This Month)
- [ ] Complete remaining content (70% that's not done yet)
- [ ] Add more pages (Services detail, About, Contact)
- [ ] Optimize images
- [ ] Add meta tags for SEO

### Long Term (Next 3 Months)
- [ ] Custom domain
- [ ] Backend integration (Laravel/Node.js)
- [ ] User authentication
- [ ] Booking system
- [ ] Payment integration

---

## 🆘 Getting Help

### Vercel Support
- Documentation: `vercel.com/docs`
- Community: `github.com/vercel/vercel/discussions`
- Twitter: `@vercel`

### Vue/Vite Issues
- Vue Router docs: `router.vuejs.org`
- Vite docs: `vitejs.dev`
- Stack Overflow: Tag `vue.js` + `vite`

### Your Project
- Check build logs in Vercel Dashboard
- Test locally first (`npm run build` → `npm run preview`)
- Compare local vs production behavior

---

## ✅ Deployment Checklist Summary

**Before First Deploy:**
- [ ] `npm run build` works locally
- [ ] `npm run preview` shows correct website
- [ ] All routes work (including direct URL access)
- [ ] Code pushed to GitHub
- [ ] Vercel account created

**During Deploy:**
- [ ] Import project from GitHub
- [ ] Verify auto-detected settings (Vite, dist/)
- [ ] Click Deploy
- [ ] Wait for completion

**After Deploy:**
- [ ] Test live URL
- [ ] Test all routes
- [ ] Test on mobile
- [ ] Share with others
- [ ] Monitor for issues

**For Updates:**
- [ ] Edit code locally
- [ ] Test with `npm run dev`
- [ ] Commit and push to GitHub
- [ ] Vercel auto-deploys
- [ ] Verify live site updated

---

## 🎉 Congratulations!

Once deployed, your gym website will be:
- ✅ Live on the internet
- ✅ Accessible worldwide
- ✅ Fast (Vercel CDN)
- ✅ Secure (HTTPS)
- ✅ Auto-updating (on every push)
- ✅ Free (Vercel free tier)

**Your website URL will be:**
`https://gym-yohanes-[random-id].vercel.app`

**You can customize the project name in Vercel settings to get:**
`https://coach-yohanes.vercel.app`

---

*Good luck with your deployment! 🚀*

*Last updated: February 2026*
