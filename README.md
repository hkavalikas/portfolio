# Portfolio Site

A modern, responsive portfolio website showcasing professional experience with a clean, dark theme design. Built with React and TypeScript featuring smooth navigation and mobile-responsive layouts.

## Features

- **Dark theme design** with professional aesthetics
- **Section-based navigation** with smooth scrolling
- **Responsive layout** that works on all devices
- **Work experience timeline** with tech stack highlights
- **Contact integration** with social media links
- **Mobile-optimized** with adaptive navigation
- **Fast loading** with Vite build system

## Technologies

- **Frontend**: React 19, TypeScript
- **Build**: Vite with Preact compatibility layer
- **Styling**: Modern CSS3 with grid layouts and animations
- **Optimization**: Terser minification, code splitting, tree shaking
- **Deployment**: GitHub Pages with custom domain support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hkavalikas/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000/`

### Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx      # Main hero section with introduction
│   ├── Work.tsx      # Work experience timeline
│   ├── Contact.tsx   # Contact information and links
│   └── LandingPage.tsx # Main component with navigation
├── App.tsx           # Application entry point
├── main.tsx         # React DOM mounting
└── index.css        # Global styles and responsive design

public/
└── profile.webp     # Profile image for social sharing
```

## Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages at your custom domain.

### Custom Domain

The project is configured for deployment to kavalikas.com with proper CNAME setup.

## Customization

### Personal Information

Update your details in the respective components:

- **Hero section**: `src/components/Hero.tsx`
- **Work experience**: `src/components/Work.tsx`
- **Contact details**: `src/components/Contact.tsx`

### Styling

- **Global styles**: `src/index.css`
- **Responsive breakpoints**: 1200px (tablet), 768px (mobile)
- **Navigation**: Hidden on screens smaller than 1600px
- **Color scheme**: Dark theme with green accents (#22c55e)

### Social Media & Meta Tags

- **Open Graph**: Update `index.html` meta tags
- **Profile image**: Replace `public/profile.webp`
- **Contact links**: Update URLs in `Contact.tsx`

## Performance Optimizations

- **Preact compatibility** layer for smaller bundle size
- **Code splitting** by vendor and component chunks
- **Tree shaking** to eliminate unused code
- **Terser minification** with console removal
- **Bundle analysis** with rollup-plugin-visualizer

## License

MIT