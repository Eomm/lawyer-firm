# GitHub Pages Deployment Setup

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` or `wip` branches, or when you manually trigger the workflow.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The deployment will use the workflow in `.github/workflows/deploy.yml`

### 2. Repository Settings

The workflow will automatically:

- Install dependencies
- Run linting checks
- Run TypeScript checks
- Build the Astro site
- Deploy to GitHub Pages

### 3. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `site` URL in `astro.config.mjs`

### 4. Triggering Deployments

The deployment will trigger automatically when:

- You push to the `main` branch
- You push to the `wip` branch
- You manually trigger it from the Actions tab

### 5. Monitoring Deployments

- Check the **Actions** tab in your repository to monitor deployment status
- View your deployed site at: `https://[username].github.io/[repository-name]`

## Environment Variables

The build process automatically configures:

- `GITHUB_ACTIONS=true` - Detected during GitHub Actions
- Site URL is automatically set for GitHub Pages
- Base path is set to the repository name

## Troubleshooting

- Ensure GitHub Pages is enabled in repository settings
- Check that the workflow has the necessary permissions
- Review the Actions logs for any build errors
- Make sure all tests and linting pass before deployment
