'use strict';

$(function() {

	var data = {
		header: 'Тест по программированию',
		questions: [{
			question: 'Вопрос №1',
			name: 'question_1',
			id:['1','2','3'],
			answers: ['Вариант ответа № 1','Вариант ответа № 2', 'Вариант ответа № 3'],
			correct: 1
		},
		{
			question: 'Вопрос №2',
			name: 'question_2',
			id:['4','5','6'],
			answers: ['Вариант ответа № 1','Вариант ответа № 2', 'Вариант ответа № 3'],
			correct: 5
		},
		{
			question: 'Вопрос №3',
			name: 'question_3',
			id:['7','8','9'],
			answers: ['Вариант ответа № 1','Вариант ответа № 2', 'Вариант ответа № 3'],
			correct: 9
		}],
		button: 'Ок'
	};

var template = $('#test').html();
var content = tmpl(template, data);
$('.wrapper').append(content);

localStorage.setItem('programming_test', JSON.stringify(data));
var getTest = JSON.parse(localStorage.getItem('programming_test'));

function test() {
	var totalQuestions = 3;
	var result = 0;
	var answerChecked = $('input:checked');
	var correctAnswer = [];

	for (var i = 0; i < getTest.questions.length; i++) {
		correctAnswer[i] = getTest.questions[i].correct;
		if ($(answerChecked[i]).attr('id') == correctAnswer[i]) {
			result ++;
    	}
	}

	if (result == getTest.questions.length) {
		$('#modal-text').append('Тест пройден');
	} else if (result == 0) {
		$('#modal-text').append('Дайте ответы на все вопросы');
	} else {
		$('#modal-text').append('Тест не пройден. Ваш результат '+ result + ' из ' + totalQuestions);
	}
};

$("#modal-launcher, #modal-background, #modal-close, #modal-try_again").on('click', function () {

	$("#modal-background").toggleClass("active");
	$('#modal-content').slideToggle(200);
	$('#modal-text').empty();

	$('#modal-try_again').one('click', function (e) {
		e.preventDefault();
		$('#modal-text').empty();
		$('input').attr('checked', false);

	});
});

$("#modal-launcher").on('click', test);

});
