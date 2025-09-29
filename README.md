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




### React Reservation Form

A simple React form that saves restaurant reservations directly to Google Sheets using Google Apps Script. Includes secure token-based submission, optional email confirmation, and easy deployment.

🚀 Features
Save form submissions directly to Google Sheets
Timestamp added automatically
Simple secret token authentication
Optional email confirmation to users
Works with public (anonymous) submissions
Easy to deploy and test

📁 Getting Started

1️⃣ Create the Google Sheet
Open Google Drive → New → Google Sheets
Rename it (e.g., Restaurant Reservations)
Add headers in row 1:
Timestamp | Name | Email | Phone | Date | Time | Guests | Message
(Optional) Freeze the header row: View → Freeze → 1 row

2️⃣ Add Apps Script
In the sheet, go to Extensions → Apps Script
Delete any default code and paste this script:
const SECRET = "replace_this_with_a_random_secret_string";
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || "{}");

    if (!data.secret || data.secret !== SECRET) {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "error", message: "Unauthorized" })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1") || ss.getActiveSheet();

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.date || "",
      data.time || "",
      data.guests || "",
      data.message || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Reservation saved" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

3️⃣ Deploy as Web App
Click Deploy → New deployment → Web app

Set:
Execute as: Me
Who has access: Anyone (or Anyone, even anonymous)
Deploy and authorize
Copy the Web App URL (e.g., https://script.google.com/macros/s/XXXX/exec)

🔄 If you update the script, re-deploy and update your URL in React.

4️⃣ React Form Submit Code
const GOOGLE_WEBAPP_URL = "https://script.google.com/macros/s/XXXX/exec";
const SECRET = "replace_this_with_a_random_secret_string";

const handleSubmit = async (formData) => {
  try {
    const response = await fetch(GOOGLE_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, secret: SECRET })
    });

    const result = await response.json();
    if (result.status === "success") alert("Reservation submitted!");
    else alert("Error: " + result.message);

  } catch (err) {
    console.error(err);
    alert("Failed to submit reservation.");
  }
};

5️⃣ Testing & Troubleshooting
Verify Web App URL is correct
Use browser DevTools → Network tab to inspect POST requests
Check your Google Sheet for appended rows
Ensure SECRET matches in both Apps Script and React

6️⃣ Security Tips
Keep SECRET private (use .env.local in React)
Avoid committing secrets publicly
For production, restrict access to authorized users

📦 Tech Stack
React
Google Sheets / Apps Script
JavaScript / Fetch API


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

---

Built with ❤️ using React and Tailwind CSS
