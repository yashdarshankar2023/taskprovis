function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalButton");

// Toggle the modal state on button click
btn.addEventListener("click", function () {
    if (modal.style.display === "flex") {
        closeModal();
    } else {
        openModal();
    }
});

// Function to open the modal
function openModal() {
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Toggle the modal state if the user clicks outside the modal
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        if (modal.style.display === "flex") {
            closeModal();
        } else {
            openModal();
        }
    }
});
