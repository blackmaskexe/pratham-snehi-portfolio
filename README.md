# 🚀 Pratham Snehi - Developer Portfolio

A modern, interactive portfolio website showcasing my journey as a full-stack developer, featuring live project demonstrations, AI-powered applications, and an immersive macOS desktop experience.

## ✨ Features

### 🖥️ Interactive Desktop Experience
- **MacOS Desktop Simulation**: Fully functional macOS-style interface with window management
- **iOS Simulator**: Interactive iPhone simulator showcasing mobile applications
- **Responsive Design**: Seamlessly adapts between desktop and mobile experiences

### 📱 Live Application Demos
- **Gains Chat**: AI-powered fitness coaching platform with personalized conversations
- **HabitMentor AI**: Smart habit tracking with AI-driven insights and coaching
- **Task/Project Manager**: Comprehensive project management tool with team collaboration

### 🎨 Modern UI/UX
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Dark/Light Mode**: Built-in theme switching with next-themes
- **Responsive Layout**: Mobile-first design that works on all devices
- **Glassmorphism Effects**: Modern UI elements with backdrop blur and transparency

### 📊 Dynamic Content
- **Interactive Timeline**: Personal journey from learning Python to building AI applications
- **Skills Showcase**: Animated skill bubbles with real tech stack icons
- **Certifications**: AWS Cloud Practitioner and Microsoft GitHub Foundations
- **Project Links**: Direct links to live product showcases

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.4.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework

### Animations & UI
- **Framer Motion 12.23.9** - Advanced animations and gestures
- **Lucide React** - Beautiful icon library
- **React Icons** - Extensive icon collection
- **Radix UI** - Accessible component primitives

### Development Tools
- **Turbopack** - Ultra-fast bundler for development
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/blackmaskexe/pratham-snehi-portfolio.git
   cd pratham-snehi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── about/                   # About section
│   ├── contact/                 # Contact form and info
│   ├── hero/                    # Landing hero section
│   ├── navbar/                  # Navigation components
│   ├── projects/                # Project showcase
│   │   ├── react-macos-desktop/ # MacOS simulation
│   │   │   ├── components/      # Desktop components
│   │   │   ├── apps/            # Application demos
│   │   │   └── hooks/           # Custom hooks
│   │   └── MobilePhoneSimulation.tsx
│   ├── skills/                  # Skills and certifications
│   └── timeline/                # Personal journey timeline
├── public/                      # Static assets
└── README.md                    # You are here
```

## 🎯 Key Components

### MacOS Desktop Simulation
- **Window Manager**: Draggable, resizable windows with proper z-indexing
- **iOS Simulator**: Realistic iPhone interface within macOS environment
- **Desktop Icons**: Interactive app icons with launch animations
- **Menu Bar**: Functional macOS-style menu with system controls

### Mobile Experience
- **Phone Simulation**: Realistic iPhone interface for mobile users
- **App Showcase**: Direct interaction with Gains Chat and HabitMentor AI
- **Touch Optimized**: Designed for mobile touch interactions

### Interactive Features
- **Smooth Scrolling**: Custom scroll behavior between sections
- **Hover Effects**: Rich interactions and micro-animations
- **Progressive Enhancement**: Works without JavaScript
- **Accessibility**: Screen reader friendly with proper ARIA labels

## 🌐 Live Projects

The portfolio showcases three main projects with live demos:

1. **[Gains Chat](https://gainschat.prathamsnehi.com)** - AI fitness coaching platform
2. **[HabitMentor AI](https://habitmentor.app)** - Smart habit tracking application
3. **[Task/Project Manager](https://projectmanager.prathamsnehi.com)** - Project management tool

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **SEO**: Structured data and meta tags for optimal discoverability

## 🎨 Design Philosophy

This portfolio embodies a **"Show, Don't Tell"** approach:
- Interactive demos instead of static screenshots
- Real applications instead of placeholder content
- Immersive experience instead of traditional layouts
- Performance-first development with smooth animations

## 📧 Contact

- **Website**: [prathamsnehi.com](https://prathamsnehi.com)
- **Email**: contact@prathamsnehi.com
- **LinkedIn**: [prathamsnehi](https://www.linkedin.com/in/prathamsnehi/)
- **GitHub**: [blackmaskexe](https://github.com/blackmaskexe)

## 📄 License

This project is personal portfolio code. Feel free to draw inspiration, but please don't copy it directly. Create something unique that represents your own journey!

## 🚀 Deployment

The easiest way to deploy this Next.js application:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms
- **Netlify**: Supports Next.js with automatic builds
- **Railway**: One-click deployment for full-stack apps
- **AWS/Google Cloud**: For custom hosting solutions

---

**Built with ❤️ by Pratham Snehi** | *Aspiring Software Engineer & AI Enthusiast*