# Deep Ocean Portfolio

A responsive portfolio website with a deep ocean theme, built with React, Vite, and Tailwind CSS.

## Features

- 🌊 Animated bubble background for an immersive deep ocean feel
- 📱 Fully responsive design for all device sizes
- 🚀 Fast performance with Vite
- 💼 Project showcase with detailed project pages
- 🛠️ Skills section with technology icons
- 📬 Contact section with social links

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Routing
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Project Structure

The project is organized into the following main directories:

- `src/components` - UI components including navbar and sections
- `src/pages` - Page components (Homepage and Project Detail)
- `src/data` - Data files for projects and skills
- `src/utils` - Utility functions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ocean-portfolio.git
   cd ocean-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Changing Personal Information

Edit the following files to customize the portfolio for your needs:

- `src/components/Navbar.jsx` - Change your name
- `src/components/sections/Hero.jsx` - Update your introduction
- `src/components/sections/Contact.jsx` - Update your contact information
- `src/data/projects.js` - Add your projects
- `src/data/skills.js` - Update your skills

### Adding Projects

To add a new project:

1. Add your project images to `public/images/projects/[project-name]/`
2. Add your project details to the `projects` array in `src/data/projects.js`

### Modifying the Theme

To change the color theme, update the CSS variables in `src/index.css`.

## Deployment

The site can be built for production using:

```bash
npm run build
```

The built files will be in the `dist` directory and can be deployed to any static site hosting service like Netlify, Vercel, or GitHub Pages.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animation powered by [Framer Motion](https://www.framer.com/motion/)

---

Built with ❤️ by [Your Name](https://github.com/yourusername)
