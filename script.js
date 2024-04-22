$(document).ready(function() {
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        $('.fade').each(function() {
            var position = $(this).offset().top;

            if (position < scrollTop + windowHeight) {
                $(this).css('opacity', 1);
                $(this).css('transform', 'translateY(0)');
            } else {
                $(this).css('opacity', 0);
                $(this).css('transform', 'translateY(50px)');
            }
        });
    });
});