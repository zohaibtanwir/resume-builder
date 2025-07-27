# 📄 Dynamic Resume Builder

A modern, interactive resume builder built with **Next.js**, **TypeScript**, and **React**. Create professional resumes with real-time preview, rich text editing, and PDF export functionality...

![Resume Builder Demo](public/preview-screenshot.png)

## ✨ Features

### 🎨 **Rich Text Editor**
- **WYSIWYG editing** for work experience responsibilities
- **Bullet points and numbered lists** support
- **Bold and italic** text formatting
- **Clean, professional formatting**

### 📱 **Live Preview**
- **Real-time updates** as you type
- **Professional resume layout** matching industry standards
- **Responsive design** that looks great on all devices
- **Split-screen view** (form + preview) or individual modes

### 📅 **Smart Date Selection**
- **Month/Year dropdowns** for work experience and awards
- **"Present" option** for current positions
- **Consistent date formatting** across all sections

### 🔧 **Form Validation**
- **Real-time validation** with helpful error messages
- **Required field indicators**
- **Email and URL format validation**
- **Smart validation** that only triggers when fields have content

### 📊 **Multiple Sections**
- **Personal Details** (name, title, contact info)
- **Professional Links** (LinkedIn, Stack Overflow, etc.)
- **Skills** with dynamic add/remove
- **Languages** with dynamic add/remove
- **Work Experience** with rich text responsibilities
- **Education** with details and achievements
- **Awards & Recognitions**
- **Past Organizations**

### 🖨️ **PDF Export**
- **High-quality PDF generation** via browser print
- **Formatted for A4 paper size**
- **Print-optimized styling**
- **Professional appearance** with proper margins and typography

### 💾 **User Experience**
- **Auto-save** as you type (client-side)
- **Clean, modern interface**
- **Intuitive form controls**
- **Responsive design** for desktop and mobile

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zohaibtanwir/resume-builder.git
   cd resume-builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the project
npm run build

# Start the production server
npm run start
```

## 🎯 Usage Guide

### 1. **Fill Out Your Information**
- Start with **Personal Details** (name, title, contact info)
- Add your **Professional Links** (LinkedIn, portfolio, etc.)
- List your **Skills** and **Languages**

### 2. **Add Work Experience**
- Use the **month/year dropdowns** for accurate dates
- Write **responsibilities** using the rich text editor
- Use **bullet points** to make achievements stand out
- Add multiple positions with the **"Add Work Experience"** button

### 3. **Include Education & Awards**
- Add your **educational background**
- Include **awards and recognitions**
- Mention **past organizations** if relevant

### 4. **Preview & Export**
- Use the **view mode toggle** to see:
  - **Split View**: Form and preview side-by-side
  - **Form Only**: Focus on editing
  - **Preview Only**: See the final result
- Click **"Print/Save as PDF"** to export your resume

### 🎨 **Rich Text Editor Tips**
- Select text and use the **toolbar buttons** for formatting
- Click the **bullet list button** (•) for bullet points
- Click the **numbered list button** (1.) for numbered lists
- Use **bold** for job titles and **italic** for emphasis

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **Rich Text Editor**: [React Quill](https://github.com/zenoamaro/react-quill)
- **PDF Generation**: Browser-native printing with optimized CSS
- **Package Manager**: npm
- **Development**: Hot reload, TypeScript support, ESLint

## 📁 Project Structure

```
resume-builder/
├── src/
│   └── app/
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout
│       ├── page.tsx             # Home page
│       ├── builder/
│       │   ├── page.tsx         # Main resume builder
│       │   └── style.css        # Builder-specific styles
│       └── page/
│           ├── page.tsx         # Static resume example
│           └── style.css        # Page-specific styles
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## 🎨 Customization

### **Styling**
- Modify `src/app/builder/style.css` for builder-specific styles
- Update `tailwind.config.ts` for custom colors and spacing
- Edit `src/app/globals.css` for global style changes

### **Resume Layout**
- Update the preview section in `src/app/builder/page.tsx`
- Modify the PDF styles for different paper sizes
- Customize the color scheme and typography

### **Form Fields**
- Add new sections by extending the `ResumeData` interface
- Create new form components following the existing patterns
- Update validation logic in the `validateForm` function

## 🚀 Deployment

### **Vercel** (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### **Other Platforms**
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: `railway init` and deploy
- **Digital Ocean**: Use App Platform

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **React Quill** for the rich text editor
- **Tailwind CSS** for the utility-first styling
- **Vercel** for excellent deployment platform

---

**Made with ❤️ by [Zohaib Tanwir](https://github.com/zohaibtanwir)**

Got questions? Feel free to [open an issue](https://github.com/zohaibtanwir/resume-builder/issues) or reach out!
