// Объекты и функции:

// 1 Построить объект студент со свойствами:
// Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// Написать отдельную функцию, которой передается объект студент, 
// а она выводит его содержимое.
/*
var obj = {

	name : "Ivan",
	surname : "Ivanov",
	age : 20,
	interest : ["foto", "design", "drawing"],
	placeOfTraining : "Institute of design"

};

function objKey (object) {
	for(key in obj) {
		if(typeof obj[key] === "object" && obj[key] instanceof Object) {
				var subobj = obj[key];
				for(var key2 in subobj){
					console.log(key + " : "  + subobj[key2]);
			}
		} else {
			console.log(key + " : " + obj[key]);
		}
	}
	
}

objKey(obj);
*/

// Массивы, циклы, условия:

// 2 Заданы два массива A и B необходимо их объединить 
// в один массив C так, чтобы в массиве остались уникальные 
// (неповторяющиеся) элементы. 
// Например: A = [1,2], B = [2,3] получим С = [1, 2, 3].
/*
var A = [1, 2];
var B = [2, 3];
var C = A.concat(B);

i = C.length;
while (i--) {
    if (C[i] === C[i - 1]) {
        C.splice(i, 1);
    }
}


console.log(C);
*/

// Функции:

// 3 Написать отдельную функцию, которая выводит пользователю 
// заданное число чисел Фибоначчи. 
// (например, первых 8 чисел Фибоначчи:  1, 1, 2, 3, 5, 8, 13, 21). 
// Заданное число передается функции в качестве аргумента. 
// Про числа Фибоначчи: https://ru.wikipedia.org/wiki/Числа_Фибоначчи


/*
function fibo(num) {
	var a = 1;
	var b = 1;
	var fibo = [a, b];
	for (var i = 3; i <= num; i++) {
		var c = a + b;
		a = b;
		b = c;
		fibo.push(b);
	}
	return fibo;
}

console.log(fibo(8));
*/

// 4** Напишите функцию counter, которая возвращает количество дней, 
// часов и минут до нового года. Датой наступления нового года считается 
// 1 января. Функция должна вернуть строку вида: "14 дней 21 час 46 минут"
// Нужно реализовать корректные окончания слов, например: 1 день, 2 дня, 
// 5 дней. Функция должна корректно работать при запуске в любом году, 
// т. е. грядущий год должен вычисляться программно. 

function daysLeftNewYear() { 
	var today = new Date();
 //  Задаем дату следующего нового года
 	var nextYearDate = new Date(new Date().getFullYear() + 1, 0, 1);

//Высчитываем количество дней, часов, минут, секунд, миллисекунд
 	var diffInSeconds = Math.abs(nextYearDate - today) / 1000;
	var days = Math.floor(diffInSeconds / 60 / 60 / 24);
	var hours = Math.floor(diffInSeconds / 60 / 60 % 24);
	var minutes = Math.floor(diffInSeconds / 60 % 60);
	var seconds = Math.floor(diffInSeconds % 60);
	var milliseconds = Math.round((diffInSeconds - Math.floor(diffInSeconds)) * 1000);
 	 

 // Определяем правильность написания дней
 	
 	dayName = "";
 	ds = "" + days;
  //Вырезаем последнею цифру
 	dd = parseInt(ds.substr(ds.length - 1));
 //Определяем правильность написания
 	if(days > 4 && days < 21) {
 		dayName = " дней";
 	} else if (dd === 1) {
 		dayName = " день";
 	} else if (dd === 2||dd === 3||dd === 4) {
 		dayname = " дня";
 	} else {
 		dayName = " дней";
 	}


 // Определяем правильность написания часов
 	hoursName = "";
 	hs = "" + hours;
 	//Вырезаем последнею цифру
 	hd = parseInt(hs.substr(hs.length - 1));
 	//Определяем правильность написания
 	if(hours > 4 && hours < 21) {
 		hoursName = " часов";
 	} else if (hd === 1) {
 		hoursName = " час";
 	} else if (hd === 2||hd === 3||hd === 4) {
 		hoursName = " часа";
 	} else {
 		hoursName = " часы";
 	}


// Определяем правильность написания минут

	minutesName = "";
 	ms = "" + minutes;
 	//Вырезаем последнею цифру
 	md = parseInt(ms.substr(ms.length - 1));
 	//Определяем правильность написания
 	if(minutes > 4 && minutes < 21) {
 		minutesName = " минут";
 	} else if (md === 1) {
 		minutesName = " минута";
 	} else if (md === 2||md === 3||md === 4) {
 		minutesName = " минуты";
 	} else {
 		minutesName = " минут";
 	}

 	// Определяем правильность написания секунд

	secondsName = "";
 	ss = "" + seconds;
 	//Вырезаем последнею цифру
 	sd = parseInt(ss.substr(ss.length - 1));
 	//Определяем правильность написания
 	if(seconds > 4 && seconds < 21) {
 		secondsName = " секунд";
 	} else if (sd === 1) {
 		secondsName = " секунда";
 	} else if (sd === 2||sd === 3||sd === 4) {
 		secondsName = " секунды";
 	} else {
 		secondsName = " секунд";
 	}
	// Определяем правильность написания миллисекунд

	millisecondsName = "";
 	mis = "" + milliseconds;
 	//Вырезаем последнею цифру
 	mid = parseInt(mis.substr(mis.length - 1));
 	//Определяем правильность написания
 	if(milliseconds > 4 && milliseconds < 21) {
 		millisecondsName = " миллисекунд";
 	} else if (mid === 1) {
 		millisecondsName = " миллисекунда";
 	} else if (mid === 2||mid === 3||mid === 4) {
 		millisecondsName = " миллисекунды";
 	} else {
 		millisecondsName = " миллисекунд";
 	}

 //Выводим надпись в документ
 document.write("До нового года осталось "+ days + dayName + " " + hours + hoursName + " " + 
 minutes + minutesName + " "  + seconds + secondsName + " " + milliseconds + millisecondsName + " !!!");
}

daysLeftNewYear();