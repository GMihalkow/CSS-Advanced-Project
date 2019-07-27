function toggleModal(element) {
    document.getElementById("modal-image").src = element.src;
    document.getElementById("modal").style.display = "block";
}

function displayNone(element) {
    element.style.display = "none";
}

function cancelModal(){
    document.getElementById('modal').style.display = "none";
}