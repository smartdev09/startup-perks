# Contributing to Startup Perks Directory

Thank you for your interest in contributing to the Startup Perks Directory! This document provides guidelines for contributing new perks and improvements to the project.

## Table of Contents

- [How to Contribute](#how-to-contribute)
- [Adding a New Perk](#adding-a-new-perk)
- [Quality Standards](#quality-standards)
- [Development Setup](#development-setup)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)

## How to Contribute

We welcome contributions in several forms:

1. **Adding new startup perks** - The primary way to contribute
2. **Updating existing perks** - Fixing outdated information
3. **Bug fixes** - Fixing issues in the codebase
4. **Feature improvements** - Enhancing functionality
5. **Documentation** - Improving docs and examples

## Adding a New Perk

### Prerequisites

- GitHub account
- Basic knowledge of Git and TypeScript/JSON syntax
- Verification that the perk is currently active and available

### Step-by-Step Process

1. **Fork the Repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**
   
   ```bash
   git clone https://github.com/YOUR_USERNAME/startup-perks.git
   cd startup-perks
   ```

3. **Create a Branch**
   
   ```bash
   git checkout -b add-perk-company-name
   ```

4. **Locate the Data File**
   
   Navigate to `packages/data/src/perks/startup-perks.ts`

5. **Add Your Perk**
   
   Add your perk to the `startupPerks` array following this format:

   ```typescript
   {
     id: "company-program-name",           // Unique kebab-case identifier
     company: "Company Name",              // Official company name
     name: "Program Name",                 // Official program name
     category: "cloud",                    // See categories below
     credits: "Up to $100,000 in credits", // Specific value if possible
     description: "Brief 1-2 sentence description of what this perk offers",
     eligibility: "Who can apply: early-stage startups, YC companies, etc.",
     applyUrl: "https://company.com/apply",
     featured: false,                      // Set to true only for exceptional perks
   }
   ```

6. **Available Categories**
   
   - `cloud` - Cloud infrastructure credits (AWS, GCP, Azure, etc.)
   - `ai` - AI and ML services (OpenAI, Anthropic, etc.)
   - `database` - Database services (MongoDB, Supabase, etc.)
   - `analytics` - Analytics and monitoring tools
   - `infrastructure` - DevOps, hosting, CDN services
   - `security` - Security and authentication services
   - `saas` - SaaS tools and services
   - `other` - Other categories

7. **Required Fields**
   
   All fields except `featured` are **required**:
   - `id` - Must be unique, kebab-case
   - `company` - Official company name
   - `name` - Program name
   - `category` - One of the categories above
   - `credits` - Value or description
   - `description` - Clear, concise description
   - `eligibility` - Who can apply
   - `applyUrl` - Direct application link

8. **Run Linter**
   
   ```bash
   npm install
   npm run lint
   ```

9. **Commit Your Changes**
   
   ```bash
   git add packages/data/src/perks/startup-perks.ts
   git commit -m "Add [Company Name] [Program Name] perk"
   ```

10. **Push to Your Fork**
    
    ```bash
    git push origin add-perk-company-name
    ```

11. **Create a Pull Request**
    
    - Go to the original repository
    - Click "New Pull Request"
    - Select your branch
    - Fill out the PR template
    - Submit for review

## Quality Standards

### Verification Requirements

Before submitting a perk, ensure:

- ✅ The program is **currently active** and accepting applications
- ✅ The application URL is **correct and working**
- ✅ The credit amount/value is **accurate**
- ✅ Eligibility requirements are **clearly stated**
- ✅ No duplicate entry exists
- ✅ The perk is relevant to **startups** (not general users)

### Information Accuracy

- Use **official sources** for all information
- Include **specific credit amounts** when available (avoid "various")
- State **clear eligibility requirements** (not just "startups")
- Provide **direct application URLs** (not homepage)
- Keep descriptions **concise but informative** (1-2 sentences)

### Formatting Standards

- Use **proper capitalization** for company and program names
- Use **kebab-case** for IDs (e.g., `cloudflare-for-startups`)
- Include **dollar signs** for credit amounts (e.g., `$100,000`)
- Write in **present tense** and **active voice**
- Follow existing **code style** (spaces, quotes, commas)

## Development Setup

If you want to run the project locally:

### Prerequisites

- Node.js 20.9.0 or higher
- npm 9.0.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/startup-perks.git
cd startup-perks

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Build

```bash
# Build for production
npm run build

# Run production build
npm start
```

## Code Style

This project uses **Biome** for linting and formatting.

### Running Linter

```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run format
```

### Key Conventions

- **File naming**: kebab-case (e.g., `perk-card.tsx`)
- **Component naming**: PascalCase (e.g., `PerkCard`)
- **Indentation**: Tabs (configured in Biome)
- **Quotes**: Double quotes for strings
- **Trailing commas**: Always include

## Pull Request Process

1. **Update Documentation**: If you're adding features, update relevant docs
2. **Test Your Changes**: Ensure the build passes and the site works
3. **Write Clear Commits**: Use descriptive commit messages
4. **Fill Out PR Template**: Provide all requested information
5. **Be Responsive**: Address review feedback promptly
6. **One PR Per Perk**: Submit separate PRs for multiple perks

### PR Template Checklist

When creating a PR, ensure:

- [ ] Added perk to `startup-perks.ts`
- [ ] Verified all URLs are correct and working
- [ ] Checked for duplicate entries
- [ ] Ran linter (`npm run lint`)
- [ ] Tested locally (if making code changes)
- [ ] Provided verification source/link
- [ ] Used clear commit message

## Questions or Issues?

- **General Questions**: Open a [GitHub Discussion](https://github.com/yourusername/startup-perks/discussions)
- **Bug Reports**: Open a [GitHub Issue](https://github.com/yourusername/startup-perks/issues)
- **Feature Requests**: Open a [GitHub Issue](https://github.com/yourusername/startup-perks/issues) with the "enhancement" label

## Code of Conduct

Be respectful, constructive, and professional in all interactions. We're building this resource together for the startup community.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for helping make the Startup Perks Directory more comprehensive! 🚀
