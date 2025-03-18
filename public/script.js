const backendURL = "https://your-app-name.up.railway.app"; // Replace with actual URL

async function generateQRCode() {
    const text = document.getElementById("text").value;
    if (!text) return alert("Please enter text");

    const response = await fetch(`${backendURL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });

    const data = await response.json();
    document.getElementById("qr-code").src = data.qrCode;
}
