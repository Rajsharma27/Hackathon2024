// Generate a simple CAPTCHA
function generateCaptcha() {
    const captchaText = document.getElementById("captchaText");
    const captcha = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Random 4-digit number
    captchaText.innerText = captcha;
    return captcha;
}

let currentCaptcha = generateCaptcha(); // Store the generated CAPTCHA

document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const appId = document.getElementById('appId').value;
    const applicantName = document.getElementById('applicantName').value;
    const captchaInput = document.getElementById('captcha').value;

    if (captchaInput !== currentCaptcha) {
        document.getElementById('message').innerText = "Invalid CAPTCHA. Please try again.";
        currentCaptcha = generateCaptcha(); // Regenerate CAPTCHA on error
        return;
    }

    // Here you can add your logic to handle the certificate download
    document.getElementById('message').innerText = `Certificate for ${applicantName} (ID: ${appId}) has been downloaded.`;

    // Reset form fields after successful submission
    document.getElementById('downloadForm').reset();
    currentCaptcha = generateCaptcha(); // Generate a new CAPTCHA
});

// Initialize CAPTCHA on page load
window.onload = generateCaptcha;
