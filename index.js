// index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend is working! 🚀" });
});

app.post("/mcp/run", (req, res) => {
  const idea = req.body.idea;
  if (!idea) return res.status(400).json({ error: "Idea required" });

  // Simple pitch generation logic
  const output = `Pitch for idea: "${idea}". This app helps you hackathons!`;
  res.json({ output });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
