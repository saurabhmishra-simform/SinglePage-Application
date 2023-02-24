$(document).ready(function () {
    $('#logo').click(function () {
        $('#mainIntro').css('background-color', '#E3E3E3').slideUp(2000).slideDown(2000);
    });
});
//Image slider functions
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
    showSlides(slideIndex += num);
}

function currentSlide(num) {
    showSlides(slideIndex = num);
}

function showSlides(num) {
    let i;
    let slides = document.getElementsByClassName("myImages");
    if (num > slides.length){
        slideIndex = 1
    }
    if (num < 1){ 
        slideIndex = slides.length 
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

