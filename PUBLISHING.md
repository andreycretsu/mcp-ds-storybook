# Publishing Your Design System to npm

This guide will help you publish your Vue design system as an npm package so you can use it in other projects.

## 🚀 Quick Start

1. **Run the setup script:**
   ```bash
   ./setup-package.sh
   ```

2. **Follow the prompts** - the script will guide you through the process.

## 📋 Manual Steps (if needed)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Build the Library
```bash
npm run build:lib
```

### Step 3: Publish to npm
```bash
npm publish
```

## 🔧 Before Publishing

### Update Package Information

1. **Open `package.json`** and update:
   - `name`: Change `@your-org/vue-design-system` to your desired package name
   - `author`: Your name
   - `repository.url`: Your GitHub repository URL

2. **Example:**
   ```json
   {
     "name": "@your-username/vue-design-system",
     "author": "Your Name",
     "repository": {
       "type": "git",
       "url": "https://github.com/your-username/vue-design-system.git"
     }
   }
   ```

### npm Authentication

If you haven't published to npm before:

1. **Create an npm account** at https://www.npmjs.com/signup
2. **Login to npm:**
   ```bash
   npm login
   ```
3. **Enter your username, password, and email**

## 📦 Using Your Package

Once published, you can use your design system in other projects:

### Installation
```bash
npm install @your-username/vue-design-system
```

### Usage
```javascript
import { Button, Avatar, Badge } from '@your-username/vue-design-system'
import '@your-username/vue-design-system/style'
```

## 🎯 What's Included

Your package includes:
- ✅ All 20 Vue components
- ✅ TypeScript support
- ✅ CSS styles
- ✅ Vue plugin for easy installation
- ✅ Individual component imports
- ✅ Comprehensive documentation

## 🆘 Troubleshooting

### "npm login" fails
- Make sure you have an npm account
- Check your internet connection
- Try `npm logout` then `npm login` again

### "npm publish" fails
- Make sure you're logged in: `npm whoami`
- Check if the package name is available
- Ensure you've built the library: `npm run build:lib`

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors in your components

## 📞 Need Help?

If you encounter any issues:
1. Check the error messages carefully
2. Make sure you're logged into npm
3. Verify your package name is unique
4. Ensure all dependencies are installed
