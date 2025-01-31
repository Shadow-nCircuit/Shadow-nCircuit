// JavaScript to handle the popup subscribe form behavior

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("mc_embed_signup");

    // Show the popup when the page loads
    subscribeForm.style.display = "block";

    // Hide the form after submission (optional behavior)
    subscribeForm.addEventListener("submit", function () {
        subscribeForm.style.display = "none";
        alert("Thank you for subscribing!");
    });
});
