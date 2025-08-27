# Deploy to Netlify - Step by Step Guide

## 🚀 Quick Deploy to Netlify

Since your code is already pushed to GitHub, you can deploy to Netlify in just a few clicks!

### Step 1: Go to Netlify
1. Open [netlify.com](https://netlify.com)
2. Click "Sign up" or "Log in" (use your GitHub account)

### Step 2: Connect Your Repository
1. Click "New site from Git"
2. Choose "GitHub" as your Git provider
3. Authorize Netlify to access your GitHub account
4. Find and select your repository: `andreycretsu/mcp-ds-storybook`

### Step 3: Configure Build Settings
Set these exact values:

**Build command:**
```
npm run build-storybook
```

**Publish directory:**
```
storybook-static
```

**Node version:**
```
18
```

### Step 4: Deploy!
1. Click "Deploy site"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your Storybook will be live at a URL like: `https://random-name.netlify.app`

## 🎯 What You'll Get

- ✅ **Live Storybook URL** - Share with your team
- ✅ **All 20 Components** - Interactive examples
- ✅ **Component Documentation** - Props and usage
- ✅ **Automatic Updates** - Every time you push to GitHub
- ✅ **Custom Domain** - You can add your own domain later

## 🔧 Advanced Settings (Optional)

### Environment Variables
If needed, add these in Netlify dashboard:
- `NODE_VERSION`: `18`
- `NPM_FLAGS`: `--legacy-peer-deps`

### Custom Domain
1. Go to your site settings in Netlify
2. Click "Domain settings"
3. Add your custom domain
4. Follow the DNS instructions

## 📱 Your Storybook Will Showcase

- **Avatar** - User profile images
- **Badge** - Status indicators  
- **Button** - Interactive buttons
- **DatePicker** - Date selection
- **ModalCard** - Modal dialogs
- **SearchInput** - Search fields
- **SnackBar** - Notifications
- **And 13 more components!**

## 🎉 After Deployment

1. **Share the URL** with your team
2. **Add it to your README.md**:
   ```markdown
   ## 📖 Storybook
   
   View the interactive component library: [Storybook](https://your-site.netlify.app)
   ```
3. **Update your npm package description** with the Storybook URL

## 🆘 Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure build command is exactly: `npm run build-storybook`
- Ensure publish directory is exactly: `storybook-static`

### Components Not Loading
- Check that all files are pushed to GitHub
- Verify the build completed successfully
- Check browser console for errors

### Styling Issues
- Make sure CSS files are included in the build
- Check that FontAwesome is loading correctly

## 📞 Need Help?

- Check Netlify's build logs for specific errors
- Ensure your repository is public or Netlify has access
- Verify all dependencies are in `package.json`

## 🎯 Success!

Once deployed, your Storybook will be a beautiful, interactive showcase of your Vue design system that anyone can access and use!
