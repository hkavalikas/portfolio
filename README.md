# Portfolio Site

A modern, responsive portfolio website built with React and TypeScript, designed to showcase professional information with a clean, minimalist aesthetic.

## Features

- Clean, modern design with gradient background and glass morphism effects
- Responsive layout that works on all devices
- Social media links with Simple Icons integration
- Smooth animations and hover effects
- Fast loading with Vite build system
- Optimized for production deployment

## Technologies

- React 19
- TypeScript
- Vite
- Simple Icons
- CSS3 with modern features (backdrop-filter, animations)

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

The site will be available at `http://localhost:5173/`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

### Deploy to Custom Domain

The project is configured for deployment to kavalikas.com. Simply build and deploy the `dist` folder to your hosting provider.

## Customization

### Profile Information

Edit `src/components/LandingPage.tsx` to update:

- Name and title
- Profile image (`src/assets/profile.png`)
- Social media links

### Styling

- All styles are in `src/index.css`
- Background gradient colors
- Glass morphism effects and animations
- Social button styles and hover effects

## License

MIT
