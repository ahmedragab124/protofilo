<p align="center">
  <img src="./public/favicon.svg" alt="Portfolio Logo" width="100">
</p>

<h1 align="center">Ahmed Ragab — Frontend Portfolio</h1>

<h3 align="center">
CS &amp; AI Student · ICPC Mentor · Frontend Developer · Competitive Programmer
</h3>

<p align="center">
React 19 · Framer Motion · Tailwind CSS v4 · Vite 8 · Performance-First Architecture
</p>

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white)

</div>

---

## 📑 Table of Contents

- [About the Portfolio](#about-the-portfolio)
- [Sections & Features](#sections--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Performance Optimizations](#performance-optimizations)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Connect](#connect)

---

## 📖 About the Portfolio

A **premium personal portfolio** for **Ahmed Ragab Marzouk** — Computer Science & AI undergraduate at South Valley National University (SVNU), ICPC Community Mentor, DEPI React Track Graduate, and ECPC & ACPC Contest Finalist 2025.

Built with **React 19 + Vite 8**, this portfolio prioritizes:

- ⚡ **Blazing performance** — lazy-loaded sections, code-split vendor chunks, CSS-only aurora animations
- 🎨 **Premium aesthetics** — dark teal palette, glassmorphism, Framer Motion micro-interactions
- 📱 **Mobile-first responsive** — custom orbit navigation hub on mobile, fluid layouts on all screens
- 🔒 **Contact form** — validated with React Hook Form + Zod, production-ready

---

## ✨ Sections & Features

### 🦸 Hero Section
- Typewriter multi-phrase heading with blinking caret animation
- Spinning portrait card with 3D tilt hover effect
- CSS-only aurora glow orbs (GPU-composited — zero JS overhead)
- Floating tech badge chips with CSS keyframe animation
- Direct social links: **LinkedIn**, **GitHub**, **Instagram**
- One-click downloadable CV

### 👤 About Me
- Key competency checklist (DEPI, ICPC, ECPC & ACPC Finalist, CS & AI)
- 4-card highlights grid with hover elevation effects
- CTA buttons: **Hire Me** / **View Experience**

### 🛠 Technical Stack
- 4-category skills matrix: Frontend Engineering, Core CS & Algorithms, Architecture & Tools, Professional Competencies
- Skill pill chips with teal hover accent
- Badge labels: PRIMARY STACK · COMPETITIVE RANKED · PRODUCTION READY · DEPI CERTIFIED

### 💼 Projects Carousel
- Auto-playing infinite carousel with spring physics
- Active card scale-up with **Live Demo** & **Source Code** links
- Projects featured:
  - **Jawla (جولة)** — AI Tourism Platform (Google Gemini + Supabase)
  - **Portfolio V1** — HTML5 / CSS3 / JavaScript
  - **Portfolio V2** — Single-Page App with Typed.js

### 🧩 Services
- Service capability cards with icon badges

### 🌐 Experience — Orbit Timeline
- **Desktop**: 3D vertical curved arc orbit with animated dashed SVG path
- **Mobile**: Premium horizontal glassmorphic orbit hub with spring navigation
- **4 Career Stations:**
  | # | Role | Company |
  |---|---|---|
  | 01 | Frontend Developer | Instant App |
  | 02 | Front-End Developer Intern | NTI Tanta |
  | 03 | Frontend Developer Trainee | Codveda Tech |
  | 04 | Full-Stack Web Engineer | Freelance |

### 📬 Contact
- Dark luxury teal glassmorphic section
- React Hook Form + Zod validated contact form
- Contact info cards + Social Profiles (GitHub · LinkedIn · Instagram)

### 🔝 UX Extras
- Animated loading screen with progress bar
- Scroll-to-top button
- Sticky navbar with section highlighting

---

## 🚀 Tech Stack

| Category | Technologies |
|---|---|
| **Frontend** | React 19, Vite 8, Tailwind CSS v4 |
| **Animation** | Framer Motion 13 |
| **Forms** | React Hook Form 7, Zod 4 |
| **Icons** | React Icons (FA6) |
| **Routing** | React Router v7 / v8 |
| **HTTP** | Axios |
| **Performance** | React.lazy, Suspense, manualChunks, CSS animations |
| **Build** | Rolldown (OXC minifier), es2020 target |

---

## 📂 Project Structure

```text
protofilo/
│
├── public/
│   ├── favicon.svg
│   ├── Ahmed_Ragab_CV.pdf              ← Downloadable CV
│   ├── jawla-cover.png
│   ├── first-portfolio-cover.png
│   └── second-portfolio-cover.png
│
├── src/
│   ├── App.jsx                         ← App root
│   ├── App.css                         ← Global styles + CSS keyframe animations
│   │
│   ├── page/
│   │   ├── Lodingpage.jsx              ← Animated loading screen
│   │   └── Landingpage.jsx             ← Lazy-loaded page shell (React.lazy)
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx                    ← Aurora glows, typewriter, 3D portrait
│   │   ├── Aboutme.jsx
│   │   ├── Projects.jsx                ← Infinite spring carousel
│   │   ├── Services.jsx
│   │   ├── Experience.jsx              ← Orbit timeline container
│   │   ├── Contact.jsx                 ← Dark luxury contact section
│   │   └── Footer.jsx
│   │
│   └── componant/
│       ├── common/
│       │   └── ScrollToTop.jsx
│       ├── contact/
│       │   ├── ContactForm.jsx         ← React Hook Form + Zod
│       │   └── ContactInfoCard.jsx     ← Social profiles
│       ├── experience/
│       │   ├── OrbitTimeline.jsx       ← Desktop 3D arc + Mobile hub
│       │   ├── ExperienceDetailCard.jsx
│       │   └── experienceData.js
│       ├── projects/
│       │   ├── ProjectCard.jsx         ← memo() optimized
│       │   ├── ProjectHeader.jsx
│       │   ├── ProjectPagination.jsx
│       │   └── projectData.js
│       └── skills/
│           └── TechStack.jsx
│
├── vite.config.js                      ← Code splitting + OXC minifier
├── package.json
└── README.md
```

---

## ⚡ Performance Optimizations

| Optimization | What it Does |
|---|---|
| **React.lazy + Suspense** on all below-fold sections | Smaller initial JS bundle, faster FCP |
| **manualChunks** (react, framer-motion, icons) | Better long-term browser caching |
| **CSS-only aurora animations** (replaced 3 Framer infinite loops) | Saves GPU JS thread, smooth 60fps |
| **`memo()`** on `TypewriterHeading` & `ProjectCard` | Prevents unnecessary re-renders |
| **`will-change: transform`** on animated elements | Promotes to GPU composited layer |
| **`loading="lazy"` + `decoding="async"`** on all below-fold images | Non-blocking image loads |
| **`fetchPriority="high"`** on hero portrait | LCP image prioritized by browser |
| **`viewport={{ once: true }}`** on all whileInView animations | Animations run only once |
| **OXC minifier + es2020 target** | Smaller, faster production bundle |

---

## 🛠 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ahmedragab124/portfolio.git
cd portfolio/protofilo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel**.

To deploy your own fork:

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy ✅

---

## 🔗 Connect

| Platform | Link |
|---|---|
| 🐙 **GitHub** | [github.com/ahmedragab124](https://github.com/ahmedragab124) |
| 💼 **LinkedIn** | [linkedin.com/in/ahmed-ragab-9a6680284](https://www.linkedin.com/in/ahmed-ragab-9a6680284) |
| 📸 **Instagram** | [instagram.com/_abo__ragab](https://www.instagram.com/_abo__ragab/) |

---

<p align="center">
  <strong>Built with ❤️ by Ahmed Ragab Marzouk</strong><br/>
  <em>CS &amp; AI Student · ICPC Mentor · DEPI React Graduate · ECPC &amp; ACPC Finalist 2025</em>
</p>
