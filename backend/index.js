const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// SEO Headline List
const seoHeadlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Mumbai’s Cake & Co: A Slice Above the Rest!",
  "Discover the Hidden Gem of Mumbai’s Dessert Scene: Cake & Co",
  "Cake & Co in Mumbai Sets New Standards in Sweetness",
  "How Cake & Co Became a Favorite in Mumbai Overnight"
];

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  // Simulated response
  const response = {
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1), // random rating between 3.5 and 5
    reviews: Math.floor(Math.random() * 200) + 50,       // 50 to 250 reviews
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`
  };

  res.json(response);
});

// GET /regenerate-headline?name=...&location=...
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;

  const randomHeadline =
    seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];

  // Optional: Replace default name/location placeholders (optional)
  const personalizedHeadline = randomHeadline
    .replace("Cake & Co", name)
    .replace("Mumbai", location);

  res.json({ headline: personalizedHeadline });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
