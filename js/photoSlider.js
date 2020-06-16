var photoIndex = 0;
showPhoto();

function showPhoto() {
    var i;
    var photo = document.getElementsByClassName("photo-slider");
    for (i = 0; i < photo.length; i++) {
        photo[i].style.display = "none";
    }
    photoIndex++;
    if (photoIndex > photo.length) {
        photoIndex = 1
    }
    photo[photoIndex - 1].style.display = "block";
    setTimeout(showPhoto, 7000); // Change image every 2 seconds
}