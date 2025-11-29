#!/bin/bash

echo "🎨 Deploying Design System Storybook..."

# Build Storybook
echo "📦 Building Storybook for production..."
npm run build-storybook

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in: storybook-static/"
    echo ""
    echo "🌐 Deployment options:"
    echo "1. Drag and drop 'storybook-static' folder to Netlify"
    echo "2. Use Netlify CLI: netlify deploy --prod --dir=storybook-static"
    echo "3. Connect your Git repo to Netlify for auto-deploy"
    echo ""
    echo "🚀 Your design system is ready to deploy!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 