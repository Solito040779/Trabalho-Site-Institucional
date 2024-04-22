$(document).ready(function() {
    $(window).scroll(function() {
        var sections = $('section');
        var windowHeight = $(window).height();

        sections.each(function() {
            var positionFromTop = $(this).offset().top;

            if (positionFromTop - windowHeight < 0) {
                $(this).addClass('active');
            }
        });
    });
});