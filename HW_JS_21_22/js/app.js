var app = {

    Test: function () {

        var a = 3;
        // = +prompt('введите число', (a)); //ввод числа
        var b = 3;
        // = +prompt('введите степень', (b)); //ввод степени
        //(a, b != 0) ?
        (result=Math.pow(a, b));
        //: alert ('False!'); //действие, исключая возведение в "0" степень
        console.log('result=', result);
        //alert('Result is: ' + result); //итоговое сообщение о результате
	   }
    }

module.exports = app;
