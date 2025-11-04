# K-Culture AI Writer Project

## Project Overview
Static web app for generating bilingual (Korean/English) social media posts about Korean culture. Deployable to GitHub Pages.

## Tech Stack
- HTML5, CSS3, vanilla JavaScript
- OpenAI API (client-side with fallback)
- Serverless functions (Netlify/Vercel) for secure API calls

## Project Structure
```
/
├── index.html       # Main UI
├── styles.css       # Styling
├── script.js        # Core logic & API calls
├── netlify/         # Netlify Functions
├── api/             # Vercel Functions
└── README.md        # Documentation
```

## Development Guidelines
- Keep bilingual (Korean/English) throughout
- Provide sample fallback for API-less testing
- Security: Never commit API keys
- Mobile-responsive design
