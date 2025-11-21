# Deployment Guide - Tania's Portfolio

## Quick Start: Deploy to Netlify in 5 Minutes

### Step 1: Push to GitHub

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. Create a new repository on GitHub (github.com/new)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/tania-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Sign up/Login (use your GitHub account for easy setup)
3. Click **"Add new site"** > **"Import an existing project"**
4. Choose **GitHub** as your provider
5. Authorize Netlify to access your repositories
6. Select your **tania-portfolio** repository
7. Netlify auto-detects the settings (from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Click **"Deploy site"**

🎉 Your site will be live in 2-3 minutes!

### Step 3: Set Up Custom Domain (Optional)

1. In your Netlify dashboard, go to **Site settings** > **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `tania.com`)
4. Follow the DNS instructions provided by Netlify
5. Enable HTTPS (automatic and free!)

### Step 4: Enable Contact Form

Forms are automatically enabled! To receive submissions:

1. In Netlify dashboard, go to **Forms** tab
2. You'll see all form submissions here
3. Set up **Email notifications**:
   - Go to **Site settings** > **Forms** > **Form notifications**
   - Click **"Add notification"**
   - Choose **Email notification**
   - Enter your email: `taniasay12345sangat@gmail.com`

Now you'll get an email every time someone fills the contact form!

### Step 5: Enable CMS (Content Management)

This lets you update content without touching code:

1. In Netlify dashboard, go to **Site settings** > **Identity**
2. Click **"Enable Identity"**
3. Under **Registration preferences**, select **"Invite only"**
4. Scroll down to **Services** > **Git Gateway**
5. Click **"Enable Git Gateway"**
6. Go to **Identity** tab (top menu)
7. Click **"Invite users"**
8. Enter your email: `taniasay12345sangat@gmail.com`
9. Check your email and accept the invitation
10. Visit `your-site-name.netlify.app/admin`
11. Log in with your new password
12. You can now edit content from the CMS!

## Making Changes

### Local Development

```bash
npm run dev
```
Opens dev server at `http://localhost:5173`

### Update Content via CMS

1. Visit `your-site.netlify.app/admin`
2. Make changes in the user-friendly interface
3. Click "Publish" - changes go live automatically!

### Update Content via Code

1. Edit files in `src/content/`:
   - `profile.json` - Your info, links
   - `work.json` - Portfolio projects
2. Push to GitHub:
```bash
git add .
git commit -m "Update content"
git push
```
3. Netlify auto-deploys in 2 minutes!

### Update Design/Code

1. Edit component files in `src/`
2. Test locally: `npm run dev`
3. Commit and push:
```bash
git add .
git commit -m "Update design"
git push
```
4. Auto-deploys to Netlify!

## Customization Quick Guide

### Change Accent Color

Edit `tailwind.config.js`:
```js
accent: {
  DEFAULT: '#YOUR_COLOR', // Main accent color
  light: '#YOUR_LIGHT',
  dark: '#YOUR_DARK',
}
```

### Update Social Links

Edit `src/content/profile.json`:
```json
{
  "linkedin": "https://linkedin.com/in/yourprofile",
  "behance": "https://behance.net/yourprofile",
  "blog": "https://yourblog.com"
}
```

Also update in:
- `src/components/Footer.jsx`
- `src/sections/Contact.jsx`

### Add/Remove Sections

Edit `src/App.jsx`:
```jsx
function App() {
  return (
    <div className="relative">
      <CursorFollower />
      <Hero />
      <About />
      {/* Comment out or remove sections you don't want */}
      <AIApproach />
      <Services />
      <Work />
      <ProofPoints />
      <Contact />
      <Footer />
    </div>
  )
}
```

## Performance Tips

- Images: Use WebP format, compress before uploading
- Test speed: Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Lighthouse score: Aim for 90+ on all metrics

## SEO Setup

Already included:
- Meta description in `index.html`
- Semantic HTML structure
- Fast loading times

To improve:
1. Add `public/robots.txt`:
```
User-agent: *
Allow: /
```

2. Add `public/sitemap.xml` (after knowing your domain):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <priority>1.0</priority>
  </url>
</urlset>
```

3. Submit to Google Search Console

## Troubleshooting

### Build Fails on Netlify

Check build logs in Netlify dashboard. Common fixes:
- Ensure Node version is 18+ (already set in `netlify.toml`)
- Check for missing dependencies

### Form Not Working

- Ensure form has `data-netlify="true"` attribute (already added)
- Check "Forms" tab in Netlify dashboard
- Spam submissions go to spam folder

### CMS Login Issues

- Clear browser cache
- Try incognito mode
- Resend invitation from Netlify dashboard

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Decap CMS Documentation](https://decapcms.org/)

---

**Your portfolio is ready to impress! 🚀**
