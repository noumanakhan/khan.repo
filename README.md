# Nouman Khan - Full Stack Developer Portfolio

A modern, production-ready full-stack developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and MongoDB. This portfolio showcases my projects, skills, and services with a beautiful, responsive design and smooth animations.

## ✨ Features

- **Modern Design**: Clean, professional UI with dark/light mode support
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Full-Stack**: Next.js API routes for contact form submission
- **Database Integration**: MongoDB with Prisma ORM for data persistence
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Deployment Ready**: Configured for Vercel deployment

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes (Dark/Light mode)
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **API**: Next.js API Routes
- **Database**: MongoDB
- **ORM**: Prisma
- **Validation**: Zod (ready for use)

### Deployment
- **Platform**: Vercel

## 📋 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── projects/
│   │   └── page.tsx              # Projects page
│   ├── services/
│   │   └── page.tsx              # Services page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── providers.tsx             # Theme provider
├── components/
│   ├── navigation.tsx            # Navigation bar
│   ├── footer.tsx                # Footer
│   ├── theme-toggle.tsx          # Dark mode toggle
│   ├── project-card.tsx          # Project card component
│   ├── button.tsx                # Button components
│   └── container.tsx             # Layout container
├── lib/
│   ├── prisma.ts                 # Prisma client
│   └── api-utils.ts              # API utility functions
├── data/
│   └── portfolio.ts              # Portfolio data
└── types/
    └── portfolio.ts              # TypeScript types
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB database
- Git

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   
   Create a `.env.local` file:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Initialize the database**
   ```bash
   npx prisma migrate dev --name init
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Visit** [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
npx prisma studio   # Prisma database UI
```

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and select your repository
4. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `NEXT_PUBLIC_API_URL` (your Vercel domain)
5. Click "Deploy"

## 📧 Contact Form

The contact form saves messages to MongoDB with validation and rate limiting.

**API Endpoint**: `POST /api/contact`

## 🎨 Customization

### Edit Portfolio Data
Update `src/data/portfolio.ts` to modify:
- Projects
- Skills
- Experience
- Services
- Testimonials

### Update Personal Info
- Edit `src/components/footer.tsx` for social links
- Edit `src/components/navigation.tsx` for navigation
- Update `.env.local` for API configuration

## 📱 Pages

- **Home** (`/`): Hero, featured projects, CTA
- **About** (`/about`): Bio, skills, experience
- **Projects** (`/projects`): All projects with filtering
- **Services** (`/services`): Services offered with pricing
- **Contact** (`/contact`): Contact form and information

## 🔒 Security

- Input validation and sanitization
- Rate limiting on API endpoints
- Environment variables for sensitive data
- HTTPS ready (automatic on Vercel)

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify connection string in `.env.local`
- Check IP whitelist (for MongoDB Atlas)
- Ensure MongoDB service is running

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma Docs](https://www.prisma.io/docs)
- [MongoDB](https://docs.mongodb.com)
- [Vercel Docs](https://vercel.com/docs)

## 👨‍💻 About

Built by **Nouman Khan** - Full Stack Developer

- Email: noumananjumkhan@gmail.com
- GitHub: [github.com/noumanakhan](https://github.com/noumanakhan)
- LinkedIn: [linkedin.com/in/noumanakhan](https://linkedin.com/in/noumanakhan)

---

**Ready to deploy? 🚀**
