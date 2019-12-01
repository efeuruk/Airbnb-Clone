$(document).ready(function() {
    // Scroll spy
    $(window).scroll(function() {
        let currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > 540 && $(this).width() > 768) {
            $('#navigation-links').attr('style', 
            'display: block !important;');
        }
        else if (currentScrollTop < 540 || $(this).width() < 768) {
            $('#navigation-links').attr('style', 'display: none !important');
        }
    });
    
    $(window).on('activate.bs.scrollspy', function () {
        $('.active').css({
            'border-bottom':'3px solid #484848',
            'color': '#484848'
        });
        $('#navigation-links .nav-link').not('.active').css({
            'border': 'none',
            'color': '#008489'
        });
    });
    
    // Collapseta alt taraftaki butonu çıkarmak için kullanılan fonksiyon
    $('.show').click(function() {
        $('.show').hide();
    });
    $('.hide').click(function() {
        $('.show').show();
    });

    // Card dates' hidden place animation
    $('.card-dates-hidden').css("display", "none");
    $(window).scroll(function() {
        let currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > 500) {
            $('.link-report').css({
                'position': 'sticky',
                'top': '520px'
            });
            $('.card-dates-hidden').slideDown(300).css("display", "flex");
            $('.card-dates').css("margin-bottom", "100px");
        }
        else if (currentScrollTop < 800) {
           $('.card-dates-hidden').slideUp(300);
        }
    });

    $('.close-btn a').click(function() {
        $('btn-guest-menu').hide();
    });
});