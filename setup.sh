#!/bin/bash

echo "🚀 Setting up Subasthican Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env file for EmailJS configuration
echo "📝 Creating environment file..."
cat > .env << EOF
# EmailJS Configuration
# Get these values from https://www.emailjs.com/
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
EOF

echo "✅ Environment file created"

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Update the .env file with your EmailJS credentials"
echo "2. Customize the content in src/components/"
echo "3. Run 'npm start' to start the development server"
echo "4. Run 'npm run build' to build for production"
echo "5. Run 'npm run deploy' to deploy to GitHub Pages"
echo ""
echo "Happy coding! 🚀"
