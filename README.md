# Mercer Ecology Lab Website

A modern, responsive website for the Mercer Ecology Lab — a research group dedicated to quantifying ecosystem resilience in the Anthropocene.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite)

## 🌿 About

This website showcases the Mercer Ecology Lab's research in ecosystem resilience, biodiversity dynamics, and conservation strategies across terrestrial and aquatic systems. The site features:

- **Hero Section** — Introduction with key lab statistics
- **About** — Lab mission and approach
- **Research Areas** — Core research themes including terrestrial carbon sequestration, aquatic ecosystem dynamics, wildlife conservation, and human-environment interactions
- **Publications** — Featured academic publications
- **People** — Lab members and team
- **Fieldwork** — Research sites and field activities
- **News** — Latest updates and announcements
- **Contact** — Inquiry form for prospective researchers

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd ecology-compass

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) with TypeScript
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/)

## 📁 Project Structure

```
ecology-compass/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # React components
│   │   ├── ui/          # Reusable UI components (shadcn)
│   │   └── *.tsx        # Page sections
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── test/            # Test files
│   ├── App.tsx          # Root component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📄 License

This project is private and not licensed for public use.

---

*Built for the Mercer Ecology Lab — Department of Environmental Sciences*
