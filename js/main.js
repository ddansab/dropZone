$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000, 'linear');
    });

    $('.hvr-bounce-to-bottom').click(function () {
        $(this).unbind("mouseenter mouseleave");
    });
});