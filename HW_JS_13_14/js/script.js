"use strict";

var obj = {

header: "ТЕСТ ПО ПРОГРАММИРОВАНИЮ",

questions:[
    {title:"Вопрос №1",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:3
    },
    {title:"Вопрос №2",
      chekboxName:["one","two","three"],
     id:["1","2","3"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:2
    },
    {title:"Вопрос №3",
      chekboxName:["one","two","three"],
      id:["1","2","3"],
      answers:["Вариант ответа №1","Вариант ответа №2","Вариант ответа №3"],
      correct:1
    }
    ]
  };

var sObj = JSON.stringify(obj);
localStorage.setItem("object", sObj);

var retObj = JSON.parse(localStorage.getItem("object"));
var html = $('#test').html();
var content = tmpl(html,retObj);
$("body").append(content);

function showModal(e){
     e.preventDefault();
     var modal = $("<div class='modal'></div>");
     var result = 0;
     var answer = $('input:checked');
     var correct = [];

     for (var i=0; i<retObj.questions.length;i++){
          correct[i] = retObj.questions[i].correct;
          if($(answer[i]).attr('id')==correct[i]){
          result+=1;
          modal.append('<p class="correct">Ответ на '+ (i+1)+' вопрос правильный</p>');
     } else {
          modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос неправильный</p>');
     }
 }
modal.append('<button>Повторить тест</button>');
$('body').append(modal);

$('button').one('click',function(e){
     e.preventDefault();
     modal.detach();
     $('input').attr('checked', false);
  })
 }
$('button').on('click',showModal);
