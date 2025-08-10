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

  // Dynamic pitch generation based on idea
  const output = `Here’s a quick pitch for your idea "${idea}":\n\n` +
    `Our innovative project "${idea}" aims to solve real problems by leveraging cutting-edge technology. ` +
    `It’s designed to bring efficiency, ease, and a smarter approach to everyday challenges. Perfect for hackathons!`;

  res.json({ output });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
