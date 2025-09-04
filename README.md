# Rajesh & Priya's Wedding Invitation Website

A beautiful, modern, and responsive wedding invitation website with enhanced user experience. This website features a stunning design with smooth animations, interactive elements, and mobile-first responsive design.

## 🌟 Features

### Design & UX
- **Modern Gradient Design**: Beautiful gradient backgrounds and color schemes
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Interactive Elements**: Countdown timer, lightbox gallery, and form validation
- **Professional Typography**: Playfair Display and Open Sans font combination

### Sections
- **Hero Section**: Couple names, wedding date, and countdown timer
- **Our Story**: Timeline of the couple's journey with interactive cards
- **Wedding Events**: Detailed information about ceremonies and receptions
- **Photo Gallery**: Interactive gallery with lightbox functionality
- **RSVP Form**: Comprehensive form with validation and confirmation
- **Footer**: Social links and contact information

### Technical Features
- **Countdown Timer**: Real-time countdown to the wedding date
- **Form Validation**: Client-side validation with user feedback
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced navigation experience
- **Notification System**: Success/error messages for user actions
- **Parallax Effects**: Subtle parallax scrolling for visual appeal

## 🚀 Quick Start

### Option 1: Simple Setup (No Dependencies)
1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Option 2: Development Server (Recommended)
1. Install Node.js (if not already installed)
2. Run the following commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000`

## 📁 Project Structure

```
rajesh_ka_card/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality and interactions
├── package.json        # Project configuration and dependencies
└── README.md          # This file
```

## 🎨 Customization

### Changing Couple Names
Edit the following in `index.html`:
```html
<span class="name">Rajesh</span>
<span class="ampersand">&</span>
<span class="name">Priya</span>
```

### Updating Wedding Date
1. Change the date in the hero section:
```html
<span class="date-text">December 15, 2024</span>
```

2. Update the countdown timer in `script.js`:
```javascript
const weddingDate = new Date('December 15, 2024 16:00:00').getTime();
```

### Customizing Colors
The main color scheme is defined in CSS variables. Key colors:
- Primary: `#e74c3c` (Red)
- Secondary: `#f39c12` (Orange)
- Accent: `#2c3e50` (Dark Blue)
- Background: `#f8f9fa` (Light Gray)

### Adding Real Photos
Replace the placeholder divs with actual images:
```html
<!-- Replace this -->
<div class="image-placeholder">
    <i class="fas fa-heart"></i>
    <p>Couple Photo</p>
</div>

<!-- With this -->
<img src="path/to/your/photo.jpg" alt="Couple Photo" class="couple-photo">
```

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- **Desktop**: Full layout with all features
- **Tablet**: Adapted grid layouts and navigation
- **Mobile**: Hamburger menu, stacked layouts, and touch-friendly interactions

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy with one click

### Option 2: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch and deploy

### Option 3: Any Static Hosting
The website is a static site and can be deployed to any hosting service that supports HTML/CSS/JS.

## 🛠️ Development

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Add any JavaScript functionality in `script.js`
4. Update navigation menu if needed

### Styling Guidelines
- Use CSS Grid and Flexbox for layouts
- Follow the existing color scheme
- Maintain responsive design principles
- Use smooth transitions for interactions

## 📞 Support

For questions or customization help, please refer to the code comments or create an issue in the repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for Rajesh & Priya's special day**

*Wishing you both a lifetime of happiness and love!*
