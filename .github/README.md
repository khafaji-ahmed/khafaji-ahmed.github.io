# CI/CD Setup for Portfolio Website

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### 1. CI (`ci.yml`)
- **Trigger**: Push to `main`/`develop` branches, PRs to `main`
- **Purpose**: Run tests, linting, and builds
- **Matrix Testing**: Tests on Node.js 18.x and 20.x
- **Steps**:
  - Install dependencies
  - Run ESLint
  - Build application
  - TypeScript type checking
  - Upload build artifacts

### 2. Deploy (`deploy.yml`)
- **Trigger**: Push to `main` branch, manual dispatch
- **Purpose**: Deploy to GitHub Pages
- **Steps**:
  - Build Next.js application with static export
  - Deploy to GitHub Pages

### 3. Code Quality (`code-quality.yml`)
- **Trigger**: Push/PR to main branches, weekly schedule
- **Purpose**: Security scanning, linting, performance audits
- **Features**:
  - npm audit for security vulnerabilities
  - CodeQL analysis for code security
  - Lighthouse CI for performance monitoring
  - ESLint and TypeScript checks

### 4. Dependabot Auto-merge (`dependabot-auto-merge.yml`)
- **Trigger**: Dependabot PRs
- **Purpose**: Automatically merge safe dependency updates
- **Safety**: Only merges patch and minor version updates

## Configuration Files

- **`.github/dependabot.yml`**: Automated dependency updates
- **`lighthouserc.json`**: Lighthouse CI configuration for performance monitoring
- **`next.config.ts`**: Next.js configuration with static export enabled

## Setup Requirements

### GitHub Repository Settings

1. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Source: GitHub Actions
   - The site will be available at `https://username.github.io/repository-name`

2. **Enable Dependabot**:
   - Go to Settings > Security & analysis
   - Enable Dependabot alerts and security updates

3. **Branch Protection (Optional)**:
   - Go to Settings > Branches
   - Add protection rules for `main` branch
   - Require status checks to pass before merging

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Deployment

The website automatically deploys to GitHub Pages when code is pushed to the `main` branch. The deployment process:

1. Builds the Next.js application with static export
2. Uploads the static files to GitHub Pages
3. Makes the site available at your GitHub Pages URL

## Performance Monitoring

Lighthouse CI runs on every pull request to ensure performance standards:
- Performance: Minimum score 80%
- Accessibility: Minimum score 90% (enforced)
- Best Practices: Minimum score 80%
- SEO: Minimum score 80%

## Security

- Weekly security scans using npm audit
- CodeQL analysis for code security
- Dependabot for automated dependency updates
- Auto-merge for safe dependency updates 