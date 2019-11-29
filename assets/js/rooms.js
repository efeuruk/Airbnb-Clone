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
                'top': '500px'
            });
            $('.card-dates-hidden').slideDown(500).css("display", "flex");
        }
        else if (currentScrollTop < 800) {
           console.log("Yukarı");
           $('.card-dates-hidden').slideUp(500);
        }
    });
});