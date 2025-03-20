const backendUrl = "https://your-backend.up.railway.app";

async function generateQR() {
    const url = document.getElementById("urlInput").value;
    if (!url) {
        alert("Please enter a valid URL");
        return;
    }

    try {
        const response = await fetch(`${backendUrl}/generate?q=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.qr_code) {
            document.getElementById("qrCodeContainer").innerHTML = `
                <img src="${data.qr_code}" alt="QR Code" class="mt-4 mx-auto">
            `;
        } else {
            alert("Failed to generate QR code");
        }
    } catch (error) {
        console.error("Error generating QR code:", error);
        alert("Error connecting to the server");
    }
}
