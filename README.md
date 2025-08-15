# Studio Legale Ferrini - Website

A professional, multilingual website for lawyer Luca Ferrini and his team, built with Astro v5.

## 🚀 Features

- **Astro v5** with static site generation
- **Multilingual support** (English & Italian) with centralized dictionaries
- **SEO optimized** with semantic HTML, meta tags, structured data, and hreflang
- **Responsive design** with Tailwind CSS
- **Performance focused** with optimized images and fast loading
- **Accessible** following WCAG 2.1 guidelines
- **Professional design** suitable for a law firm

## 🏗️ Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro    # Site navigation
│   └── Footer.astro    # Site footer
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout with SEO and meta tags
├── pages/              # Site pages
│   ├── index.html      # Language detection redirect
│   └── [lang]/         # Dynamic language routes
│       ├── index.astro         # Homepage
│       ├── team.astro          # Team overview
│       ├── team/[member].astro # Individual team member pages
│       ├── faq.astro           # FAQ page
│       ├── contact.astro       # Contact form
│       └── where-we-are.astro  # Office location
├── i18n/               # Internationalization
│   ├── index.ts        # i18n utilities
│   ├── en.ts          # English translations
│   └── it.ts          # Italian translations
└── content/            # Content collections (for future use)

public/
├── images/             # Static images
├── favicon.svg         # Site favicon
└── robots.txt         # SEO robots file
```

## 🛠️ Built With

- [Astro](https://astro.build/) - Web framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## 📱 Pages

### Generated Routes

The website generates the following routes for both languages (`/en/` and `/it/`):

- `/` - Language detection and redirect
- `/en/` and `/it/` - Homepage
- `/en/team` and `/it/team` - Team overview
- `/en/team/luca-ferrini` and `/it/team/luca-ferrini` - Luca Ferrini profile
- `/en/team/giordana-pasini` and `/it/team/giordana-pasini` - Giordana Pasini profile
- `/en/team/vanessa-maraldi` and `/it/team/vanessa-maraldi` - Vanessa Maraldi profile
- `/en/faq` and `/it/faq` - Frequently Asked Questions
- `/en/contact` and `/it/contact` - Contact form
- `/en/where-we-are` and `/it/where-we-are` - Office location

## 🎨 Design System

### Colors

- **Navy**: `#001F3F` - Primary brand color
- **Navy Light**: `#003366` - Secondary navy shade
- **Gold**: `#CFAE70` - Accent color
- **White**: `#FFFFFF` - Background
- **Gray shades**: Various for text and backgrounds

### Typography

- **Font Family**: Inter, system fonts fallback
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Responsive**: Scales appropriately on mobile

## 🌐 Internationalization

The website supports English and Italian through:

- **Centralized dictionaries** in `src/i18n/`
- **Dynamic route generation** with `[lang]` parameter
- **Automatic hreflang tags** for SEO
- **Language switcher** in navigation
- **Browser language detection** on homepage

## 📈 SEO Features

- **Semantic HTML** structure
- **Unique meta titles and descriptions** per page/language
- **Open Graph and Twitter Card** meta tags
- **Structured data** (JSON-LD) for LocalBusiness
- **Hreflang tags** for international SEO
- **Optimized images** with responsive formats
- **Fast loading** with static generation

## 🖼️ Images

Place team member photos in `public/images/`:

- `luca-ferrini.jpg` - Luca Ferrini photo
- `giordana-pasini.jpg` - Giordana Pasini photo  
- `vanessa-maraldi.jpg` - Vanessa Maraldi photo
- `og-image.jpg` - Social media sharing image

Images are automatically optimized by Astro's built-in image service.

## 📞 Contact Information

Update contact details in:
- `src/i18n/en.ts` and `src/i18n/it.ts` - For displayed text
- `src/layouts/Layout.astro` - For structured data
- `src/components/Footer.astro` - For footer contact info

## 🚀 Deployment

The site is configured for deployment to any static hosting service:

- Build command: `npm run build`
- Output directory: `dist/`
- Domain: `https://studiolegaleferrini.com/`

### Recommended Hosts

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## 📝 License

This project is proprietary to Studio Legale Ferrini.

## 🤝 Support

For technical support or modifications, contact the development team.
