# 📚 Master Maths Academy Coaching Portal

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Built with TypeScript](https://img.shields.io/badge/TypeScript-95%25-blue)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-3.2%25-blueviolet)](https://developer.mozilla.org/docs/Web/CSS)
[![Powered by Supabase](https://img.shields.io/badge/Backend-Supabase-3FCF8E)](https://supabase.com/)

> 🚧 **UNDER DEVELOPMENT: Open to contributors! Help make this platform available for everyone.**

> ✨ **"A modern AI-powered portal for coaching classes with student, parent, and admin features."**

Master Maths Academy is a responsive, full-featured web portal for coaching/tuition classes. Built with **Next.js/TypeScript** and **Supabase**, it provides seamless student management, attendance, fee tracking, notifications, and more.

---

## 🚀 Features

- **Authentication:** Email + OTP, Google, GitHub (Supabase Auth)
- **Student Dashboard:** Profile, attendance, exam results
- **Parent Portal:** (Optional) Monitor student progress
- **Admin/Teacher Panel:** Add/update students, manage attendance, upload results, send notifications
- **Online Payments:** Stripe/Razorpay integration (optional)
- **Email Notifications:** OTP, reminders, updates
- **Supabase Edge Functions:** AI endpoints, scheduled tasks (future scope)
- **Secure by Design:** Row Level Security (RLS), short-lived OTPs

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions)
- **Database:** Supabase PostgreSQL
- **Hosting:** Vercel / Netlify

---

## 🚦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Gourav-512/master-maths-academy.git
cd master-maths-academy
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Screenshots

_Add demo screenshots here (login, dashboard, etc.)_

---

## 🗺️ Roadmap

- [x] Email OTP & Google login
- [x] Student dashboard
- [x] Admin panel
- [ ] Fee payment integration
- [ ] AI-powered quiz/reports (Edge Functions)
- [ ] Parent portal
- [ ] More features coming soon

---

## 🤝 Contributing

**This project is under active development and open to everyone!**

Pull requests are welcome! For major changes, open an issue first to discuss your ideas. Let's build a great education platform together.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Supabase](https://supabase.com/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Free and public AI APIs

---

## 🌐 Custom Domain Setup

Go to **Project > Settings > Domains** in your hosting provider and connect your custom domain.

More: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
