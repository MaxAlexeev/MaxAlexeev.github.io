$(function() {
    $('.tooltip').each(function() {
        $(this).hide();
        $(this).parent().hover(function() {
            $(this).find('.tooltip').fadeIn(500);
        }, function() {
                $(this).find('.tooltip').fadeOut(400);
            });
            $('.btn').click(function() {
                $('.tooltip').fadeToggle(400);
                $(this).toggleClass('btn-res');
            });
    });
});
