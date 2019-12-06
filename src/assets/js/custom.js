// Buttons
import closeBtn from '../img/homepage/svgs/close-btn.svg';
import infoBtn from '../img/homepage/svgs/info.svg';
import video from '../img/homepage/video/video.mp4';

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
window.toggleNavbar = toggleNavbar;

$(document).ready(function() {
    // Search card
    
    // Initilize Datepicker
    $(function() {
        let $startDate = $('.start-date');
        let $endDate = $('.end-date');
  
        $startDate.datepicker({
          autoHide: true,
        });
        $endDate.datepicker({
          autoHide: true,
          startDate: $startDate.datepicker('getDate'),
        });
  
        $startDate.on('change', function () {
          $endDate.datepicker('setStartDate', $startDate.datepicker('getDate'));
        });
    });

    // Guest Dropdown
    
    // Prevent closing
    $(document).on('click', '.dropdown-guest .dropdown-menu', function (e) {
        e.stopPropagation();
      });
    
    // Increment and decrement values in guest dropdown
    let quantityArray = [];

    $('.btn-minus').each(function(index) {
        quantityArray.push({quantity: 0});
        $(this).on('click', function() {
            let quantity = quantityArray[index].quantity;
            let quantityElement = $(this).next();
            if(quantity > 0) {
                quantity = quantity - 1;
                quantityArray[index].quantity = quantity;
            }
            quantityElement.text(quantity);
        })
    });

    $('.btn-plus').each(function(index) {     
        $(this).on('click', function() {
            let quantity = quantityArray[index].quantity;
            let quantityElement = $(this).prev();
            quantity = quantity + 1;
            quantityArray[index].quantity = quantity;
            quantityElement.text(quantity);
        })
    });

    // Form submit
    let submitObj = {
        where: '',
        startDate: '',
        endDate: '',
        adult: 0,
        childeren: 0,
        infants: 0
    }

    $('.btn-search').click(function() {
        if ($('#where').val() === "" || $('.start-date').val() === ""
        || $('.end-date').val() === "") {
            console.log("Please enter whole inputs");
        }
        else {
            submitObj.where = $('#where').val();
            submitObj.startDate = $('.start-date').val();
            submitObj.endDate = $('.end-date').val();
            $('.btn-minus').next().each(function(index) {
                if (index == 0) {
                    submitObj.adult = parseInt($(this).html());
                }
                else if (index == 1) {
                    submitObj.childeren = parseInt($(this).html());
                }
                else {
                    submitObj.infants = parseInt($(this).html());
                }
            });
            console.log(submitObj);
        }
    });

    $('.form-card-dates').click(function(event) {
        event.preventDefault();
    });

    // Video's src push to dom
    $('.card-image').attr("src", video);
    
    // -------------------------------------------------Slick------------------------------------------
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

    // Rooms
    $('.slick-container-banner').not('.slick-initialized').slick({
        dots: true,
        mobileFirst: true,
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        speed: 300,
    });

    // To preserve slick when screen size gets smaller
    $(window).resize(function()  {
        ($(window).width() < 768) ? 
        $('.slick-container-banner').not('.slick-initialized').slick({
            dots: true,
            mobileFirst: true,
            slidesToShow: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            speed: 300,
        }) :
        $('.slick-container-banner').not('.slick-initialized').slick('unslick'); 
    });

    // --------------------------------------------SLICK END------------------------------------------

    // General Page js events
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
    
    // Tabbar show, hide when scroll
    let lastScrollTop = 0;
    $(window).scroll(function() {
        if ($(window).width() < 768) {
            let currentScrollTop = $(this).scrollTop();
            if (currentScrollTop > lastScrollTop) {
                // When scroll down
                $('.section-fixed-navigation-bar').slideUp(300);
                $('.hidden-fiters').slideUp(300);
            }
            else {
                // When scroll up
                $('.section-fixed-navigation-bar').slideDown(300);
                $('.hidden-fiters').slideDown(300);
            }
            lastScrollTop = currentScrollTop;
        }
        // If I wrote that without else if, like just else it won't be seen in the mobile
        // when the page first seen
        else if ($(window).width() > 768) {
            $('.section-fixed-navigation-bar').css("display", "none");
        }
    });

    // Searchbar animate
    $('.search-bar').click(function() {
        $('.search-bar').animate({width: '600px'}, 500).addClass('shadow')
    });

    $('.search-bar').blur(function() {
        $('.search-bar').animate({width: '200px'}, 800).removeClass('shadow');
    });

    // Footer
    let isOpen = false;
    $('.terms').click(function() {
        if (isOpen===false) {
            isOpen = true;
            $('.footer-toggle').css("display", "block");
            $('.terms .shadow span').text("Close");
            $('.terms .shadow img').attr("src", closeBtn);
        }
        else {
            isOpen = false;
            $('.footer-toggle').css("display", "none");
            $('.terms .shadow span').text("Terms, Privacy & More");
            $('.terms .shadow img').attr("src", infoBtn);
        }
    });
});