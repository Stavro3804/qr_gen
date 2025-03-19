async function generateQR() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText.trim()) {
        alert("Please enter text to generate QR Code");
        return;
    }

    const response = await fetch("https://qrgen-production.up.railway.app/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputText })
    });

    const data = await response.json();
    if (data.qrCode) {
        const qrImage = document.getElementById("qrCode");
        qrImage.src = data.qrCode;
        qrImage.classList.remove("hidden"); // Make the image visible
    } else {
        alert("Failed to generate QR Code");
    }
}
