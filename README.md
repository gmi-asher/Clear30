# Clear30 Campus Partnership Booking Confirmation Page

A booking confirmation page for Clear30's campus partnership sales process. This page displays after prospects book a meeting via Calendly and educates campus administrators through video content before the sales call.

## Tech Stack

- **React** - UI framework (functional components)
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **JavaScript** - No TypeScript

## Project Structure

```
clear30-confirmation-page/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with main video
│   │   ├── FAQVideos.jsx      # FAQ video grid section
│   │   ├── VideoTile.jsx      # Reusable video component
│   │   ├── Testimonials.jsx   # Testimonials section
│   │   └── Footer.jsx         # Footer with logo and disclaimers
│   ├── data/
│   │   └── videos.js          # Video data and placeholders
│   ├── assets/
│   │   └── logo.png           # Clear30 logo (needs to be added)
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration with brand colors
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd clear30-confirmation-page
npm install
```

### 2. Add Logo File

Add your Clear30 logo to `src/assets/` as `logo.png`. A temporary SVG placeholder has been provided for testing.

To use the temporary logo, update the import in [src/components/Footer.jsx](src/components/Footer.jsx):
```jsx
// Change from:
import logo from '../assets/logo.png'
// To:
import logo from '../assets/logo.svg'
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 4. Replace Video Placeholders

Edit [src/data/videos.js](src/data/videos.js) and replace the placeholder video IDs with real YouTube video IDs.

**How to get YouTube video IDs:**
- From URL `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`
- From short URL `https://youtu.be/dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`

**Video requirements:**
- Set videos as **Unlisted** (not Public or Private)
- Disable comments if desired

## Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files ready for deployment.

## Deployment

### Option 1: Netlify
1. Run `npm run build`
2. Drag and drop the `dist/` folder to Netlify

### Option 2: Vercel
1. Connect your GitHub repo to Vercel
2. Vercel will automatically detect Vite and build

### Option 3: AWS S3 + CloudFront
1. Run `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront for CDN

## Calendly Integration

After deploying, integrate with Calendly:

1. Go to Calendly → Event Type → Booking Page Options
2. Select **Confirmation Page** → "Redirect to an external site"
3. Enter: `https://clear30.org/confirmed` (or your deployed URL)

## Brand Guidelines

### Colors
| Color | Hex | Tailwind Class |
|-------|-----|----------------|
| Primary (Teal) | #5BB4A9 | `brand-primary` |
| Secondary (Green) | #80C97A | `brand-secondary` |
| Dark Background | #1a1a1a | `brand-dark` |

### Typography
- Font: Lexend (loaded via Google Fonts)
- Loaded in [index.html](index.html)

### Custom Tailwind Classes
- `rounded-brand` - 21px border radius
- `shadow-brand` - Subtle shadow
- `shadow-brand-glow` - Teal glow effect
- `font-lexend` - Lexend font family

## Quality Checklist

Before deploying to production:

- [ ] All placeholder video IDs replaced with real YouTube IDs
- [ ] Logo file added (`src/assets/logo.png`)
- [ ] All videos load and play correctly
- [ ] Hero video autoplays (muted)
- [ ] Page is mobile responsive
- [ ] Brand colors match specification
- [ ] Lexend font loads correctly
- [ ] Gradient text displays on headline
- [ ] Page loads in under 3 seconds

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Troubleshooting

**Videos not loading?**
- Check that video IDs are correct
- Ensure videos are set to "Unlisted" on YouTube
- Check browser console for errors

**Logo not showing?**
- Verify `src/assets/logo.png` exists
- Check import path in Footer.jsx
- Try using the SVG placeholder for testing

**Styles not applying?**
- Run `npm install` to ensure Tailwind is installed
- Check that `index.css` is imported in `main.jsx`
- Verify Tailwind config paths in `tailwind.config.js`

## Support

For issues or questions, refer to the original specification document or contact the development team.

## License

© 2026 Clear30. All rights reserved.
