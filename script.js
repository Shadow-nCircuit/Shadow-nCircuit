// This function will display the subscribe popup on page load
window.onload = function() {
    setTimeout(function() {
        document.getElementById("subscribe-popup").style.display = "block";
    }, 1000); // Adjust the time (1000 ms = 1 second) as needed
};

// This function will close the popup when the close button is clicked
function closePopup() {
    document.getElementById("subscribe-popup").style.display = "none";
}

// Optionally, you can set a background overlay to dim the content behind the popup
// If you want a smooth transition when closing the popup, you can add transition styles in CSS.
