// JavaScript to handle the popup subscribe form behavior

document.addEventListener("DOMContentLoaded", function () {
    const subscribeForm = document.getElementById("mc_embed_signup");

    // Show the popup after a delay of 3 seconds
    setTimeout(() => {
        subscribeForm.style.display = "block";
    }, 3000); // 3 seconds delay before showing the subscribe form

    // Optionally hide the form after submission
    subscribeForm.addEventListener("submit", function () {
        subscribeForm.style.display = "none";
        alert("Thank you for subscribing!");
    });
});
