# Smile Portfolio V2

A modern, interactive portfolio website built with Next.js 15, featuring smooth animations, 3D elements, and a responsive design. This portfolio showcases professional experience, projects, certificates, and provides an engaging user experience with theme switching and dynamic content.

## 🚀 Features

- **Modern Design**: Clean, responsive layout with dark/light theme support
- **Interactive 3D Elements**: Three.js integration for engaging visual experiences
- **Smooth Animations**: Framer Motion animations throughout the interface
- **Dynamic Sections**:
  - About section with image carousel
  - Experience timeline
  - Project showcase with live demos
  - Certificates gallery
  - Contact information
- **Loading Screen**: Custom loading animation
- **Custom Cursor**: Enhanced user interaction
- **Scroll to Top**: Smooth navigation enhancement
- **Meeting Booking**: Integrated Cal.com booking system
- **Responsive**: Mobile-first design approach

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [Three.js](https://threejs.org/) with [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Language**: JavaScript (ES6+)
- **Development**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm, yarn, pnpm, or bun package manager

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Redkuroo/smile-portfolio-v2.git
   cd smile-portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Cal.com booking link:
   ```env
   NEXT_PUBLIC_CAL_LINK=https://cal.com/your-booking-link
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
smile-portfolio-v2/
├── app/                          # Next.js App Router
│   ├── components/              # Reusable components
│   │   ├── Certificates.js      # Certificate gallery
│   │   ├── CustomCursor.js      # Custom cursor component
│   │   ├── Footer.js           # Footer component
│   │   ├── ScrollTopButton.js  # Scroll to top functionality
│   │   ├── Sun3D.js           # 3D sun animation
│   │   └── SurpriseButton.js  # Interactive surprise element
│   ├── AboutSection.js         # About section with carousel
│   ├── ExperienceSection.js    # Experience timeline
│   ├── LoadingScreen.js        # Loading animation
│   ├── ProjectSection.js       # Projects showcase
│   ├── Sidebar.js             # Navigation sidebar
│   ├── ThemeProvider.js       # Theme context provider
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Main page component
├── public/                     # Static assets
│   ├── about/                 # About section images
│   ├── certificates/         # Certificate images
│   ├── projects/             # Project screenshots
│   └── *.svg, *.jpg          # Icons and images
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json             # JavaScript configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
└── README.md                 # Project documentation
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Projects
Edit `app/ProjectSection.js` to add new projects to the showcase.

### Updating About Information
Modify `app/AboutSection.js` to update personal information and images.

### Adding Certificates
Place certificate images in `public/certificates/` and update `app/components/Certificates.js`.

### Theme Customization
Adjust theme colors and styles in `app/globals.css` and `app/ThemeProvider.js`.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm run start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**John Smile Mella**
- GitHub: [@Redkuroo](https://github.com/Redkuroo)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/john-smile-mella-064a12347/)
- Portfolio: [Live Demo](https://smile-portfolio-v2.vercel.app)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Three.js community for 3D capabilities
- Tailwind CSS for utility-first styling

---

⭐ Star this repository if you found it helpful!
