$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1500, 'linear');
    });

    $('.hvr-bounce-to-bottom').click(function () {
        $(this).unbind("mouseenter mouseleave");
    });
});