async function generateQR() {
    const inputText = document.getElementById("inputText").value;
    if (!inputText) {
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
        document.getElementById("qrImage").src = data.qrCode;
    } else {
        alert("Failed to generate QR Code");
    }
}
