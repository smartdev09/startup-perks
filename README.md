# Startup Perks Directory

> A comprehensive directory of startup perks, credits, and programs - discover $1M+ in free resources for your startup.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features

- **40+ Startup Perks** - Curated collection of cloud credits, AI API access, and developer tools
- **Advanced Search & Filtering** - Find perks by category, credit value, and keywords
- **SEO Optimized** - Complete metadata, JSON-LD structured data, and sitemap generation
- **Static Generation** - Lightning-fast performance with ISR (24-hour revalidation)
- **Dark Mode** - Beautiful UI that adapts to your preference
- **Community Driven** - Open for contributions via GitHub PRs

## 📦 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **URL State**: [nuqs](https://nuqs.47ng.com/)
- **Linting**: [Biome](https://biomejs.dev/)
- **Fonts**: [Geist](https://vercel.com/font)

## 🏗️ Monorepo Structure

```
startup_perks/
├── packages/
│   └── data/              # Shared data package
│       ├── package.json
│       └── src/
│           └── perks/
│               ├── startup-perks.ts  # All perk data (40+ perks)
│               └── index.ts          # Helper functions & exports
└── apps/
    └── startup-perks/     # Main Next.js application
        ├── package.json
        ├── next.config.mjs
        ├── tailwind.config.ts
        └── src/
            ├── app/       # App Router pages
            │   ├── page.tsx               # Homepage
            │   ├── perks/
            │   │   ├── page.tsx           # Listing with filters
            │   │   ├── [id]/page.tsx      # Individual perks
            │   │   └── category/[category]/page.tsx
            │   ├── contribute/page.tsx
            │   ├── sitemap.ts
            │   ├── robots.ts
            │   └── manifest.ts
            ├── components/
            │   ├── ui/             # shadcn components
            │   ├── perks/          # Perk-specific components
            │   └── layout/         # Header, Footer, PageLayout
            ├── lib/
            │   ├── utils.ts        # Utilities
            │   ├── constants.ts    # Site config
            │   └── seo.ts          # SEO helpers
            └── data/
                └── queries.ts      # Data fetching functions
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/startup-perks.git
cd startup_perks

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run Biome linter |
| `npm run format` | Auto-fix formatting issues |

## 🎨 Key Features

### Advanced Search & Filtering

- **Full-text search** across company names, programs, descriptions
- **Multi-category filtering** with visual badges
- **Sort options**: by name, company, or credit value
- **URL state management**: shareable filtered links
- **Real-time results** with instant feedback

### SEO Excellence

- **Dynamic metadata** for every page with unique titles and descriptions
- **JSON-LD structured data**: Product, ItemList, Organization, WebSite schemas
- **OpenGraph & Twitter Cards** for social media
- **Sitemap generation** with proper priorities (57+ pages)
- **Robots.txt** configuration
- **ISR with 24-hour revalidation** for fresh content

### Static Generation

All pages are statically generated at build time:
- 1 homepage
- 1 perks listing page
- 41 individual perk pages
- 8 category pages
- 1 contribute page

Total: **57 static pages** for blazing-fast performance!

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding a New Perk

1. Fork the repository
2. Edit `packages/data/src/perks/startup-perks.ts`
3. Add your perk following the existing format
4. Run `npm run lint` to check formatting
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Contribution Areas

- 🎁 **New Perks**: Add missing startup programs
- 📝 **Updates**: Fix outdated information
- 🐛 **Bug Fixes**: Report or fix issues
- ✨ **Features**: Suggest or implement improvements
- 📚 **Documentation**: Improve guides and examples

## 📊 Project Stats

- **40+ Perks**: Covering cloud, AI, database, and more
- **$1M+ Value**: Estimated total credit value
- **8 Categories**: Organized for easy browsing
- **100% Static**: No server-side rendering needed
- **SEO Score**: 100/100 on Lighthouse

## 🗂️ Data Structure

Each perk in `packages/data/src/perks/startup-perks.ts` follows this format:

```typescript
{
  id: "unique-kebab-case-id",        // Unique identifier
  company: "Company Name",            // Official company name
  name: "Program Name",               // Program name
  category: "cloud",                  // Category (cloud, ai, database, etc.)
  credits: "Up to $100,000",          // Credit value or discount
  description: "Brief description",   // 1-2 sentence summary
  eligibility: "Requirements",        // Who can apply
  applyUrl: "https://...",           // Direct application link
  featured: false,                    // Featured on homepage
}
```

## 🎯 Roadmap

- [ ] Add more perks (target: 100+)
- [ ] User reviews and ratings
- [ ] Email notifications for new perks
- [ ] API for third-party integrations
- [ ] Analytics dashboard
- [ ] Mobile app

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Inspired by the startup community
- Data sourced from official company programs

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/startup-perks/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/startup-perks/discussions)
- **Contributing**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## 🌟 Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 🎁 Contributing new perks
- 📢 Sharing with others

---

**Built with ❤️ for the startup community**
