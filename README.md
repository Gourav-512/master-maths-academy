# 📚 Coaching Classes Portal  

A modern, responsive Coaching/ Tuition Classes web portal built with **Next.js (or React/Vite)** and **Supabase** as backend.  
This project provides student login, parent access, attendance tracking, fee management, and more.  

---

## 🚀 Features

- 🔐 **Authentication (Supabase Auth)**
  - Email + OTP login
  - Google / GitHub login
  - Secure Row Level Policies

- 👨‍🎓 **Student Dashboard**
  - View profile
  - Attendance records
  - Exam results

- 🧑‍🏫 **Admin/Teacher Dashboard**
  - Add/update students
  - Manage attendance
  - Upload exam results
  - Send notifications

- 💳 **Payments (Optional)**
  - Online fee collection (Stripe/Razorpay integration)

- 📩 **Email Notifications**
  - OTP login emails
  - Class updates and reminders

- ⚡ **Supabase Edge Functions**
  - AI endpoints (future scope)
  - Scheduled tasks (auto reminders)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js / React / Vite + TailwindCSS  
- **Backend:** Supabase (PostgreSQL, Auth, Edge Functions)  
- **Database:** Supabase PostgreSQL  
- **Hosting:** Vercel / Netlify  

---

## 📂 Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/coaching-classes-portal.git
cd coaching-classes-portal
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3️⃣ Configure Environment Variables
Create a .env.local file in the root folder and add:

env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
4️⃣ Run Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
App will be running at: http://localhost:3000

🔐 Security Notes
✅ OTP expiry set to 5 minutes (300 seconds) for better security

✅ Row Level Security (RLS) enabled for user-specific data

✅ Environment variables kept secret (.env.local not pushed to GitHub)

📸 Screenshots
(Add your app screenshots here → login page, dashboard, etc.)

📌 Roadmap
 Authentication (Email OTP + Google login)

 Student dashboard

 Admin panel

 Fee payment integration

 AI-powered quiz/reports (using Supabase Edge Functions)

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Supabase

Next.js

Tailwind CSS

yaml
Copy
Edit


<img width="1903" height="960" alt="image" src="https://github.com/user-attachments/assets/4d419d80-3032-46c0-b9fb-af98cf7f9b56" />


To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
