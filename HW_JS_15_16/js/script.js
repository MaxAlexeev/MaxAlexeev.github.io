//Request
$(function() {
  $('button').on('click', getAjax);
  function getAjax(e) {
    e.preventDefault();
     $('img').remove();
     var $picture = $('.text').val();
    $.ajax({
      url: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + $picture +"&tagmode=any&format=json&jsoncallback=?" +'&per_page=30',
      method:'GET',
      dataType: 'jsonp',
      success:function(data){
        $(".result").hide().html(data).fadeIn('fast');
        var $result = data.hits;
        $.each(data.items, function(i,item) {
        $("<img/>").attr("src", item.media.m).appendTo(".result");
   });
      },
      error:function(){
        alert('There is ERROR!');
      }
    });
  }
});

// Prototype
function Human() {
  this.name = "Ivan";
  this.age = 20;
  this.gender = "Male";
  this.height = 178;
  this.weight = 70;
}
var newHuman = new Human();
function Worker() {
  this.placeOfWork = "Some Company";
  this.salary = 200;
  this.work = function() {
    alert("To work");
  }
}
function Student() {
  this.placeOfStudy = "Some Univercity";
  this.scholarship = 100;
  this.watchSerials = function() {
    alert("To watch TV");
  }
}
Worker.prototype = newHuman;
Student.prototype = newHuman;
var man1 = new Worker();
var man2 = new Worker();
var man3 = new Student();
var man4 = new Student();
console.log(man1);
console.log(man2);
console.log(man3);
console.log(man4);
