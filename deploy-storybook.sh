#!/bin/bash

echo "🚀 Deploying Vue Design System Storybook"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        print_error "Failed to install dependencies"
        exit 1
    fi
    print_success "Dependencies installed"
fi

# Build Storybook
print_status "Building Storybook..."
npm run build-storybook

if [ $? -eq 0 ]; then
    print_success "Storybook built successfully!"
else
    print_error "Failed to build Storybook"
    exit 1
fi

# Check if storybook-static directory exists
if [ ! -d "storybook-static" ]; then
    print_error "storybook-static directory not found. Build may have failed."
    exit 1
fi

echo ""
echo "🎉 Storybook built successfully!"
echo ""
echo "📋 Deployment Options:"
echo "====================="
echo ""
echo "1. 🌐 GitHub Pages (Recommended)"
echo "   - Free hosting"
echo "   - Automatic updates on git push"
echo "   - Custom domain support"
echo ""
echo "2. 📦 Netlify"
echo "   - Free hosting"
echo "   - Drag & drop deployment"
echo "   - Automatic builds from git"
echo ""
echo "3. ☁️ Vercel"
echo "   - Free hosting"
echo "   - Automatic deployments"
echo "   - Great performance"
echo ""
echo "4. 🔧 Manual Upload"
echo "   - Upload storybook-static folder to any web server"
echo ""

# Ask user for deployment preference
echo "Which deployment method would you like to use?"
echo "1) GitHub Pages (run: npm run deploy-storybook)"
echo "2) Netlify (manual upload)"
echo "3) Vercel (manual upload)"
echo "4) Manual upload"
echo "5) Just build (no deployment)"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_status "Deploying to GitHub Pages..."
        npm run deploy-storybook
        if [ $? -eq 0 ]; then
            print_success "Deployed to GitHub Pages!"
            echo ""
            echo "🌐 Your Storybook is now live at:"
            echo "   https://your-username.github.io/your-repo-name/"
            echo ""
            echo "📝 To update the URL, edit package.json and update the repository URL"
        else
            print_error "Failed to deploy to GitHub Pages"
        fi
        ;;
    2)
        print_status "Netlify deployment instructions:"
        echo ""
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/Login with your GitHub account"
        echo "3. Click 'New site from Git'"
        echo "4. Choose your repository"
        echo "5. Set build command: npm run build-storybook"
        echo "6. Set publish directory: storybook-static"
        echo "7. Deploy!"
        echo ""
        print_success "storybook-static folder is ready for Netlify upload"
        ;;
    3)
        print_status "Vercel deployment instructions:"
        echo ""
        echo "1. Go to https://vercel.com"
        echo "2. Sign up/Login with your GitHub account"
        echo "3. Click 'New Project'"
        echo "4. Import your repository"
        echo "5. Set build command: npm run build-storybook"
        echo "6. Set output directory: storybook-static"
        echo "7. Deploy!"
        echo ""
        print_success "storybook-static folder is ready for Vercel upload"
        ;;
    4)
        print_status "Manual upload instructions:"
        echo ""
        echo "1. Upload the 'storybook-static' folder to your web server"
        echo "2. Make sure index.html is in the root of the uploaded folder"
        echo "3. Your Storybook will be available at your domain"
        echo ""
        print_success "storybook-static folder is ready for manual upload"
        ;;
    5)
        print_success "Storybook built successfully! No deployment performed."
        echo ""
        echo "📁 Your built Storybook is in the 'storybook-static' folder"
        echo "🌐 You can open 'storybook-static/index.html' in your browser to preview"
        ;;
    *)
        print_error "Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "📚 Next Steps:"
echo "=============="
echo ""
echo "1. 📖 Update your README.md with the Storybook URL"
echo "2. 🔗 Add the Storybook link to your npm package description"
echo "3. 📝 Consider adding Storybook documentation to your package"
echo ""
echo "🎯 Your design system is now ready to be shared with the world!"
