# BVV Restaurant Website

A beautiful, responsive restaurant website built with React, TypeScript, and Tailwind CSS.

## Features

- 🍽️ **Elegant Design** - Modern, sophisticated interface with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Interactive Gallery** - Lightbox image viewer with navigation
- 📋 **Detailed Menu** - Complete menu with allergen information and nutritional details
- 📝 **Reservation System** - Integrated with Google Sheets for real-time booking management
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎯 **Accessibility** - WCAG compliant with proper semantic markup

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Backend**: Google Sheets integration for reservations
- **Deployment**: Bolt Hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Restaurant.git
cd Restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Google Sheets Integration

To set up the reservation system:

1. Create a Google Sheet with columns: Name | Email | Phone | Date | Time | Guests | Message
2. Go to Extensions → Apps Script
3. Add the provided Google Apps Script code
4. Deploy as a Web App
5. Update the `GOOGLE_WEBAPP_URL` in `src/components/Contact.tsx`

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── About.tsx       # Restaurant story & stats
│   ├── Menu.tsx        # Interactive menu with allergen info
│   ├── Gallery.tsx     # Image gallery with lightbox
│   ├── Contact.tsx     # Reservation form & contact info
│   └── Footer.tsx      # Footer with links & hours
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors
The color scheme uses Tailwind's amber palette. To change:
- Update `amber-*` classes throughout components
- Modify the primary color in `tailwind.config.js` if needed

### Content
- Update restaurant information in each component
- Replace images with your own (using Pexels URLs or local assets)
- Modify menu items in `src/components/Menu.tsx`

### Google Sheets Setup
Replace the placeholder URL in `Contact.tsx` with your Google Apps Script Web App URL.

## Deployment

The site is deployed on Bolt Hosting. To deploy elsewhere:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React and Tailwind CSS