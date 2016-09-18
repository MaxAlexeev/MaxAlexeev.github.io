// var test = {
//     header: '<h3>Тест по программированию</h3>',
//     question: ['Вопрос №1', 'Вопрос №2',' Вопрос №3'],
//     checkboxname: ['checkbox-one', 'checkbox-two', 'checkbox-three',
//                    'checkbox-four', 'checkbox-five', 'checkbox-six',
//                    'checkbox-seven', 'checkbox-eight', 'checkbox-nine'],
//     id: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
//     answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
//             'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3',
//             'Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
//     submit: 'Проверить мои результаты'
// }
// var s = 0;
//
// var wrapper = document.createElement('div');
// var parent = document.body;
// wrapper.className = 'row-fluid';
// parent.appendChild(wrapper);
//
// var grid = document.createElement('div');
// wrapper.appendChild(grid);
// grid.className = 'container';
//
// var header = document.createElement('header');      //header
// grid.appendChild(header);
// header.innerHTML = test.header;
//
// var main = document.createElement('main');      //main
// grid.appendChild(main);
//
//     var form = document.createElement('form');      //ol
//     main.appendChild(form);
//     var ol = document.createElement('ol');
//     form.appendChild(ol);
//     form.action = '#BITCH';
//
//         for (i = 0; i < test.question.length; i++) {        //li
//             var li = document.createElement('li');
//             ol.appendChild(li);
//             var h5 = document.createElement('h5');
//             h5.innerHTML = test.question[i];
//             li.appendChild(h5)
//
//             for (j = 0; j < 3; j++) {       //input
//
//                 var p = document.createElement('p');        //p
//                 li.appendChild(p);
//
//                 var checkbox = document.createElement('input');     //checkbox
//                 p.appendChild(checkbox);
//                 checkbox.type = 'checkbox';
//                 checkbox.name = test.checkboxname[s];
//                 checkbox.id = test.id[s];
//
//                 var label = document.createElement('label');        //label
//                 label.htmlFor = test.id[s];
//                 label.className = 'textbox';
//                 label.appendChild(document.createTextNode(test.answer[s]));
//                 p.appendChild(label);
//                 s++;
//             }
//         }
//
//     var div = document.createElement('div');        //div
//     form.appendChild(div);
//     div.className = 'button--config';
//
//         var button = document.createElement('button');       //button
//         button.type = 'submit';
//         button.className = 'btn';
//         button.innerHTML = test.submit;
//         div.appendChild(button);

'use strict;'

var data = [
		{
			question: 'Вопрос №1',
			answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
			correctAnswer: 1
		},
		{
			question: 'Вопрос №2',
			answers: ['Вариант ответа №4', 'Вариант ответа №5', 'Вариант ответа №6'],
			correctAnswer: 5
		},
		{
			question: 'Вопрос №3',
			answers: ['Вариант ответа №7', 'Вариант ответа №8', 'Вариант ответа №9'],
			correctAnswer: 9
		}

]

localStorage.setItem('data', JSON.stringify(data));

var storage = localStorage.getItem('data');

var storage = JSON.parse(storage);

console.log(storage)

var html = $('#html').html();

var tmpl = _.template(html, data);

$('body').append(tmpl);

var answer,
 	score = 0,
	modal = $('#resultModal'),
	head = $('#myModalLabel');


$('#checkButton').click(function() {

	var userAnswer = $('input:checked').map(function(){
		return $(this).attr('id');
	})

	for(var i=0; i<userAnswer.length;i++) {
		if (userAnswer[i] != storage[i].correctAnswer) {
			answer = '<p class="bg-danger"> Ответ на ' + storage[i].question + ' -  неправильный! попробуйте ещё раз</p>';
		} else {
			answer = '<p class="bg-success"> Ответ на ' + storage[i].question + ' - правильный!</p>';
			score++;
		}

	modal.append(answer);

	}

	if (score < 3) {
		head.html('<p> Тест не сдан! </p>')
	} else {
		head.html('<p> Поздравляем! Вы успешно сдали тест! </p>')
	}

});


$('#retryBtn').click(function(){
	modal.html('');
	$('input:checked').removeAttr('checked');
	head.html('');
	score = 0;
})
