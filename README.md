# Eden Journo Fellous – UI/UX Designer Portfolio

A modern, responsive portfolio web application to showcase UI/UX projects and case studies. Built with Next.js and Tailwind CSS, this portfolio is designed for easy customization and continuous updates, providing a seamless experience for both designers and potential employers.

---

## Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [How to Add Projects & Case Studies](#how-to-add-projects--case-studies)
- [Resume Download](#resume-download)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Showcase Projects & Case Studies:** Highlight your best work with detailed project pages, images, and research insights.
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices.
- **Easy Customization:** Update content, colors, and layout to match your personal brand.
- **Downloadable Resume:** Employers can download your resume directly from the site.
- **Modern UI:** Clean, accessible, and visually appealing interface.
- **Continuous Updates:** Effortlessly add new projects and case studies.

---

## Live Demo
*Coming soon: Deploy to Vercel or your preferred platform and add your link here!*

---

## Screenshots
*Add screenshots or GIFs of your portfolio here to showcase the UI and features.*

---

## Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Charts:** [Chart.js](https://www.chartjs.org/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/eden-portfolio.git
   cd eden-portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   # or
   yarn build && yarn start
   ```

5. **Lint the code:**
   ```bash
   npm run lint
   # or
   yarn lint
   ```

---

## Project Structure
```
eden-portfolio/
├── app/                # Next.js app directory (pages, layouts, routes)
│   ├── about/          # About page
│   ├── project1/       # Example project/case study
│   ├── globals.css     # Global styles (Tailwind)
│   ├── layout.jsx      # Root layout
│   └── page.jsx        # Home page
├── components/         # Reusable React components
│   ├── ui/             # UI primitives (e.g., Sheet)
├── lib/                # Utility functions
├── public/             # Static assets (images, resume, etc.)
│   ├── assets/         # Project images, resume PDF, etc.
├── tailwind.config.mjs # Tailwind CSS config
├── package.json        # Project metadata and scripts
└── ...
```

---

## Customization
- **Colors & Fonts:** Edit `tailwind.config.mjs` and `app/globals.css` to change the color palette and typography.
- **Branding:** Update the logo, favicon (`app/favicon.ico`), and header/footer components.
- **Navigation:** Edit `components/Nav.jsx` and `components/MobileNav.jsx` to modify navigation links.

---

## How to Add Projects & Case Studies

### Add a New Project to the Home Page
1. **Add your project image:**
   - Place the image in `public/assets/projects/`.
2. **Update the projects list:**
   - Edit `app/page.jsx` and add a new object to the `projects` array with your project details (name, image path, description, etc.).

### Add a New Case Study Page
1. **Duplicate an existing project page:**
   - Copy `app/project1/page.jsx` to a new folder (e.g., `app/project2/page.jsx`).
2. **Add media assets:**
   - Place images, diagrams, and other media in `public/assets/project2/`.
3. **Edit the new page:**
   - Update titles, descriptions, and image paths to match your new project.
4. **Update navigation (if needed):**
   - Add a link to the new project in the home page or navigation components.

---

## Resume Download
- Place your resume PDF in `public/assets/resume/`.
- The navigation bar includes a direct download link to the resume file.

---

## Contributing
Contributions are welcome! To propose changes:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Credits
- Developed by Sacha M. Marciano
- Design & content by Eden Journo Fellous


