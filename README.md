# LP Horizontal React

A stunning horizontal scrolling landing page built with React, Vite, and WebGL shaders.

## ✨ Features

- **Horizontal Scroll Navigation** - Smooth horizontal scrolling with 5 sections
- **WebGL Shader Effects** - Dynamic background with ChromaFlow and Swirl shaders
- **Custom Cursor** - Magnetic cursor that responds to interactive elements
- **Magnetic Buttons** - Buttons with smooth magnetic hover effects
- **Grain Overlay** - Subtle texture overlay for visual depth
- **Reveal Animations** - Smooth fade-in animations on scroll
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **Touch Gestures** - Native touch support for mobile devices

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn-ui** - Beautiful UI components
- **Shaders** - WebGL shader effects
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🎨 Customization

### Colors

Edit the color scheme in `src/index.css` by modifying the CSS variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... more colors */
}
```

### Shader Effects

Customize shader colors and parameters in `src/App.tsx`:

```tsx
<Swirl
  colorA="#1275d8"
  colorB="#e19136"
  speed={0.8}
  // ... more params
/>
```

### Content

Edit the content in each section component:
- Hero section: `src/App.tsx`
- Work: `src/components/sections/work-section.tsx`
- Services: `src/components/sections/services-section.tsx`
- About: `src/components/sections/about-section.tsx`
- Contact: `src/components/sections/contact-section.tsx`

## 📁 Project Structure

```
lp-horizontal-react/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── work-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── custom-cursor.tsx
│   │   ├── grain-overlay.tsx
│   │   └── magnetic-button.tsx
│   ├── hooks/
│   │   └── use-reveal.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── vite.config.ts
```

## 🎯 Key Features Explained

### Horizontal Scroll

The app converts vertical mouse wheel/trackpad scrolling into horizontal movement, creating a unique browsing experience.

### Shader Background

Uses WebGL shaders for fluid, animated backgrounds that respond to user interaction.

### Custom Cursor

A custom cursor with smooth follow animation that scales up when hovering over interactive elements.

### Magnetic Buttons

Buttons that smoothly follow the mouse cursor when hovering, creating a playful magnetic effect.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

