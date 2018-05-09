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
