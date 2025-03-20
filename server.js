const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

app.get("/generate", async (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        const qrCode = await QRCode.toDataURL(q);
        res.json({ qr_code: qrCode });
    } catch (error) {
        res.status(500).json({ error: "Failed to generate QR code" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
