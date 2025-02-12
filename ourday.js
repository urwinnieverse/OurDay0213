// Function to show a specific pop-up
function showPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Function to close a specific pop-up
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Close pop-up when clicking outside of it
window.addEventListener("click", function (event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

