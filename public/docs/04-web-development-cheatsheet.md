# Web Development Cheatsheet
*A comprehensive guide covering Vue Router, deployment, and modern web development concepts*

---

## 📚 Table of Contents
1. [Vue Router & Multi-Page Apps](#vue-router--multi-page-apps)
2. [Build Process & Deployment](#build-process--deployment)
3. [Hosting Platforms](#hosting-platforms)
4. [Node.js & Backend Frameworks](#nodejs--backend-frameworks)
5. [Vite vs Vue](#vite-vs-vue)
6. [Laravel vs Node.js](#laravel-vs-nodejs)
7. [npm Ecosystem](#npm-ecosystem)
8. [React.js vs React Native](#reactjs-vs-react-native)

---

## 🧭 Vue Router & Multi-Page Apps

### Core Concepts

| Term | Explanation |
|------|-------------|
| **Route** | Rule that connects URL to a component (e.g., `/about` → `AboutPage.vue`) |
| **`<RouterView>`** | Placeholder where page components render (like a "TV screen" that changes content) |
| **`<RouterLink>`** | Replacement for `<a href>` to navigate without page reload |
| **SPA** | Single Page Application - one HTML file, content changes based on URL |

### Folder Structure

```
src/
├── components/      ← Reusable components (Navbar, Footer, etc.)
├── pages/           ← ⭐ Full page components
│   ├── HomePage.vue
│   ├── AboutPage.vue
│   └── ServicesPage.vue
├── router/          ← ⭐ Routing configuration
│   └── index.js
├── App.vue
└── main.js
```

### Router Setup (`src/router/index.js`)

```javascript
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')  // Lazy loading
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }  // Scroll to top on route change
  }
})

export default router
```

### App.vue Structure

```vue
<template>
  <div>
    <Navbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
/* Page Transitions */
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
```

### Navigation

```vue
<!-- ❌ Old way (page reload) -->
<a href="/about">About</a>

<!-- ✅ Vue Router way (no reload, smooth) -->
<RouterLink to="/about">About</RouterLink>

<!-- Using named routes -->
<RouterLink :to="{ name: 'About' }">About</RouterLink>
```

### Programmatic Navigation

```vue
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToAbout() {
  router.push('/about')
  // or: router.push({ name: 'About' })
}
</script>
```

### Lazy Loading Benefits

**Regular Loading:**
```javascript
import AboutPage from '../pages/AboutPage.vue'
// File loads immediately when app starts
```

**Lazy Loading:**
```javascript
component: () => import('../pages/AboutPage.vue')
// File loads ONLY when user visits the route
```

**Why Lazy Load?**
- Faster initial page load
- Better performance for large apps
- Only download what's needed

---

## 🏗️ Build Process & Deployment

### The Cooking Analogy

| Concept | Analogy | Technical |
|---------|---------|-----------|
| **Source Code (`src/`)** | Recipe ingredients | Your Vue files, components, assets |
| **Build (`npm run build`)** | Cooking process | Compile, bundle, minify, optimize |
| **Dist Folder** | Finished dish | Production-ready files |

### Build Commands

```bash
# Development (local coding)
npm run dev
# → Hot reload, source maps, debugging tools

# Production build
npm run build
# → Creates dist/ folder with optimized files

# Preview production build locally
npm run preview
# → Test the built version before deploying
```

### What Happens During Build?

```
npm run build
     ↓
1. Compile .vue files → .js
2. Bundle all files together
3. Minify (remove spaces, shorten variable names)
4. Optimize images
5. Generate dist/ folder
     ↓
dist/
├── index.html
├── assets/
│   ├── index-abc123.js    (hashed filenames for caching)
│   └── index-def456.css
└── ...
```

### Important Rules

✅ **Always edit source code (`src/`)**
❌ **Never edit `dist/` files** (they get overwritten on next build)

### Workflow

```
Edit code in src/
     ↓
npm run dev (test locally)
     ↓
Satisfied with changes?
     ↓
git add . && git commit -m "update"
     ↓
git push
     ↓
Auto-deploy (if using Vercel/Netlify)
     ↓
Website updated live!
```

---

## 🌐 Hosting Platforms

### Platform Comparison

| Platform | Type | Best For | Free Tier |
|----------|------|----------|-----------|
| **Vercel** | PaaS | Vue, React, Next.js | 100GB bandwidth/month |
| **Netlify** | PaaS | Static sites, JAMstack | 100GB bandwidth/month |
| **Railway** | PaaS | Backend (Node.js, Laravel) | $5/month trial |
| **Render** | PaaS | Fullstack apps | Free tier available |
| **VPS** | IaaS | Full control, complex apps | From $6/month |
| **Shared Hosting** | Traditional | WordPress, PHP | From $2/month |

### What You Get Free from Vercel/Netlify

```
Domain: yourproject.vercel.app (free subdomain)
Hosting: Free
SSL (HTTPS): Automatic
CDN: Built-in (fast worldwide)
Auto-deploy: From GitHub
Build minutes: 6000/month (Vercel), 300/month (Netlify)
```

### Custom Domain Setup

```
1. Buy domain: $10-15/year (Namecheap, Cloudflare)
2. Connect to Vercel: Update DNS settings
3. SSL: Automatic (free)

Total cost: ~$12/year (just domain, hosting still free!)
```

### When to Pay for Hosting?

**Free is enough for:**
- ✅ Portfolio websites
- ✅ Side projects
- ✅ Startup MVPs
- ✅ Learning projects
- ✅ <10,000 visitors/month

**Need paid hosting for:**
- ❌ Complex backend (Laravel with MySQL)
- ❌ High traffic (>100k visitors/month)
- ❌ Enterprise features (team collaboration, priority support)
- ❌ Compliance requirements (data residency, dedicated servers)

### Vue SPA Deployment Gotcha

**Problem:** Direct URL access returns 404

```
yoursite.com/           ✅ Works
yoursite.com/about      ❌ 404 (if you refresh or access directly)
```

**Why?** Server looks for `/about.html` file (doesn't exist in SPA)

**Solution:** Configure server to redirect all routes to `index.html`

**Vercel/Netlify:** Handles this automatically ✅

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Node.js & Backend Frameworks

### Hierarchy

```
┌─────────────────────────────────────┐
│  Express.js / Nest.js / Fastify     │  ← Framework (what you code with)
├─────────────────────────────────────┤
│  Node.js                            │  ← Runtime (JavaScript engine for server)
├─────────────────────────────────────┤
│  V8 Engine                          │  ← Core (from Chrome)
└─────────────────────────────────────┘
```

### The Car Analogy

| Technology | Analogy |
|------------|---------|
| **Node.js** | Car engine |
| **Express.js** | Sedan (minimal framework) |
| **Nest.js** | SUV (full-featured framework) |
| **Fastify** | Sports car (performance-focused) |

### What is Node.js?

**Before Node.js (pre-2009):**
- JavaScript only runs in browser
- Backend must use PHP/Python/Ruby

**After Node.js (2009+):**
- JavaScript runs on server
- Can build APIs, access databases, file system
- One language for frontend + backend

### Real Use Cases

**1. Real-time Applications**
```javascript
// Node.js + Socket.io (10 lines for chat!)
const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  socket.on('send-message', (message) => {
    socket.broadcast.emit('new-message', message);
  });
});
```

**2. Image Processing**
```javascript
// Node.js + Sharp
const sharp = require('sharp');

sharp('photo.jpg')
  .resize(300, 300)
  .toFile('thumbnail.jpg');
```

**3. API for Mobile Apps**
```
Mobile App (React Native - JavaScript)
     ↓
Backend API (Node.js - JavaScript)
     ↓
Database (MongoDB - JSON-like)

One team, one language!
```

---

## ⚡ Vite vs Vue

### The Cooking Analogy

| Technology | Analogy | Function |
|------------|---------|----------|
| **Vue** | Recipe | Framework for building UI |
| **Vite** | Stove | Build tool to "cook" your code |

### What Each Does

**Vue = UI Framework**
```vue
<!-- Vue handles HOW you build UI -->
<template>
  <div>{{ message }}</div>
</template>

<script setup>
const message = 'Hello Vue!'
</script>
```

**Vite = Build Tool**
```
Vite handles HOW your Vue code:
1. Compiles (.vue → .js)
2. Bundles (combines files)
3. Optimizes (minifies)
4. Serves (runs in browser)
```

### Why They Work Together

```
You want to cook rendang (Vue)
But you need a stove (Vite) to cook it

Rendang = Your Vue code
Stove = Vite that "cooks" Vue into a website

Without stove (Vite), rendang (Vue) can't be cooked
Without rendang (Vue), stove (Vite) has no purpose
```

### Build Tool Comparison

| Tool | Speed | Used By | Era |
|------|-------|---------|-----|
| **Vite** | ⚡ Very fast (0.5s) | Vue 3, React, Svelte | Modern (2021+) |
| **Webpack** | 🐢 Slow (5-10s) | Vue 2, older React | Legacy |
| **Turbopack** | ⚡ Fast | Next.js 13+ | New (2023+) |

### Development Workflow

```
You code in src/App.vue
     ↓
Vite (dev mode):
  - Compiles .vue → .js
  - Hot reload (auto refresh on save)
  - Serves at localhost:5173
     ↓
Browser displays website
     ↓
You edit code
     ↓
Vite auto-refreshes (0.1 seconds!)
```

---

## 🔀 Laravel vs Node.js

### Comparison Table

| Aspect | Laravel (PHP) | Node.js (Express/Nest) |
|--------|---------------|------------------------|
| **Language** | PHP | JavaScript |
| **Learning Curve** | Medium | Easy (if you know JS) |
| **Ecosystem** | Mature, complete | Huge but fragmented |
| **Database ORM** | Eloquent (excellent) | Prisma/TypeORM (good) |
| **Authentication** | Built-in (Breeze, Jetstream) | DIY (Passport.js) |
| **Real-time** | Needs setup (Echo) | Native (Socket.io) |
| **Deployment** | Moderate (needs PHP server) | Easy (Railway, Render, Vercel) |
| **Performance** | Good | Excellent (async by default) |
| **Job Market** | Strong (Indonesia) | Very strong (Global) |

### Choose Laravel If:

✅ You already know PHP
✅ Need complete auth system (login, register, password reset)
✅ Need admin panel (Laravel Nova, Filament)
✅ Project for Indonesian clients (many PHP hosting options)
✅ Want excellent documentation

**Good for:** E-commerce, CMS, booking systems, admin dashboards

### Choose Node.js If:

✅ Want one language (JavaScript) for frontend + backend
✅ Need real-time features (chat, notifications, live updates)
✅ Want free/cheap deployment (Vercel, Railway, Render)
✅ Learning modern tech stack (many startups use this)
✅ Personal/startup projects (high flexibility)

**Good for:** APIs for mobile apps, real-time chat, microservices, serverless

### Fullstack Architecture Options

**Option A: Decoupled (Recommended)**
```
Frontend (Vue): Vercel (FREE)
Backend (Laravel): Railway ($5/month)
Database: PlanetScale (FREE tier)

Total: ~$5/month
```

**Option B: All Node.js**
```
Frontend (Vue): Vercel (FREE)
Backend (Express + Prisma): Railway ($5/month)
Database: Supabase (FREE tier)

Total: ~$5/month
Benefit: One language (JavaScript)
```

**Option C: Laravel + Inertia.js**
```
Frontend + Backend: Railway ($5/month)
(Laravel handles routing, Vue renders UI)

Total: ~$5/month
Benefit: One deployment, no CORS issues
```

### JSON Clarification

**JSON ≠ JavaScript** (despite the name)

```json
// JSON is just a data format
{
  "name": "Yohanes",
  "age": 25
}
```

**All languages can create JSON:**

```php
// PHP
echo json_encode(['name' => 'Yohanes']);
```

```python
# Python
import json
print(json.dumps({'name': 'Yohanes'}))
```

```javascript
// JavaScript
console.log(JSON.stringify({name: 'Yohanes'}));
```

### Laravel + Vue Communication

```
┌─────────────────────────────────────┐
│  FRONTEND (Vue - JavaScript)        │
│  - UI display                       │
│  - User interaction                 │
│  - Runs in browser                  │
└─────────────┬───────────────────────┘
              │
              │ HTTP Request
              │ GET /api/trainers
              │
              ↓
┌─────────────────────────────────────┐
│  BACKEND (Laravel - PHP)            │
│  - Database queries                 │
│  - Business logic                   │
│  - Returns JSON                     │
│  - Runs on server                   │
└─────────────────────────────────────┘
```

**No Node.js needed!** Laravel (PHP) creates JSON, Vue (JavaScript in browser) consumes it.

---

## 📦 npm Ecosystem

### What is npm?

**npm = Package manager for JavaScript** (like Google Play Store for JavaScript)

| Platform | Package Manager | Language |
|----------|----------------|----------|
| Android | Google Play Store | Java/Kotlin |
| iOS | App Store | Swift |
| JavaScript | npm | JavaScript |
| Python | pip | Python |
| PHP | Composer | PHP |

### Why npm Can Install "Everything"?

**Because Node.js runs everywhere:**
- ✅ Server (backend APIs)
- ✅ Desktop (Electron - VS Code, Slack, Discord)
- ✅ Mobile (React Native)
- ✅ CLI tools (Firebase, Vercel, AWS)
- ✅ IoT devices
- ✅ Game engines

### npm Package Categories

**1. Frontend Frameworks**
```bash
npm install vue
npm install react
npm install svelte
```

**2. Backend Frameworks**
```bash
npm install express
npm install nestjs
```

**3. Build Tools**
```bash
npm install vite
npm install webpack
```

**4. CLI Tools**
```bash
npm install -g firebase-tools    # Google Firebase CLI
npm install -g vercel             # Vercel CLI
npm install -g @angular/cli       # Angular CLI
npm install -g typescript         # TypeScript compiler
```

**5. Desktop Apps**
```bash
npm install electron  # VS Code, Slack, Discord use this!
```

**6. Mobile Apps**
```bash
npm install react-native
```

**7. Utilities**
```bash
npm install axios      # HTTP client
npm install lodash     # Helper functions
npm install moment     # Date/time
```

### Global vs Local Install

| Command | Installs To | Use For | Example |
|---------|------------|---------|---------|
| `npm install vue` | Project folder (node_modules/) | Libraries for project | Vue, React, Express |
| `npm install -g firebase-tools` | System-wide | CLI tools | Firebase, Vercel, TypeScript |

**Analogy:**
- Local: Buy a book, put on your bedroom shelf (only you use it)
- Global: Install software (all users on computer can use it)

### Why Big Companies Use npm

**Google, Microsoft, Meta, AWS all distribute CLI tools via npm because:**

1. ✅ Cross-platform (Windows, Mac, Linux)
2. ✅ Easy distribution (`npm install`)
3. ✅ Auto-update (`npm update -g`)
4. ✅ Dependency management (npm handles 100+ dependencies automatically)
5. ✅ Developer-friendly (web developers already know npm)

### npm Statistics (2026)

```
Total packages: 3+ million
Weekly downloads: 30+ billion
Developers: 17+ million

Largest package registry in the world!
```

---

## ⚛️ React.js vs React Native

### Core Difference

| Technology | Target | Output |
|------------|--------|--------|
| **React.js** | Website (browser) | HTML/CSS/JS |
| **React Native** | Mobile app (Android/iOS) | Native app (.apk, .ipa) |

### Detailed Comparison

| Aspect | React.js | React Native |
|--------|----------|--------------|
| **Runs On** | Browser | Mobile (Android, iOS) |
| **UI Components** | `<div>`, `<button>`, `<input>` | `<View>`, `<Text>`, `<TouchableOpacity>` |
| **Styling** | CSS (or Tailwind) | StyleSheet (CSS-like) |
| **Hardware Access** | Limited (camera via WebRTC) | Full (camera, GPS, bluetooth, sensors) |
| **Installation** | Not needed (open in browser) | Must install from store |
| **Updates** | Instant (refresh browser) | Must update app |
| **Performance** | Good (browser-dependent) | Excellent (native) |

### Code Comparison

**React.js (Website):**
```jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <button onClick={() => alert('Clicked!')}>
        Click Me
      </button>
    </div>
  );
}
```

**React Native (Mobile):**
```jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => Alert.alert('Clicked!')}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
```

### When to Use Each

**Use React.js for:**
- ✅ Websites/web apps
- ✅ Need SEO (Google search)
- ✅ Access via browser (no install)
- ✅ Instant updates (no app store approval)
- ✅ Cross-platform (desktop, mobile browser)

**Examples:** Company profile, e-commerce website, dashboard, blog, SaaS

**Use React Native for:**
- ✅ Mobile apps (Android/iOS)
- ✅ Need hardware access (camera, GPS, bluetooth)
- ✅ Need offline mode
- ✅ Need push notifications
- ✅ High performance (games, AR/VR)

**Examples:** Social media app, e-commerce app, fitness tracker, chat app

### Mobile Development Comparison

| Framework | Language | Performance | Learning Curve | Code Reuse |
|-----------|----------|-------------|----------------|------------|
| **React Native** | JavaScript | 90% native | Easy (if know React) | 70-90% |
| **Flutter** | Dart | 95% native | Medium | 95% |
| **Native** | Kotlin/Swift | 100% native | Hard (2 languages) | 0% |

---

## 🎯 Quick Reference

### Development Workflow

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy (if using Vercel CLI)
vercel
```

### Common Commands

```bash
# Install dependencies
npm install

# Install specific package
npm install package-name

# Install global CLI tool
npm install -g tool-name

# Update dependencies
npm update

# Check outdated packages
npm outdated
```

### File Structure Best Practices

```
project/
├── src/
│   ├── components/     # Reusable UI pieces
│   ├── pages/          # Full page components
│   ├── router/         # Routing config
│   ├── assets/         # Images, fonts, styles
│   ├── stores/         # State management (Pinia)
│   ├── utils/          # Helper functions
│   └── App.vue
├── public/             # Static files (copied as-is)
├── dist/               # Build output (gitignored)
├── package.json
└── vite.config.js
```

### Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Test all routes (especially direct URL access)
- [ ] Push to GitHub
- [ ] Connect to Vercel/Netlify
- [ ] Configure custom domain (optional)
- [ ] Set up environment variables (if needed)
- [ ] Test production site thoroughly

---

## 💡 Key Takeaways

1. **Vue Router** enables multi-page experience in SPA without page reloads
2. **Build process** transforms source code into optimized production files
3. **Vercel/Netlify** offer free hosting for frontend projects with auto-deploy
4. **Node.js** is a runtime, not a framework (Express/Nest are frameworks)
5. **Vite** is a build tool, **Vue** is a UI framework (they work together)
6. **Laravel** (PHP) and **Node.js** (JavaScript) are both valid backend choices
7. **npm** is the largest package registry, used for more than just web development
8. **React.js** is for websites, **React Native** is for mobile apps

---

## 📚 Further Learning Resources

### Documentation
- Vue Router: `router.vuejs.org`
- Vite: `vitejs.dev`
- Vercel: `vercel.com/docs`
- Netlify: `docs.netlify.com`

### Video Tutorials
- Traversy Media (YouTube)
- The Net Ninja (YouTube)
- Fireship (YouTube)

### Practice Projects
1. Portfolio website with multiple pages
2. Blog with dynamic routing
3. E-commerce site with product pages
4. Dashboard with authentication

---

*Last updated: February 2026*
*Created for: Gym Yohanes Project*
