$(function() {

    $('.carousel').jcarousel({
        wrap: 'circular',
        animation: {
            duration: 1000,
            easing: 'easeInOutExpo'
        }
    }).jcarouselAutoscroll({
        interval: 5000
    });

    $('.prev').jcarouselControl({
        target: '-=1'
    })

    $('.next').jcarouselControl({
        target: '+=1'
    })

    $('.join-header').typeIt({
      whatToType: ['A jQuery plugin that types stuff for you.'],
      typeSpeed: 1000,
      startDelay: 5050
    })

    $('.styled').customSelect();
    $(".sex").mousedown( function() {
         changeCheck($(this));
    });
    $(".sex").each(
    function() {
         changeCheckStart($(this));
    });

    function changeCheck(el) {
         var el = el,
            input = el.find("input").eq(0);
       	 if(!input.attr("checked")) {
    		el.css("background-position","0 -17px");
    		input.attr("checked", true)
    	} else {
    		el.css("background-position","0 0");
    		input.attr("checked", false)
    	}
         return true;
    }
    function changeCheckStart(el) {
    var el = el,
    		input = el.find("input").eq(0);
          if(input.attr("checked")) {
    		el.css("background-position","0 -17px");
    		}
         return true;
    }

    $('a.subscription').click( function(event){
        event.preventDefault();
        $('.overlay').fadeIn(400,
            function(){
                $('.modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'});
        });
    });
    $('.modal_close, .overlay').click( function(){
        $('.modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                }
            );
    });
});

function menu() {
    var link = document.getElementsByClassName('dropdown')[0];
    link.addEventListener("mouseenter", openMenu);
    link.addEventListener("mouseleave", closeMenu);
    function openMenu() {
        var linkShow = this.getElementsByClassName('sub-menu')[0];
        if (linkShow) {
            linkShow.style.display = 'block';
            var nextLink = this.getElementsByClassName('dropdown')[0];
        if (nextLink) {
            nextLink.addEventListener("mouseenter", openMenu);
            }
        }
    }
    function closeMenu() {
        var linkHide = this.getElementsByClassName('sub-menu')[0];
            if (linkHide) {
                var fps = 60;
                var interval = setInterval(function(){
                    if(!linkHide.style.opacity){
                        linkHide.style.opacity = 1;
                    }
                    linkHide.style.opacity = linkHide.style.opacity - 0.05;
                    if(linkHide.style.opacity <= 0) {
                        clearInterval(interval);
                        linkHide.style.opacity = 1;
                        linkHide.style.display = 'none';
                    }
                }, 1000 / fps)
            }
        var nextLink = this.getElementsByClassName('dropdown')[0];
            if (nextLink) {
                nextLink.addEventListener("mouseleave", closeMenu)
            }
    }
}
document.addEventListener('DOMContentLoaded', menu);
