# Tobacco Landing Page Deployment Instructions

## Overview
This document provides instructions for deploying the tobacco landing page to Vercel. The landing page includes product introductions, navigation, shopping cart functionality, payment QR code, and customer service contact sections.

## Project Structure
- `site/` - Main project directory containing all source code
- `site/src/` - Source code files
- `site/public/` - Static assets
- `site/dist/` - Production build output (generated after build)

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to the project directory:
   ```bash
   cd site
   ```

4. Deploy to Vercel:
   ```bash
   vercel
   ```

5. Follow the prompts to configure your project:
   - Select your scope/team
   - Confirm the project name
   - Confirm the project directory (should be `./`)
   - Override settings if needed

### Option 2: Deploy via Vercel Dashboard
1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Framework Preset: Vite
   - Root Directory: site
   - Build Command: npm run build
   - Output Directory: dist
6. Click "Deploy"

## Important Notes
- Make sure all dependencies are listed in `package.json`
- The project uses Vite, React, and TypeScript
- Environment variables (if any) should be configured in Vercel dashboard
- The build command `npm run build` will create optimized production files
- Vercel will automatically handle HTTPS and CDN distribution

## After Deployment
1. Test the shopping cart functionality
2. Verify all images and assets are loading correctly
3. Check mobile responsiveness
4. Test the checkout process
5. Verify customer service contact information

## Updating the Site
To update the deployed site:
1. Make changes to your code
2. Commit and push to GitHub
3. Vercel will automatically rebuild and deploy

## Troubleshooting
If the site is not updating after deployment:
1. Check Vercel deployment logs for errors
2. Ensure all dependencies are installed
3. Verify the build command is successful locally
4. Clear Vercel cache if needed through the dashboard

For any deployment issues, check the Vercel deployment logs in your dashboard or contact support.
