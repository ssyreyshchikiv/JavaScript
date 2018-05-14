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
console.log(lib.clone([1, 2, -1, 3, 4, 5]));