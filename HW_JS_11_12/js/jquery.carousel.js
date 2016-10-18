(function($) {
    $.fn.slider = function(options) {
        var defaults = {
            'auto': false,
            'cursor': false,
            'speedText': 400,
            'speed': 600,
            'autoSpeed': 5000
        }
        return this.each(function() {
            if (options) {
                $.extend(defaults, options);
            }

        var $left = $('.arrow-left');
        var $right = $('.arrow-right');
        var $list = $('.slider-list');
        var $listHeader = $('.slider-header');
        var $slideWidth = $('.slider-element').outerWidth();
        var $scrollSlider = $list.position().left - $slideWidth;

        $left.on('click', function(event){
            if(!$list.is(':animated')) {
                $list
                    .css({
                        'left': $scrollSlider
                    })
                    .find('.slider-element:last')
                    .prependTo($list)
                    .parent()
                    .animate({
                        left: 0
                    }, defaults.speed);
            }
            event.preventDefault();
        });

        $right.on('click', function(event) {
            if(!$list.is(':animated')) {
                $list.animate({
                    left: $scrollSlider
                }, defaults.speed, function(){
                    $list
                        .find('.slider-element:first')
                        .appendTo($list)
                        .parent()
                        .css({
                            'left': 0
                        });
                });
            }
            event.preventDefault();
        });

        $list.mouseover(function(){
                $listHeader.fadeIn(defaults.speedText).animate({left: '5%'},200);
            });
        $list.mouseout(function(){
                $listHeader.animate({left: '100%'},200).fadeOut(defaults.speedText).animate({left: '0'},100);
            });

        if (defaults.auto === true) {
            var timer = function() {
                if(!$list.is(':animated')) {
                 $list.animate({
                    left: $scrollSlider
                 }, defaults.speed, function(){
                  $list
                   .find('.slider-element:first')
                   .appendTo($list)
                   .parent()
                   .css({
                       'left': 0
                   });
                 });
                }
            };
            var interval = setInterval(timer, defaults.autoSpeed);

            if (defaults.cursor === true) {
                $list.hover(function() {
                    clearInterval(interval);
                }, function() {
                    interval = setInterval(timer, defaults.autoSpeed);
                });
            }

            $right.on('click', function() {
                clearInterval(interval);
                interval = setInterval(timer, defaults.autoSpeed);
            });
            $left.on('click', function() {
                clearInterval(interval);
                interval = setInterval(timer, defaults.autoSpeed);
            });
        }
    });
};
})(jQuery);
