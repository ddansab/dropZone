$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 2000, 'linear');
    });

    $('.hvr-bounce-to-bottom').click(function () {
        $(this).unbind("mouseenter mouseleave");
    });

    // progress bar
    var progressVal = $('progress').val(),
        progressStep = 20,
        progressDirection = 1;

    setInterval(function () {
        console.log(progressDirection, progressVal);

        if (progressDirection > 0 && progressVal < 100) {
            progressVal += progressStep;
            $('progress').val(progressVal);
        } else if (progressDirection < 0 && progressVal > 0) {
            progressVal -= progressStep;
            $('progress').val(progressVal);
        } else if (progressVal == 100) {
            progressDirection = -1;
        } else if (progressVal == 0) {
            progressDirection = 1;
        }
    }, 500)
});