# Dhyanesh Visakan — Personal Portfolio Website

A personal portfolio website for **Dhyanesh Visakan**, a Computer Science Engineering student at **SRM Institute of Science and Technology (SRMIST)**, Kattankulathur, Tamil Nadu, India.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and modern visual engineering aesthetics (dark neon gradients, particle constellation canvas, glassmorphism, responsive navigation, and accessible interactive dialogs).

---

## 🌟 Highlights & Key Features

- **Personal Branding**:
  - Name: Dhyanesh Visakan
  - Headline: *"Building Intelligent Solutions. Engineering the Future."*
  - Degree: B.Tech in Computer Science and Engineering, SRMIST KTR (CGPA: 8.15)
  - Verified Links: [LinkedIn](https://www.linkedin.com/in/dhyanesh-visakan-534a02271/) | [GitHub (@Codeminning)](https://github.com/Codeminning) | [EduTime Pro Live](https://edutime-pro.vercel.app/)
  - Editable placeholders for email, phone, and configurable parameters.

- **Interactive Visual Design**:
  - Deep black, charcoal, and navy surfaces with electric blue (`#00f0ff`) and violet (`#8b5cf6`) accents.
  - Interactive technical canvas with subtle particle nodes and constellation links that react to mouse pointer movement.
  - Dark / Light mode toggle with immediate `localStorage` persistence.
  - Glassmorphic card styling, glowing borders, and smooth transitions.
  - Reduced-motion accessibility overrides.

- **Featured Engineering Projects**:
  1. **Real-Time Pothole Detection & Municipal Budget System** (Python, YOLOv8, OpenCV, Folium) — Includes verified experimental benchmark metrics: `mAP@0.5: 0.80`, `mAP@0.5:0.95: 0.50`, `Best F1: 0.75 @ 0.442`.
  2. **Enterprise Document Intelligence RAG Chatbot** (FastAPI, React, LangChain, ChromaDB, Gemini).
  3. **WithLife — Smart Blood Bank Application** (JavaScript, Supabase, modern web APIs).
  4. **EduTime Pro — AI Study Planner** (React, Vite, Supabase, deployed live on Vercel: [edutime-pro.vercel.app](https://edutime-pro.vercel.app/)).
  5. **HostelHub — Student Community Marketplace** (Next.js, React, Node.js, Express, MongoDB).
  6. **AI-Powered Drug Interaction Checker** (Planned research concept with strict medical safety disclaimers).
  - Category filters: *All Projects*, *AI & Computer Vision*, *Generative AI & RAG*, *Full-Stack Systems*, *Web Applications*.
  - Interactive **Case Study & Details Modal** with architecture diagrams and telemetry.

- **Skills & Technologies**:
  - Organized across 6 categories: Programming Languages, Frontend, Backend, Databases & BaaS, AI/ML/CV, and Tools.
  - Live instant search filter across all technologies.
  - Objective badge chips (`Core`, `Proficient`, `Familiar`) without arbitrary percentages.

- **Education & Timeline**:
  - SRM Institute of Science and Technology (KTR Campus).
  - B.Tech CSE with **8.15 CGPA** badge.
  - 7 core subject modules highlighted (DSA, DBMS, OS, Computer Networks, Machine Learning, Computer Vision, Computer Architecture).

- **Verified Certifications & Leadership**:
  - Foundational C# with Microsoft (Score: 91.3%, Microsoft & freeCodeCamp).
  - Embedded Systems Workshop in association with IIT Madras (Feb 2025).
  - C Programming Masterclass (25.5-Hour Udemy).
  - Data Structures Mastery (Udemy).
  - Python Bronze Badge (HackerRank).
  - National Cadet Corps (NCC) cadet experience & leadership rank.
  - Institution of Engineers (India) student member.
  - Competitive Rifle-Shooting marksman record.

- **Full-Stack Contact Form**:
  - Front-end validation with real-time feedback.
  - Next.js App Router API endpoint (`/api/contact`) with sanitized server processing.
  - Loading spinner states and success/error feedback alerts.

- **Resume Download with Celebration Micro-Feedback**:
  - Authentic, verified starter PDF generated at `public/Dhyanesh_Visakan_Resume.pdf`.
  - Micro-confetti celebration feedback on download.
  - In-browser preview modal.

---

## 📁 Project Structure

```
├── public/
│   ├── Dhyanesh_Visakan_Resume.pdf  # Verified starter PDF resume
│   └── images/                      # SVG assets and thumbnails
│       ├── avatar.svg
│       ├── pothole-detection.svg
│       ├── rag-chatbot.svg
│       ├── withlife.svg
│       ├── edutime-pro.svg
│       ├── hostelhub.svg
│       └── drug-checker.svg
├── scripts/
│   ├── generate-resume.js           # Generates authentic PDF resume
│   └── generate-assets.js           # Generates project preview SVGs
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # Server-side contact form handler
│   │   ├── globals.css              # Custom styling, dark tokens, glows
│   │   ├── layout.tsx               # Root layout, SEO metadata, Open Graph
│   │   ├── not-found.tsx            # Custom 404 page
│   │   └── page.tsx                 # Main portfolio page assembly
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Leadership.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Projects.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── TechnicalBackground.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── portfolioData.ts         # Single source of truth for all content
│   └── types/
│       └── index.ts                 # TypeScript data contracts
├── next.config.ts                   # Next.js & Turbopack configuration
├── package.json
├── tsconfig.json
└── .env.example
```

---

## 🛠️ Local Development

### 1. Clone & Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Generate or Update Assets & Resume

To regenerate the PDF resume or SVG project thumbnails:

```bash
# Generate the starter resume PDF
node scripts/generate-resume.js

# Regenerate project visual assets
node scripts/generate-assets.js
```

### 4. Build for Production

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize Your Portfolio

All information is separated from the UI logic and stored in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts).

To update details:
1. **Bio, CGPA, Roles & Contact**: Edit `personalInfo` in `src/data/portfolioData.ts`.
2. **Add / Edit Projects**: Modify or add entries to `projectsData`.
3. **Skills**: Add or adjust items in `skillsData`.
4. **Education & Certifications**: Edit `educationData` and `certificationsData`.
5. **Resume**: Replace `public/Dhyanesh_Visakan_Resume.pdf` with your updated PDF file anytime, or customize `scripts/generate-resume.js`.

---

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "feat: complete production-ready personal portfolio for Dhyanesh Visakan"
git branch -M main
git remote add origin https://github.com/Codeminning/<your-portfolio-repo-name>.git
git push -u origin main
```

### Step 2: Import on Vercel

1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Build Command: `npm run build`
6. Click **Deploy**.

Your portfolio will be live at `https://<your-project>.vercel.app` in under 2 minutes.

---

## 📄 License & Attribution

Designed and engineered for **Dhyanesh Visakan**.  
Built with Next.js, React 19, TypeScript, and Tailwind CSS.
