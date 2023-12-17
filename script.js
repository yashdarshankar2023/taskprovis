function showPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalButton");
btn.addEventListener("click", function () {
    if (modal.style.display === "flex") {
        closeModal();
    } else {
        openModal();
    }
});

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        if (modal.style.display === "flex") {
            closeModal();
        } else {
            openModal();
        }
    }
});
