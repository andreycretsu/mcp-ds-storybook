# Storybook Deployment Guide

This guide will help you deploy your Vue Design System Storybook to various hosting platforms so others can see and interact with your components online.

## 🚀 Quick Start

Run the automated deployment script:
```bash
./deploy-storybook.sh
```

This script will:
1. ✅ Install dependencies
2. ✅ Build your Storybook
3. ✅ Guide you through deployment options
4. ✅ Provide specific instructions for each platform

## 📋 Deployment Options

### 1. 🌐 GitHub Pages (Recommended)

**Pros:**
- ✅ Free hosting
- ✅ Automatic updates when you push to git
- ✅ Custom domain support
- ✅ Integrated with your repository

**Setup:**
```bash
# Build and deploy
npm run build-storybook
npm run deploy-storybook
```

**URL Format:**
`https://your-username.github.io/your-repo-name/`

### 2. 📦 Netlify

**Pros:**
- ✅ Free hosting
- ✅ Drag & drop deployment
- ✅ Automatic builds from git
- ✅ Custom domains
- ✅ Great performance

**Setup:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Set build command: `npm run build-storybook`
6. Set publish directory: `storybook-static`
7. Deploy!

### 3. ☁️ Vercel

**Pros:**
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Great performance
- ✅ Edge functions support

**Setup:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Set build command: `npm run build-storybook`
6. Set output directory: `storybook-static`
7. Deploy!

### 4. 🔧 Manual Upload

**For any web server:**
1. Run `npm run build-storybook`
2. Upload the `storybook-static` folder to your web server
3. Ensure `index.html` is accessible

## 🛠️ Manual Deployment Steps

### Step 1: Build Storybook
```bash
npm run build-storybook
```

### Step 2: Check the Build
```bash
# Open in browser to preview
open storybook-static/index.html
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy-storybook
```

## 📝 Configuration

### Update Package Information

Before deploying, update your `package.json`:

```json
{
  "name": "@your-username/vue-design-system",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/your-repo-name.git"
  },
  "homepage": "https://your-username.github.io/your-repo-name/"
}
```

### Storybook Configuration

Your `.storybook/main.ts` is already configured for deployment. Key settings:

```typescript
{
  "stories": ["../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite"
  },
  "docs": {
    "autodocs": true
  }
}
```

## 🌐 After Deployment

### Update Documentation

1. **Add Storybook URL to README.md:**
```markdown
## 📖 Storybook

View the interactive component library: [Storybook](https://your-storybook-url.com)
```

2. **Add to npm package description:**
```json
{
  "description": "A comprehensive Vue 3 design system component library. View the Storybook: https://your-storybook-url.com"
}
```

### Share Your Design System

- **Designers**: Share the Storybook URL for component exploration
- **Developers**: Include the npm package and Storybook URL in documentation
- **Teams**: Use Storybook for design system discussions and reviews

## 🎯 What Users Will See

Your deployed Storybook will showcase:

- ✅ **All 20 Components** with interactive examples
- ✅ **Component Documentation** with props and usage
- ✅ **Design Tokens** (colors, typography, spacing)
- ✅ **Interactive Controls** for testing different states
- ✅ **Responsive Design** testing
- ✅ **Accessibility** information

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules storybook-static
npm install
npm run build-storybook
```

### GitHub Pages Not Working
1. Check repository settings → Pages
2. Ensure source is set to "gh-pages" branch
3. Wait a few minutes for deployment

### Netlify/Vercel Issues
1. Check build logs in the platform dashboard
2. Ensure build command and output directory are correct
3. Verify all dependencies are in `package.json`

## 📚 Next Steps

1. **Customize Storybook Theme** - Match your brand colors
2. **Add More Stories** - Create examples for different use cases
3. **Set Up CI/CD** - Automatic deployment on git push
4. **Add Analytics** - Track component usage
5. **Create Component Guidelines** - Add design system documentation

## 🎉 Success!

Once deployed, your Storybook will be a living, interactive documentation of your design system that anyone can access and use!
