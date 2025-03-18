async function generateQR() {
    const text = document.getElementById("text").value;
    if (!text) {
        alert("Please enter some text!");
        return;
    }

    const response = await fetch("/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });

    const data = await response.json();
    const qrImage = document.getElementById("qrCode");

    if (data.qrCode) {
        qrImage.src = data.qrCode;
        qrImage.classList.remove("hidden");
    }
}
