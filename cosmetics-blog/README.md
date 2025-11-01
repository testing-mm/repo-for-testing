# Polskie Kosmetyki - Blog

Modern, responsive blog website built with Astro.js for a Polish cosmetics business.

## Features

- 🚀 **Astro.js** - Fast, modern static site generator
- 📝 **Markdown Blog** - Easy content management with Markdown files
- 📄 **Pagination** - Paginated blog listing (6 posts per page)
- 🎨 **Responsive Design** - Mobile-first, fully responsive layout
- 🔍 **SEO Optimized** - Meta tags, sitemap, RSS feed
- 🇵🇱 **Polish Language** - Content and UI in Polish
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎨 **Beautiful Design** - Cosmetics-themed gradient design

## Project Structure

```
cosmetics-blog/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable components
│   │   ├── BlogCard.astro
│   │   └── FormattedDate.astro
│   ├── content/         # Blog content
│   │   ├── blog/        # Markdown blog posts
│   │   └── config.ts    # Content collection schema
│   ├── layouts/         # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/           # Routes
│   │   ├── index.astro
│   │   ├── rss.xml.js
│   │   └── blog/
│   │       ├── [...page].astro  # Paginated blog list
│   │       └── [slug].astro     # Individual blog posts
│   └── styles/
│       └── global.css   # Global styles
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

## Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: 'Your Blog Post Title'
description: 'A brief description'
pubDate: 2024-11-01
author: 'Author Name'
tags: ['tag1', 'tag2']
heroImage: '/images/your-image.jpg'
---

Your blog content here...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## SEO Features

- Meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap generation
- RSS feed
- Canonical URLs
- Polish locale settings

## Customization

### Update Site Information

Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  // ...
});
```

### Modify Colors

Edit gradient colors in `src/styles/global.css` and component styles:
- Primary gradient: `#d4a5c3` to `#9b7fa8`

### Change Posts Per Page

Edit `src/pages/blog/[...page].astro`:
```javascript
return paginate(sortedPosts, { pageSize: 6 });
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and commercial use.

## Author

Created for a Polish cosmetics business.

## Support

For issues or questions, please open an issue in the repository.
