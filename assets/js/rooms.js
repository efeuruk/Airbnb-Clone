$(document).ready(function() {
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
            console.log("Aşağı");
            $('.link-report').css({
                'position': 'sticky',
                'top': '520px'
            });
            $('.card-dates-hidden').slideDown(300).css("display", "flex");
            $('.card-dates').css("margin-bottom", "100px");
        }
        else if (currentScrollTop < 800) {
           console.log("Yukarı");
           $('.card-dates-hidden').slideUp(300);
        }
    });

    $('.close-btn a').click(function() {
        $('btn-guest-menu').hide();
    });
});