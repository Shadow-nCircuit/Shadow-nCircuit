// Show the modal after the page loads
window.onload = function() {
    document.getElementById("subscribe-modal").style.display = "block";
}

// Close the modal when the close button is clicked
document.getElementById("close-btn").onclick = function() {
    document.getElementById("subscribe-modal").style.display = "none";
}

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById("subscribe-modal")) {
        document.getElementById("subscribe-modal").style.display = "none";
    }
}
