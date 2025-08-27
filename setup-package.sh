#!/bin/bash

echo "🚀 Setting up Vue Design System Package"
echo "======================================"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Check if user is logged in to npm
echo "📋 Checking npm authentication..."
if npm whoami &> /dev/null; then
    echo "✅ Already logged in to npm as: $(npm whoami)"
else
    echo "🔐 You need to log in to npm to publish packages"
    echo "   Run: npm login"
    echo "   Then enter your npm username, password, and email"
    read -p "   Press Enter after you've logged in..."
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies. Please check your npm configuration."
    exit 1
fi

# Build the library
echo "🔨 Building the library..."
npm run build:lib

if [ $? -eq 0 ]; then
    echo "✅ Library built successfully!"
    echo ""
    echo "🎉 Setup complete! Your package is ready to publish."
    echo ""
    echo "Next steps:"
    echo "1. Update the package name in package.json if needed"
    echo "2. Update the repository URL in package.json"
    echo "3. Run 'npm publish' to publish to npm"
    echo ""
    echo "To use in other projects:"
    echo "npm install @your-org/vue-design-system"
else
    echo "❌ Failed to build library. Please check the error messages above."
    exit 1
fi
