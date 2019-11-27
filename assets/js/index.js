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
    // Index
    $('.slick-container-card-recommended').slick({
        infinite: false,
        slidesToShow: 2,
        mobileFirst: true,
        speed: 300,
        accessibility: false,
        prevArrow: $('.container-card-recommended .slick-prev-card'),
        nextArrow: $('.container-card-recommended .slick-next-card'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 5
                }
            }
        ],
    });
    $('.slick-container-card-featured').slick({
        infinite: false,
        slidesToShow: 1,
        mobileFirst: true,
        speed: 300,
        accessibility: false,
        prevArrow: $('.container-card-featured .slick-prev-card'),
        nextArrow: $('.container-card-featured .slick-next-card'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 3
                }
            }
        ],

    });
    
    // Homes
    $('.slick-container-card-travel').slick({
        infinite: false,
        slidesToShow: 2,
        draggable: true,
        mobileFirst: true,
        speed: 300,
        accessibility: false,
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
            }
        ],
    });
    
    $('.slick-container').each(function(){
        let slickInduvidual = $(this);
        slickInduvidual.slick({
            dots: true,
            mobileFirst: true,
            arrows: true,
            speed: 300,
            accessibility: false,
            prevArrow: slickInduvidual.siblings('.slick-prev'),
            nextArrow: slickInduvidual.siblings('.slick-next'),
        });
    });

    // Video - Play, Pause
    let isPlay = true;
    $('.button-play').click(function() {
        if (isPlay===true) {
            isPlay = false;
            $('video').get(0).pause();
            $('.button-play i').removeClass('fas fa-pause').addClass('fas fa-play');
        }
        else {
            isPlay = true;
            $('video').get(0).play();
            $('.button-play i').removeClass('fas fa-play').addClass('fas fa-pause');
        }
    });

    // Footer
    let isOpen = false;
    $('.terms').click(function() {
        if (isOpen===false) {
            isOpen = true;
            $('.footer-toggle').css("display", "block");
            $('.terms .shadow span').text("Close");
            $('.terms .shadow img').attr("src", "./assets/img/homepage/svgs/close-btn.svg");
        }
        else {
            isOpen = false;
            $('.footer-toggle').css("display", "none");
            $('.terms .shadow span').text("Terms, Privacy & More");
            $('.terms .shadow img').attr("src", "./assets/img/homepage/svgs/info.svg");
        }
    });
});