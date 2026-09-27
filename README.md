<p align="center">
  <img src="./public/favicon.svg" alt="Ahmed Ragab Portfolio" width="90">
</p>

<h1 align="center">Ahmed Ragab — Full Stack & Frontend Portfolio</h1>

<h3 align="center">
CS & AI Student · ICPC Mentor · DEPI React Graduate · ECPC & ACPC Finalist 2025
</h3>

<p align="center">
Qena, Egypt · Available for Hiring · Built with React 19, Supabase & Tailwind CSS v4
</p>

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Auth-3FCF8E?logo=supabase&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?logo=framer&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)

</div>

---

## 📑 Table of Contents

- [About](#-about)
- [Key Features & Highlights](#-key-features--highlights)
- [Live Preview & Socials](#-live-preview--socials)
- [Sections Overview](#-sections-overview)
- [Admin Dashboard & Content Management](#-admin-dashboard--content-management)
- [3D Circular Carousel & Interactive Motion](#-3d-circular-carousel--interactive-motion)
- [Experience Timeline](#-experience-timeline)
- [Services & Expertise](#-services--expertise)
- [Projects Showcased](#-projects-showcased)
- [Skills Matrix](#-skills-matrix)
- [Clean Architecture & Project Structure](#-clean-architecture--project-structure)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Contact](#-contact)

---

## 📖 About

A **production-ready full stack portfolio** for **Ahmed Ragab Marzouk** — a Computer Science & Artificial Intelligence undergraduate at **Faculty of Computers & AI, South Valley National University (SVNU)**, Qena, Egypt (2023–2028).

Key identities reflected in this portfolio:

- 🎓 **CS & AI Undergrad** at SVNU — 2nd Year (Expected graduation 2028)
- 🚀 **DEPI React Frontend Track Graduate** — Digital Egypt Pioneers Initiative
- 🏆 **ACPC & ECPC Contest Finalist 2025** — ICPC Official Contests
- 🧠 **ICPC SVNU Community Mentor** — Algorithmic Coaching & Leadership
- 💻 **Full Stack Developer** — React 19, Supabase (Database & Auth), Tailwind CSS v4, Framer Motion

---

## ✨ Key Features & Highlights

- ⚡ **Supabase Backend Service Layer**: Full integration with Supabase Postgres Database and Supabase Auth.
- 🔐 **Protected Admin Management Portal (`/admin`)**: Real-time CRUD operations for Projects, Experiences, Services, and Contact Inbox messages.
- 🎡 **3D Circular Wheel Carousel**: Custom 3D perspective (`[perspective:1200px]`) and dynamic Y-axis rotation (`rotateY`) for projects with 0ms seamless infinite loop.
- 📐 **Clean Architecture & Clean Code**: Modular folder structure (`components/`, `data/`, `hooks/`, `layouts/`, `pages/`, `services/`) with **zero component exceeding 120 lines of code**.
- 💫 **Interactive Orbit Timeline**: Dynamic 3D circular arc selector for viewing detailed career stations.
- 📝 **Validated Contact System**: React Hook Form + Zod schema validation with automatic Supabase message storage.

---

## 🌐 Live Preview & Socials

| Platform     | Link                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| 🐙 GitHub    | [github.com/ahmedragab124](https://github.com/ahmedragab124)                               |
| 💼 LinkedIn  | [linkedin.com/in/ahmed-ragab-9a6680284](https://www.linkedin.com/in/ahmed-ragab-9a6680284) |
| 📸 Instagram | [instagram.com/\_abo\_\_ragab](https://www.instagram.com/_abo__ragab/)                     |

---

## 🗂 Sections Overview

| #   | Section                              | Route / Anchor | Description                                        |
| --- | ------------------------------------ | -------------- | -------------------------------------------------- |
| 1   | Hero — Typewriter, Portrait, Socials | `#` (top)      | Animated introduction & hero summary               |
| 2   | About Me — Bio, Highlights, CTAs     | `#about`       | Education background & competitive achievements    |
| 3   | Technical Stack — Skills Matrix      | `#skills`      | Classified core competencies & tools               |
| 4   | Projects — 3D Circular Coverflow     | `#work`        | Interactive 3D perspective portfolio slider        |
| 5   | Services & Expertise                 | `#services`    | Engineering services & competitive coaching        |
| 6   | Experience — Orbit Timeline          | `#experience`  | 3D circular career stations & achievements         |
| 7   | Contact — Form + Info                | `#contact`     | Validated inbox submission + direct channels       |
| 8   | Admin Dashboard                      | `/admin`       | Full CRUD admin dashboard protected by Supabase    |

---

## 🔐 Admin Dashboard & Content Management

The portfolio includes an **integrated Admin Dashboard** accessible at `/admin` or `#admin`.

### Features:
- **Authentication**: Protected via Supabase Auth (`supabase.auth.signInWithPassword`).
- **Overview Metrics**: Live counters for total active projects, experiences, services, and inbox messages.
- **Projects CRUD**: Add, edit, or delete featured projects with image URLs, demo links, and tags.
- **Experiences CRUD**: Manage career stations, bullet points, company details, and technologies.
- **Services CRUD**: Edit service titles, descriptions, and icon mappings.
- **Inbox Reader**: View and manage incoming user messages with deletion & refresh capabilities.

---

## 🎡 3D Circular Carousel & Interactive Motion

The **Projects Section (`#work`)** features a custom-engineered 3D Coverflow slider:
- **3D Perspective**: Built using CSS `perspective: 1200px` and `transformStyle: preserve-3d`.
- **Dynamic Rotation**: Center card is flat (`rotateY: 0deg`), adjacent cards rotate inward (`rotateY: ±22deg` / `±36deg`) with depth scaling (`scale`) and fading (`opacity`).
- **Seamless Infinite Loop**: Utilizes a 5-set cloned array with `0ms` instant resets to allow infinite continuous scrolling forward or backward without visual jumps.

---

## 🌐 Experience Timeline

| ID     | Role                                | Organization                             | Period              |
| ------ | ----------------------------------- | ---------------------------------------- | ------------------- |
| **01** | Competitive Programming Mentor      | ICPC SVNU Community · Qena, Egypt        | 2023 – Present      |
| **02** | React Frontend Developer Specialist | Digital Egypt Pioneers Initiative (DEPI) | Fellowship Graduate |
| **03** | Competitive Programming Competitor  | ICPC Contest Circuit (ACPC & ECPC)       | 2025                |
| **04** | Computer Science & AI Undergrad     | Faculty of Computers & AI — SVNU         | 2023 – 2028         |

---

## 🧩 Services & Expertise

| #      | Service                          | Description                                                               |
| ------ | -------------------------------- | ------------------------------------------------------------------------- |
| **01** | Algorithms & Problem Solving     | C++, OOP, Data Structures, Algorithmic Thinking — ACPC & ECPC Finalist    |
| **02** | Frontend React Development       | React 19, Vite, Tailwind CSS — clean, scalable, high-performance web apps |
| **03** | Competitive Programming Coaching | Mentoring newcomers at ICPC SVNU Community in algorithms & contest prep   |
| **04** | Responsive Web Engineering       | Mobile-first, cross-device fluid websites with optimized UI/UX            |

---

## 💼 Projects Showcased

### 01 — Jawla (جولة) · AI Tourism Platform

> Category: `AI TOURISM PLATFORM`

An Egyptian tourism platform transforming how travelers experience Egypt. Features Google Gemini AI trip planning, unexplored hidden gems across 27 governorates, certified Egyptologist tour guides marketplace, Supabase, React Hook Form, and Zod.

- **Tags:** `React 18` `Supabase` `Google Gemini AI` `Tailwind CSS` `React Hook Form` `Zod`
- **Live Demo:** [jawla-tuor2.vercel.app](https://jawla-tuor2.vercel.app/)
- **Source:** [github.com/ahmedragab124/Jawla2](https://github.com/ahmedragab124/Jawla2)

---

### 02 — Personal Portfolio V1

> Category: `PORTFOLIO / UI DESIGN`

موقع شخصي احترافي يضم أقسام About Me, Education, Skills, Services, Projects, و Contact لبناء سيرة ذاتية إلكترونية متجاوبة باستخدام HTML5, CSS3, و JavaScript.

- **Tags:** `HTML5` `CSS3` `JavaScript` `Font Awesome` `Responsive Design`
- **Live Demo:** [second-project-gilt-seven.vercel.app](https://second-project-gilt-seven.vercel.app/)
- **Source:** [github.com/ahmedragab124/frist-protofilo](https://github.com/ahmedragab124/frist-protofilo)

---

### 03 — Responsive Portfolio V2

> Category: `SINGLE-PAGE PORTFOLIO`

موقع بورتفوليو تفاعلي مصمم كصفحة واحدة (Single Page App) يحتوي على Hero Section, Resume, Testimonials, شريط تنقل جانبي وتأثيرات Typed.js التفاعلية.

- **Tags:** `HTML5` `CSS3` `JavaScript` `jQuery` `Typed.js` `Single Page App`
- **Live Demo:** [github.com/ahmedragab124/second-protofilo](https://github.com/ahmedragab124/second-protofilo)
- **Source:** [github.com/ahmedragab124/second-protofilo](https://github.com/ahmedragab124/second-protofilo)

---

## 🛠 Skills Matrix

### Frontend Engineering · `PRIMARY STACK`

`React.js (React 19)` `JavaScript (ES6+)` `Tailwind CSS` `Vite & Build Tools` `Framer Motion` `Responsive Web Design` `HTML5 & Semantic UI`

### Core CS & Algorithms · `COMPETITIVE RANKED`

`C++ Programming` `Object-Oriented Programming (OOP)` `Data Structures & Algorithms` `Competitive Programming (ECPC Finalist)` `Problem Solving` `Analytical Thinking`

### Architecture & Tools · `PRODUCTION READY`

`RESTful API Integration` `Supabase Database & Auth` `Git & GitHub Version Control` `React Hook Form & Zod` `State Management` `Clean Architecture`

---

## 📂 Clean Architecture & Project Structure

```text
protofilo/
│
├── public/
│   ├── favicon.svg
│   ├── Ahmed_Ragab_CV.pdf                     ← Downloadable CV
│   ├── jawla-cover.png                        ← Project 01 cover
│   ├── first-portfolio-cover.png              ← Project 02 cover
│   └── second-portfolio-cover.png             ← Project 03 cover
│
├── src/
│   ├── App.jsx                                ← App root & Hash/Path routing
│   ├── App.css                                ← Custom CSS & keyframe animations
│   ├── index.css
│   │
│   ├── pages/                                 ← Application views
│   │   ├── Landingpage.jsx                    ← Main portfolio shell
│   │   ├── Lodingpage.jsx                     ← Loading screen + progress indicator
│   │   └── AdminDashboard.jsx                 ← Protected Admin Portal (< 100 lines)
│   │
│   ├── layouts/                               ← Section layout blocks
│   │   ├── Navbar.jsx                         ← Sticky glassmorphic navbar
│   │   ├── Hero.jsx                           ← Hero section with portrait & socials
│   │   ├── Aboutme.jsx                        ← Bio & highlights grid
│   │   ├── Projects.jsx                       ← 3D circular Coverflow carousel section
│   │   ├── Services.jsx                       ← Services grid section
│   │   ├── Experience.jsx                     ← Orbit timeline section
│   │   ├── Contact.jsx                        ← Validated contact section
│   │   └── Footer.jsx                         ← Footer branding & social links
│   │
│   ├── components/                            ← Pure presentational components (< 120 lines)
│   │   ├── about/                             ← AboutCompetencies & AboutHighlights
│   │   ├── admin/                             ← Admin sub-components & modals
│   │   ├── common/                            ← ScrollToTop button
│   │   ├── contact/                           ← ContactForm & ContactInfoCard
│   │   ├── experience/                        ← OrbitTimeline & ExperienceDetailCard
│   │   ├── hero/                              ← Hero sub-components & Typewriter
│   │   ├── loader/                            ← LoaderContent
│   │   ├── projects/                          ← ProjectCard, ProjectTrack, ProjectHeader
│   │   ├── services/                          ← ServiceCard
│   │   └── skills/                            ← SkillCategoryCard & TechStack
│   │
│   ├── data/                                  ← Centralized domain fallback models
│   │   ├── projectData.js
│   │   ├── experienceData.js
│   │   ├── servicesData.js
│   │   └── skillsData.js
│   │
│   ├── hooks/                                 ← Custom React hooks
│   │   ├── useAdminData.js                    ← Supabase state & data synchronization
│   │   └── useAdminModal.js                   ← Admin form modal state management
│   │
│   ├── services/                              ← API service layer
│   │   └── api/                               ← Modular API calls (projects, experiences, etc.)
│   │
│   └── lib/                                   ← Library configuration
│       └── supabaseClient.js                  ← Supabase client instance & barrel exports
│
├── .env.example                               ← Environment variables template
├── supabase-schema.sql                        ← Database tables SQL schema
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Tech Stack

| Category            | Package               | Version |
| ------------------- | --------------------- | ------- |
| **UI Library**      | `react`               | 19.2.8  |
| **Backend / DB**    | `@supabase/supabase-js` | 2.117.2 |
| **Build Tool**      | `vite`                | 8.3.0   |
| **Styling**         | `tailwindcss`         | 4.3.3   |
| **Animation**       | `framer-motion`       | 13.4.4  |
| **Form Management** | `react-hook-form`     | 7.88.0  |
| **Validation**      | `zod`                 | 4.6.5   |
| **Icons**           | `react-icons`         | 5.7.0   |
| **Routing**         | `react-router-dom`    | 7.18.4  |

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

### 3. Environment Setup

Create a `.env` file in the root of `protofilo`:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

*(Note: If Supabase variables are omitted, the application automatically falls back to local static data in `src/data/`.)*

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

---

## 📬 Contact

| Method       | Details                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------ |
| 📧 Email     | ahmedfgytubfs@gmail.com                                                                    |
| 📞 WhatsApp  | [+20 101 007 6017](https://wa.me/201010076017)                                             |
| 📍 Location  | Qena, Egypt                                                                                |
| 🐙 GitHub    | [github.com/ahmedragab124](https://github.com/ahmedragab124)                               |
| 💼 LinkedIn  | [linkedin.com/in/ahmed-ragab-9a6680284](https://www.linkedin.com/in/ahmed-ragab-9a6680284) |
| 📸 Instagram | [instagram.com/\_abo\_\_ragab](https://www.instagram.com/_abo__ragab/)                     |

---

<p align="center">
  <strong>© 2026 Ahmed Ragab • All Rights Reserved</strong><br/>
  <em>Designed & Built with React 19, Supabase & Tailwind CSS</em>
</p>
