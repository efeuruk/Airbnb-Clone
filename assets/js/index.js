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
    // Slick
    // Homes
    $('.slick-container-card-travel').slick({
        infinite: false,
        slidesToShow: 2,
        draggable: true,
        mobileFirst: true,
        prevArrow: $('.slick-prev-card'),
        nextArrow: $('.slick-next-card'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1119,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 4
                }
            }
        ],
    });
    
    $('.slick-container').each(function(){
        $('.slick-slide').bind('touchstart', function(){ console.log('touchstart') })
        var slickInduvidual = $(this);
        slickInduvidual.slick({
            dots: true,
            mobileFirst: true,
            arrows: true,
            swipeToSlide: true,
            touchMove: true,
            prevArrow: slickInduvidual.siblings('.slick-prev'),
            nextArrow: slickInduvidual.siblings('.slick-next'),
        });
    });
});