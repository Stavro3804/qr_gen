import express from "express";
import qr from "qrcode";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: "https://qr-wizard.netlify.app", // Explicitly allow your frontend
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.post("/generate", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: "Text is required to generate QR code" });
    }

    const qrCode = await qr.toDataURL(text);
    res.json({ success: true, qrCode });
  } catch (err) {
    console.error("QR Code Generation Error:", err.message);
    res.status(500).json({ error: "Failed to generate QR code. Please try again." });
  }
});

// Dynamic port binding for Railway
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
