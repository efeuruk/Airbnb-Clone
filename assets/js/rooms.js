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
        $('#navigation-links .active').css({
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
            $('.card-dates-hidden').slideDown(200).css("display", "flex");
            $('.link-report').css('padding-top', '50px');
            $('.card-dates').css("margin-bottom", "100px");
        }
        else if (currentScrollTop < 800) {
           $('.card-dates-hidden').slideUp(300);
        }
    });

    $('.close-btn a').click(function() {
        $('btn-guest-menu').hide();
    });

    // For commnets
    let commentText = $('.comment-text');
    for (let i=1; i<=commentText.length; i++) {
        if ($('#c'+i).text().length > 450) {
            $('#c'+i).dotdotdot({
                height: 100,
                fallbackToLetter: true,
                watch: true,
            });
            $('<a class="link-read-more">Read more</a>').insertAfter('#c'+i);
        }
    }

    $('.link-read-more').click(function() {
        $(this).prev('p').removeClass('ddd-truncated');
        $(this).prev('p').removeAttr('style');
        $(this).prev().dotdotdot({});
        $(this).remove();
    });
});