# Java Fintech Portfolio

A modern, responsive portfolio website showcasing Java development experience in the fintech industry.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Built with Next.js, Tailwind CSS, and shadcn/ui components
- **Gradient Headings**: Beautiful gradient text effects for section headings
- **Skill Bars**: Visual representation of technical skills with progress bars
- **Professional Sections**: About, Skills, Experience, Projects, Education, and Contact

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This portfolio is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://your-username.github.io/your-repo-name/`

### Manual Deployment

\`\`\`bash
npm run deploy
\`\`\`

## 📝 Configuration

### Repository Name

Update the `basePath` and `assetPrefix` in `next.config.js` with your actual repository name:

\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-actual-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-actual-repo-name/' : '',
\`\`\`

### Personal Information

Update the portfolio content in `portfolio.tsx` with your personal information:
- Experience details
- Project descriptions
- Education information
- Contact information

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Colors
The portfolio uses gradient colors for headings. You can customize them in `portfolio.tsx`:
- Hero: Blue to purple to cyan
- About: Emerald to blue
- Skills: Orange to pink
- Experience: Green to blue
- Projects: Purple to pink
- Education: Indigo to purple
- Contact: Teal to blue

### Theme
The dark/light mode toggle is implemented using `next-themes`. The default theme is set to dark mode.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: your-email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)

---

Built with ❤️ using Next.js and Tailwind CSS
\`\`\`

```text file="public/CNAME"
# Replace with your custom domain if you have one
# your-domain.com
