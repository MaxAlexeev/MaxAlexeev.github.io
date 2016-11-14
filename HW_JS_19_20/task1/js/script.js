$(window).load(function() {
  $('.carousel').jcarousel();
  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
    })
    .jcarouselPagination();

  $('.close-overlay').click(function(e) {
    e.preventDefault();
    e.stopPropogation();
    if ($(this).closest(".img").hasClass("hover")) {
      $(this).closest(".img").removeClass("hover");
    }
  });
  $(".img").mouseenter(function() {
      $(this).addClass("hover");
    })
    .mouseleave(function() {
      $(this).removeClass("hover");
    });

  var acc =  document.getElementsByClassName("accordion");
   var i;
   for (i=0;i<acc.length;i++){
     acc[i].onclick = function(){
       this.classList.toggle("active");
       this.nextElementSibling.classList.toggle("show");
     }
   }
});
