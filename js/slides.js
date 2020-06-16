//Slider
//pega o resultado das duas funções e guarda num index
var slideIndex = 1;
showSlides(slideIndex);

var descIndex = 1;
showDesc(descIndex);

//Navegar entre os índices
function plusSlides(n) {
    showSlides(slideIndex += n)
    showDesc(descIndex += n)
}

//Percorre os slides e atribui um indice a cada,
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slider');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex - 1].style.display = "block";

}

//a mesma coisa
function showDesc(n) {
    var desc = document.getElementsByClassName('proj-desc');
    var i;
    for (i = 0; i < desc.length; i++) {
        desc[i].style.display = "none";
    }
    if (n > desc.length) {
        descIndex = 1;
    } else if (n < 1) {
        descIndex = desc.length;
    }
    desc[descIndex - 1].style.display = "block";
}