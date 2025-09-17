<<<<<<< HEAD
# Manoharan Subasthican - Personal Portfolio

A modern, interactive personal portfolio website built with React.js and Tailwind CSS. Features smooth animations, 3D effects, dark/light mode toggle, and a responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient effects and smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: 3D hover effects, parallax scrolling, and smooth transitions
- **Project Showcase**: Modal-based project details with live demos and GitHub links
- **Skills Carousel**: 3D rotating carousel showcasing technical skills
- **Contact Form**: EmailJS integration for sending messages
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading with optimized animations

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS (Animate On Scroll)** - Scroll animations
- **React Tilt** - 3D tilt effects
- **EmailJS** - Contact form functionality
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subasthican/subasthican-portfolio.git
   cd subasthican-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS (Optional)**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the Contact.js component with your credentials:
   ```javascript
   // Replace these values in src/components/Contact.js
   'YOUR_SERVICE_ID'    // Your EmailJS service ID
   'YOUR_TEMPLATE_ID'   // Your EmailJS template ID
   'YOUR_PUBLIC_KEY'    // Your EmailJS public key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   The homepage field is already configured in package.json:
   ```json
   "homepage": "https://subasthican.github.io/subasthican-portfolio"
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e40af',    // Blue
  accent: '#ffd700',     // Gold
  // Add your custom colors
}
```

### Content
- **Personal Information**: Update `src/components/Hero.js` and `src/components/About.js`
- **Projects**: Modify the projects array in `src/components/Projects.js`
- **Skills**: Update the skills array in `src/components/Skills.js`
- **Contact**: Update contact information in `src/components/Contact.js` and `src/components/Footer.js`

### Images
- Replace placeholder images with your actual photos
- Update image paths in the components
- Recommended image sizes:
  - Profile image: 400x400px
  - Project images: 800x600px

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images are automatically lazy-loaded
3. **Code Splitting**: React Router enables code splitting
4. **Animation Performance**: Uses CSS transforms for smooth animations

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS not working**
   - Verify your EmailJS credentials
   - Check if the service is active
   - Ensure the template is properly configured

2. **Animations not working**
   - Make sure AOS is properly initialized
   - Check if the elements have the correct data-aos attributes

3. **Build errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for any missing dependencies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/subasthican/subasthican-portfolio/issues).

## 📞 Contact

**Manoharan Subasthican**
- Email: subasthican@example.com
- GitHub: [@subasthican](https://github.com/subasthican)
- LinkedIn: [subasthican](https://linkedin.com/in/subasthican)

---

⭐ Star this repository if you found it helpful!
=======
# subasthican.github.io
My personal portfolio website
>>>>>>> 1c03dc9ab5e695a3bc86dbf5772759b25b38aa54
