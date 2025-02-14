function sendMessage() {
    // Phone number you want to send the message to (with country code)
    const phoneNumber = "+1234567890";  // Replace with actual number
    const message = "Hello, I need assistance."; // The message you want to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp with the pre-filled message
    window.open(url, "_blank");
}