# 🧠 GrowthProAI - Full Stack Intern Assignment

A responsive Local Business SEO Dashboard that simulates how small businesses might visualize their Google profile with a modern, animated UI.

Built using **React + Vite + Tailwind CSS** on the frontend and **Node.js + Express** on the backend.

---

## ✨ Features

- 🔁 Flip card animation: switch between form and business info
- 📍 Emoji avatar based on business type (☕ Café, 🍕 Pizza, etc.)
- 🌐 Simulated Google rating, reviews & SEO headline
- 💬 Toast notifications for feedback
- 🎨 Glassmorphic card UI + responsive layout
- ✅ Form validation + loading state

---

## 🛠️ Tech Stack

| Layer     | Stack                         |
|-----------|-------------------------------|
| Frontend  | React, Vite, Tailwind CSS     |
| Backend   | Node.js, Express              |
| Styling   | Tailwind + Glassmorphism      |
| UX        | Flip Animation + React Toast  |

---

## 🔧 Local Setup

### ▶️ Frontend (Vite)

```bash
cd frontend
npm install
npm run dev

Open: http://localhost:5173

▶️ Backend (Express)
bash
Copy
Edit
cd backend
npm install
node index.js
Runs on: http://localhost:3000

🧪 API Endpoints
POST /business-data
json
Copy
Edit
Request:
{
  "name": "Cake & Co",
  "location": "Mumbai"
}

Response:
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}