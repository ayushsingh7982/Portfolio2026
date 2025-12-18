# 🚀 Ayush Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features a stunning glassmorphism design with neon accents, interactive animations, and premium user experience.

![Portfolio Preview](https://ayushsingh-portfolio.vercel.app/og-image.jpg)

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Design** - Modern glass-like effects with backdrop blur
- **Neon Accent Colors** - Vibrant cyan, purple, and green highlights
- **Dark Theme** - Elegant dark mode with theme toggle
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Smooth Animations** - Framer Motion-powered transitions and effects

### 🛠️ Technical Features
- **Interactive Fluid Cursor** - WebGL-powered liquid cursor effect
- **Smooth Scrolling** - Seamless navigation between sections
- **Loading Screen** - Engaging animated loading experience
- **Error Boundary** - Graceful error handling and recovery
- **Performance Monitoring** - Core Web Vitals tracking
- **SEO Optimized** - Meta tags, structured data, and sitemap

### 📱 User Experience
- **Sticky Navigation** - Always accessible navigation with active section highlighting
- **Scroll Progress** - Visual progress indicator
- **Back to Top** - Quick navigation to top of page
- **Contact Form** - Functional contact form with Formspree integration
- **Resume Modal** - Embedded PDF resume viewer
- **Testimonials** - Client feedback carousel

### 🔧 Developer Experience
- **TypeScript** - Full type safety and better development experience
- **ESLint & Prettier** - Code quality and formatting
- **Vite** - Lightning-fast development and build
- **Component Architecture** - Modular and reusable components
- **Custom Hooks** - Reusable logic for performance and UI state

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayushsingh7982/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
# or
bun run build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
# or
bun run preview
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

### UI Components
- **Radix UI** - Headless UI primitives
- **shadcn/ui** - Re-usable component library
- **Class Variance Authority** - Component variant management

### Development Tools
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Performance & Analytics
- **Google Analytics** - User analytics
- **Web Vitals** - Performance monitoring
- **Intersection Observer** - Lazy loading and scroll effects

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Project portfolio
│   ├── Contact.tsx     # Contact form
│   ├── Navigation.tsx  # Main navigation
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── assets/             # Static assets
└── types/              # TypeScript type definitions

public/
├── favicon.ico         # Site favicon
├── robots.txt          # SEO robots file
├── sitemap.xml         # SEO sitemap
└── ...
```

## 🎨 Customization

### Colors & Theme
Edit `src/index.css` to customize the color scheme:

```css
:root {
  --neon-cyan: 180 100% 50%;
  --neon-purple: 270 100% 70%;
  --neon-green: 120 100% 60%;
  /* Add your custom colors */
}
```

### Content
Update personal information in:
- `src/components/Hero.tsx` - Name, title, and intro
- `src/components/About.tsx` - Personal story and facts
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Project showcase
- `src/components/Skills.tsx` - Technical skills

### SEO & Meta
Update SEO information in:
- `index.html` - Basic meta tags
- `src/components/SEO.tsx` - Dynamic SEO component

## 📊 Performance

This portfolio is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Lazy loading and WebP support
- **Caching**: Proper cache headers and service worker ready

## 🔒 Security

- **Content Security Policy** ready
- **HTTPS** enforced
- **No sensitive data** in client-side code
- **Secure headers** configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the icon library
- **Vercel** - For hosting and deployment
- **React Team** - For the amazing framework

## 📞 Contact

**Ayush Singh**
- 🌐 Website: [ayushsingh-portfolio.vercel.app](https://ayushsingh-portfolio.vercel.app)
- 📧 Email: singhayush8376@gmail.com
- 💼 LinkedIn: [linkedin.com/in/ayushsingh7982](https://linkedin.com/in/ayushsingh7982)
- 🐙 GitHub: [github.com/ayushsingh7982](https://github.com/ayushsingh7982)

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by [Ayush Singh](https://github.com/ayushsingh7982)

