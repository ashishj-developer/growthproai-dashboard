# GrowthProAI — Full Stack Intern Assignment 🚀

This project is a **Mini Local Business SEO Dashboard**, built as part of the GrowthProAI Full Stack Intern Assignment.

## 🌐 Live Demo

- **Frontend (Vercel):** [https://growthproai-dashboard-tan.vercel.app/](https://growthproai-dashboard-tan.vercel.app/)
- **Backend (Render):** [https://growthproai-dashboard-anv0.onrender.com](https://growthproai-dashboard-anv0.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express (No database)
- **Hosting**: Vercel (frontend), Render (backend)

---

## 💻 Features

- ✅ Form to enter Business Name & Location
- ✅ Stylish animated Flip Card UI with:
  - Google Rating (simulated)
  - Total Reviews (simulated)
  - AI-generated SEO headline
- ✅ Button to Regenerate SEO headline
- ✅ Client-side Validation with Toasts
- ✅ Glassmorphism Card UI
- ✅ Static Map Placeholder (city-themed)
- ✅ Fully responsive & mobile-friendly

---

## 🧪 API Endpoints (Backend)

### `POST /business-data`

**Request:**
```json
{ "name": "Cake & Co", "location": "Mumbai" }

Response:

{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}

Local Development Setup
🔧 Backend
bash
Copy
Edit
cd backend
npm install
node index.js
Available at http://localhost:3000

💻 Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
Available at http://localhost:5173

You can configure the backend URL using .env file with:
VITE_API_BASE=http://localhost:3000 (or your Render URL)

📤 Submission
GitHub Repo: https://github.com/ashishj-developer/growthproai-dashboard

Frontend: Live on Vercel

Backend: Live on Render

🙌 Built by
Ashish Raj — aspiring full stack developer
GitHub: @ashishj-developer