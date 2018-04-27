// Задачи

// 1. 
// Из трех данных чисел выбрать наименьшее.


var number1 = parseInt(prompt("Введите первое число"));
var number2 = parseInt(prompt("Введите второе число"));
var number3 = parseInt(prompt("Введите второе число"));

if (number1 < number2 && number1 < number3 && true) {
	alert("Наименьшее число " + number1);
} else if (number1 > number2 && number2 < number3 && true) {
	alert("Наименьшее число " + number2);
} else if (number1 > number3 && number2 > number3 && true) {
	alert("Наименьшее число " + number3);
} else if(number1 === number2 && number2 < number3) {
	alert("Первые два числа меньше третьего");
} else if(number1 === number3 && number3 < number2) {
	alert("Первое и третье число меньше второго");
} else if (number2 === number3 && number2 < number1) {
	alert("Второе и третье число меньше первого");
} else if (number1 === number2 && number1 === number3) {
	alert("Все три числа ранвые");
} else {
	alert("Попробуйте еще раз!");
};



// 2.
// Дано целое число, лежащее в диапазоне от -999 до 999. 

// Вывести строку - словесное описание данного числа вида 

// "отрицательное двузначное число", 
// "нулевое число", 

// "положительное однозначное число" и т.д.


var number = parseInt(prompt("Введите число от -999 до 999"));

if (number < -999 || number > 999) {
	alert("Вы ввели число которое не входит в диапазон. Попробуйте еще раз");
} else if (number <= -100) {
	alert ("Отрицательное трехзначное число");
} else if (number < -10) {
	alert ("Отрицательное двухзначное число");
} else if (number < 0) {
	alert ("Отрицательное однозначное");
} else if (number === 0) {
	alert ("Нулевое число");
} else if (number < 10 ) {
	alert ("Положительное однозначное число");
} else if (number < 100) {
	alert ("Положительное двухзначное число");
} else if (number <= 999) {
	alert ("Положительное трехзначное число");
} else {
	alert ("Попробуйте еще раз");
};


// 3. 
// Дано целое число в диапазоне 
// 0 - 9. 

// Вывести строку - название соответствующей цифры 
// на русском языке 
// (0 - "ноль", 1 - "один", 2 - "два", ...).


var number = parseInt(prompt("Введите число от 0 до 9"));

if (number < 0 || number > 9) {
	alert("Вы ввели число которое не входит в диапазон. Попробуйте еще раз");
} else if ( number === 0) {
	alert ("ноль");
} else if ( number === 1) {
	alert ("один");
} else if ( number === 2) {
	alert ("два");
} else if ( number === 3) {
	alert ("три");
} else if ( number === 4) {
	alert ("четыре");
} else if ( number === 5) {
	alert ("пять");
} else if ( number === 6) {
	alert ("шесть");
} else if ( number === 7) {
	alert ("семь");
} else if ( number === 8) {
	alert ("восемь");
} else if ( number === 9) {
	alert ("девять");
} else {
	alert ("Попробуйте еще раз");
};


// 4.
// Дано целое число в диапазоне 1 - 5. 
// Вывести 
// строку - словесное описание соответствующей 
// оценки 
// (1 - "плохо", 
// 2 - "неудовлетворительно", 

// 3 - "удовлетворительно", 
// 4 - "хорошо", 
// 5 - "отлично").

var number = parseInt(prompt("Введите число от 0 до 5"));

if (number < 1 || number > 9) {
	alert("Вы ввели число которое не входит в диапазон. Попробуйте еще раз");
} else if ( number === 1) {
	alert ("плохо");
} else if ( number === 2) {
	alert ("неудовлетворительно");
} else if ( number === 3) {
	alert ("удовлетворительно");
} else if ( number === 4) {
	alert ("хорошо");
} else if ( number === 5) {
	alert ("отлично");
} else {
	alert ("Попробуйте еще раз");
};


// 5.
// Проверить истинность высказывания: 

// "Среди трех данных целых чисел есть хоть 
// бы одна пара совпадающих".

// Требуется вывести логическое значение True, 
// если 
// приведенное высказывание для предложенных исходных 
// данных 
// является истинным, и значение False в противном случае.

var number1 = parseInt(prompt("Введите первое число"));
var number2 = parseInt(prompt("Введите второе число"));
var number3 = parseInt(prompt("Введите второе число"));

if (number1 === number2 || number2 === number3 || number1 === number3) {
	alert("Среди трех данных целых чисел есть хоть бы одна пара совпадающих. " + true);
} else {
	alert("Среди трех данных целых чисел есть хоть бы одна пара совпадающих. " + false);
};

