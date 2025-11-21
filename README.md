# Tania's Portfolio Website

A modern, minimal yet wonky portfolio website showcasing content strategy and AI-powered content expertise.

## Features

- **Minimal Design with Wonky Elements**: Clean aesthetic with playful interactions
- **AI-Powered Approach Showcase**: Highlights expertise with AI tools and measurable results
- **Fully Responsive**: Works seamlessly on all devices
- **Smooth Animations**: Framer Motion for delightful user experience
- **CMS Integration**: Easy content updates via Decap CMS
- **Contact Form**: Integrated with Netlify Forms
- **Fast Performance**: Built with React + Vite for optimal loading

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **CMS**: Decap CMS (Netlify CMS)
- **Forms**: React Hook Form + Netlify Forms
- **Hosting**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploying to Netlify

### One-Click Deploy

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" > "Import an existing project"
4. Select your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Click "Deploy site"

### Enable CMS

1. After deployment, go to Site Settings > Identity
2. Enable Identity service
3. Set registration to "Invite only"
4. Enable Git Gateway in Identity settings
5. Invite yourself via Identity tab
6. Access CMS at `your-site.netlify.app/admin`

### Enable Forms

Forms are automatically enabled through Netlify. Submissions will appear in your Netlify dashboard under "Forms".

## Content Management

### Using Decap CMS

1. Visit `/admin` on your deployed site
2. Log in with your Netlify Identity credentials
3. Update profile settings, work projects, and more
4. Changes are committed directly to your Git repository

### Manual Content Updates

Content can also be updated by editing JSON files in `/src/content/`:
- `profile.json` - Personal information and social links
- `work.json` - Portfolio projects

## Customization

### Colors

Edit the accent color in `tailwind.config.js`:

```js
colors: {
  accent: {
    DEFAULT: '#3B82F6', // Change this
    light: '#60A5FA',
    dark: '#2563EB',
  },
}
```

### Sections

All sections are modular components in `/src/sections/`:
- `Hero.jsx` - Landing section
- `About.jsx` - Story and stats
- `AIApproach.jsx` - AI expertise showcase
- `Services.jsx` - Services offered
- `Work.jsx` - Portfolio projects
- `ProofPoints.jsx` - Achievements and certifications
- `Contact.jsx` - Contact form

Feel free to edit, reorder, or remove sections as needed.

## Project Structure

```
tania_portfolio/
├── public/
│   └── admin/              # Decap CMS configuration
├── src/
│   ├── components/         # Reusable UI components
│   ├── sections/           # Page sections
│   ├── content/            # CMS-managed content
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── netlify.toml           # Netlify configuration
```

## License

All rights reserved © 2025 Tania

## Support

For questions or issues, please reach out at taniasay12345sangat@gmail.com
