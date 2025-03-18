import express from "express";
import qr from "qrcode";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.post("/generate", async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) return res.status(400).json({ error: "Text is required" });

        const qrCode = await qr.toDataURL(text);
        res.json({ qrCode });
    } catch (err) {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
