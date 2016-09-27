"use strict";

var ol;
var div;

var page = {

        addBootstrap1: function(elem){
            elem.classList.add('col-md-6');
            elem.classList.add('col-md-offset-3');
        },

        addBootstrap2: function(elem){
            elem.classList.add('col-xs-12');
        },

        wrapperElement: function(){
        div = document.createElement('div');
        div.classList.add('wrapper');
        document.body.appendChild(div);
        },

        headerElement: function (header_elem) {
          var h3 = document.createElement('h3');
          h3.innerHTML = header_elem;
          div.appendChild(h3);
          page.addBootstrap1(h3);
        },

        olElement: function () {
          ol = document.createElement('ol');
          div.appendChild(ol);
          ol.style.fontWeight = 'bold';
          ol.style.fontSize = '15px';
         },

          liElement: function  (li_elem) {
            var li = document.createElement('li');
            li.innerHTML = li_elem;
            ol.appendChild(li);
            page.addBootstrap2(li);
          },

          inputElement: function (label_elem) {
            var label = document.createElement('label');
            label.innerHTML = '<input type="checkbox">' + label_elem;
            ol.appendChild(label);
            page.addBootstrap2(label);
            label.style.fontSize = '12px';
          },

          buttonElement: function () {
              var button = document.createElement('button');
              button.innerHTML = 'Проверить мои результаты';
              button.classList.add('button');
              div.appendChild(button);
              page.addBootstrap1(button);
        },
      };

page.wrapperElement();
page.headerElement('Тест по программированию');
page.olElement();
page.liElement('Вопрос №1');

page.inputElement('Вариант ответа №1');
page.inputElement('Вариант ответа №2');
page.inputElement('Вариант ответа №3');

page.liElement('Вопрос №2');

page.inputElement('Вариант ответа №1');
page.inputElement('Вариант ответа №2');
page.inputElement('Вариант ответа №3');

page.liElement('Вопрос №3');

page.inputElement('Вариант ответа №1');
page.inputElement('Вариант ответа №2');
page.inputElement('Вариант ответа №3');

page.buttonElement();
