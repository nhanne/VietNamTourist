$(document).ready(function() {
    $('#backtop').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.navbar').addClass('sticky');
            $('#backtop').fadeIn();
        } else {
            $('.navbar').removeClass('sticky');
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 0);
    });
    $('.navbar .navbar-toggler-icon').click(function() {
        $('.navbar').addClass('sticky');
    })
});