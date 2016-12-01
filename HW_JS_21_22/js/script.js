var a = prompt('введите число', (a)); //ввод числа
var b = prompt('введите степень', (b)); //ввод степени
(a, b != 0) ? (result=Math.pow(a, b)) : alert ('False!'); //действие, исключая возведение в "0" степень
console.log('result=', result);
alert('Result is: ' + result); //итоговое сообщение о результате
