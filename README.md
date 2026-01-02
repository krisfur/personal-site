# Personal Portfolio – Next.js + React + Tailwind CSS

This is a modern personal site built with:

* ⚛️ **React 19**
* ⚡ **Next.js 15** (App Router)
* 🎨 **Tailwind CSS**
* 🚀 **Bun** (JavaScript runtime & package manager)
* ✨ **Custom holographic Profile Card UI**

## ✨ Getting Started

1. **Install dependencies**

   ```bash
   bun install
   ```

2. **Start development server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Build for production**

   ```bash
   bun run build
   ```

4. **Start production server**

   ```bash
   bun run start
   ```

## ✨ Features

* ⚡ Server-side rendering with Next.js 15 App Router
* 🎨 Tailwind CSS for utility-first styling
* 📱 Fully responsive design
* ✨ Animated profile card with 3D tilt effects and holographic gradients
* 🔗 Social media integration (LinkedIn, GitHub, Instagram)
* 🎯 TypeScript for type safety
* 🚀 Optimized for performance with Next.js Image component
* 📊 Technology badge showcase

## 🧱 Credit

Profile card design inspired by [ReactBits Profile Card Component](https://www.reactbits.dev/components/profile-card)

## 📁 Structure

```
app/
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Home page
└── globals.css           # Global styles & ProfileCard CSS

components/
└── ProfileCard.tsx       # Custom 3D card component

public/
├── kris-taller.png       # Main avatar image
└── kris.jpg              # Mini avatar image
```

## 🛠️ Customization

### Update Personal Information

Edit `app/page.tsx` to customize:

* Profile card props (name, title, handle, status)
* Social media links
* Work experience
* Technology badges

### Modify ProfileCard Appearance

Edit `components/ProfileCard.tsx` props:

* `avatarUrl` - Main profile image
* `miniAvatarUrl` - Small avatar in info bar
* `behindGradient` - Animated background gradient
* `innerGradient` - Inner card gradient
* `enableTilt` - Enable/disable 3D tilt effect
* `contactLinks` - Social media links with icons

### Styling

The project uses Tailwind CSS for most styling. Custom ProfileCard styles are in `app/globals.css` to preserve the complex holographic effects and animations.

## 🎨 Tech Stack Migration

This project was migrated from:
- **Vite** → **Next.js 15** (App Router)
- **CSS Modules** → **Tailwind CSS** (with custom CSS for ProfileCard)
- **npm** → **Bun**

## 📦 Deployment

Easily deploy to Vercel:

```bash
# Install Vercel CLI
bun install -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

---

Built by [Krzysztof Furman](https://github.com/krisfur)