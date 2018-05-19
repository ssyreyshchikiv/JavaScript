// 1 Подключить стороннюю библиотеку для построения графиков.
// Построить график функции y = f(x):
// y = 5/x, при x>=1;
// y = x*x – 4*x, при x<1.
// Шаг варьирования x равен 0.01 и интервал варьирования -5 < x < 5.
// Расчёт функции y = f(x) реализовать в виде отдельной функции.


/*
function f(x){
				if (x >= 1)
					return 5 / x;
				else (x < 1)
					return x * x - 4 * x;
				
};
			
var line1 = [];
			
			for (var i = -5; i<=5; i+=0.01) {
				var j = [];
				j.push(i, f(i)); 
				line1.push([j]);
				
			}

var data = line1;

var options = {
    series: {
        lines: { show: true },
        points: { show: true}
    }
};

$.plot($("#placeholder"), data, options);
*/


// 2 Подключить стороннюю библиотеку для юнит тестирования.
// Написать несколько тестов для функции, рассчитывающей y = 1/x + sqrt(x).
/*
function test( x ) {
  return 1/ x + Math.sqrt(x);
}

QUnit.test( "test()", function( assert ) {
  var result = test( 2 );

  assert.equal( result, 	
1.9142135623730951, "test(2) equals 1.9142135623730951" );
});

QUnit.test( "testfals()", function( assert ) {
  var result = test( 0 );

  assert.equal( result, 0, "test(2) equals / 0" );
});

QUnit.test( "testfals()", function( assert ) {
  var result = test( -1 );

  assert.equal( result, -1, "test(2) equals sqrt(-x) " );
});
*/


// 3 Написать свою подключаемую js библиотеку для работы с массивом, хранящим целые числа.
// Библиотека должна обладать следующими методами:
// - поиск минимального элемента в переданном массиве;
// - поиск максимально элемента в переданном массиве;
// - расчет среднего арифметического значения элементов переданного массива;
// - создание копии (клонирование) переданного массива.
/*
var myLib = function(){
	var myObj = {};
	
	myObj.min = function(array){
		return Math.min(...array)

	};

	myObj.max = function(array){
		return Math.max(...array)

	};
	
	
	myObj.mean = function (array) {
    if (array.length == 0)
        return 0;
    var sum = 0;
    for (var i in array) sum += array[i];
    
    return sum / array.length;
}
	
	myObj.clone = function(array){
		
		return [...array];		
	}
	
	return myObj;
};

var lib = myLib();

console.log(lib.min([1, 2, -1, 3, 4, 5]));
console.log(lib.max([1, 2, -1, 3, 4, 5]));
console.log(lib.mean([1, 2, -1, 3, 4, 5]));
*/


// 4** Написать кодер для шифра Цезаря (https://ru.wikipedia.org/wiki/Шифр_Цезаря). 
// На вход принимается строка и сдвиг (число). На выход - зашифрованное/расшифрованное сообщение.
// Пример работы шифра Цезаря можно увидеть здесь: https://planetcalc.com/1434/
// Примеры данных для тестирования:
// 1) Зашифрованное сообщение: 
// "Gur pyrnare naq avpre gur cebtenz, gur snfgre vg'f tbvat gb eha. Naq vs vg qbrfa'g, vg'yy or rnfl gb znxr vg snfg." 
// Сдвиг: -13. 
// Расшифрованное сообщение: 
// "The cleaner and nicer the program, the faster it's going to run. And if it doesn't, it'll be easy to make it fast."
// 2) Исходное сообщение: 
// "There is no programming language, no matter how structured, that will prevent programmers from making bad programs.’ 
// Сдвиг: 25. 
// Зашифрованное сообщение: "Sgdqd hr mn oqnfqzllhmf kzmftzfd, mn lzssdq gnv rsqtbstqdc, sgzs vhkk oqdudms oqnfqzlldqr eqnl lzjhmf azc oqnfqzlr."
var string = "There is no programming language, no matter how structured, that will prevent programmers from making bad programs.";
var offset = 25; 

function cipher (str, offs) {
	var out = "";
	offs %= 26;
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		
		if (code >= 65 && code <= 90) {
			code = code + offs;
			if(code < 65) {
				code += 26;
			}

			out += String.fromCharCode(( code - 65) % 26 + 65);

		} else if(code >= 97 && code <= 122) {
			code = code + offs;
			if (code < 97) {
				code += 26;
			}

			out += String.fromCharCode(( code - 97) % 26 + 97);

		} else out += str[i];
	    
		}
	console.log(out);
}

cipher(string, offset);
