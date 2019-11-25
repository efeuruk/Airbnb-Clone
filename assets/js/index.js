// Bütün navbarlar için kullanılan mobildeki collapse menü için yazılan fonksiyon
function toggleNavbar() {
    const navbarContent = document.getElementsByClassName("navbar-content")[0];
    if (navbarContent.style.height == "100%") {
        navbarContent.style.height = "0";
    }
    else {
        navbarContent.style.height = "100%";
    }
}

$(document).ready(function() {
    $('.slick-container').slick({
        dots: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
    });
});