# F1 Tracker 🏎️

A modern, premium Formula 1 race tracking homepage built with React + Tailwind CSS.

![F1 Tracker Preview](https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80)

## ✨ Features

- **Live Countdown Timer** — Real-time countdown to the next race
- **Glassmorphism UI** — Premium glass-card effects throughout
- **Dark Premium Theme** — Black (#050505) background with Ferrari Red (#E10600) accents
- **Fully Responsive** — Mobile-first design
- **Smooth Animations** — CSS transitions and hover micro-interactions
- **Driver Standings Preview** — Top 5 drivers at a glance
- **Upcoming Races Timeline** — Horizontally scrollable race calendar
- **Previous Race Results** — Expandable race result cards
- **Sticky Navbar** — Blur effect on scroll with mobile menu

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone or unzip the project
cd f1-tracker

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `f1-dark` | `#050505` | Page background |
| `f1-red` | `#E10600` | Ferrari red accents, CTAs |
| `f1-card` | `#0F0F0F` | Card backgrounds |
| `f1-border` | `#1A1A1A` | Borders, dividers |
| `f1-muted` | `#6B7280` | Secondary text |
| `f1-silver` | `#C0C0C0` | Highlight text |

### Typography
- **Display** — Bebas Neue (section titles, huge numbers)
- **Body** — Inter (all text content)
- **Mono** — JetBrains Mono (countdown, lap times, data)

### CSS Utility Classes (in `index.css`)
- `.glass-card` — Glassmorphism background
- `.glass-card-hover` — Hover lift + red glow
- `.btn-primary` — Red filled CTA button  
- `.btn-secondary` — Ghost/outline button
- `.section-label` — Small red uppercase label
- `.countdown-box` — Timer digit containers
- `.nav-link` — Navigation link with active state
- `.red-glow` — Red drop shadow effect

## 📁 Project Structure

```
f1-tracker/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav with mobile menu
│   │   ├── HeroSection.jsx     # Next race + countdown
│   │   ├── UpcomingRaces.jsx   # Horizontal scrollable cards
│   │   ├── PreviousRaces.jsx   # Race result cards
│   │   └── Footer.jsx          # Links + social
│   ├── data/
│   │   └── races.js            # Race data (replace with API)
│   ├── hooks/
│   │   └── useCountdown.js     # Countdown timer hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Global styles + design tokens
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🔌 Connecting a Real API

Replace the static data in `src/data/races.js` with the Ergast F1 API:

```js
// Example: Fetch next race
const response = await fetch('https://ergast.com/api/f1/current/next.json');
const data = await response.json();
const race = data.MRData.RaceTable.Races[0];
```

Or use the **OpenF1 API** (real-time): `https://openf1.org`

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react` 18 | UI framework |
| `tailwindcss` 3 | Utility-first CSS |
| `framer-motion` 11 | Animations (ready to integrate) |
| `lucide-react` | Icon library |
| `vite` 5 | Fast build tool |

## 🎯 Adding Framer Motion Animations

The project includes `framer-motion` as a dependency. To add animations:

```jsx
import { motion } from 'framer-motion';

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <YourComponent />
</motion.div>
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📄 License

Built as a portfolio/internship showcase project. F1 branding belongs to Formula One Management Ltd.

---

**Built with ❤️ by [Your Name]** | Inspired by Formula1.com, Vercel, and Linear
