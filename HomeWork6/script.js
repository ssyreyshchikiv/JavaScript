// Объекты и функции:

// 1 Построить объект студент:
// - свойства: Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
// - метод выводящий в консоль биографическую справку в виде, например: 
// «Иван Петров. 21 год. Интересы: программирование, музыка, аниме. Учится в ИТМО.
/*
var student = {
	name : "«Ivan",
	surname : "Ivanow",
	age : 20,
	interest : ["programming", "music", "anime"],
	university : "ITMO",
	info: function() { 
		console.log(`${this.name} ${this.surname} ${this.age}. Interest: ${this.interest}. Learn in ${this.university}`);
	}
};

student.info();*/

// Рекурсия:

// 2 Написать функцию вычисляющую факториал числа с использованием рекурсии.
// Факториал числа - это число, умноженное на себя минус один, затем на себя 
// минус два и так далее, до единицы. Обозначаетс n!
// Определение факториала можно записать как: 
// n! = n * (n - 1) * (n - 2) * ...*1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
/*
function fakt(n) {
	if ((n === 0) || (n === 1)) {
		return 1;
	} else if (n < 0) {
		return false;
	} else {
		return fakt(n - 1) * n;
	}
}

console.log(fakt(7));
*/

// 3 Сделайте функцию, каждый вызов который будет генерировать случайное число 
// от 1 до 100, но так, чтобы оно не повторялось, пока не будут перебраны все 
// числа из этого промежутка. Решите задачу через замыкания - в замыкании должен 
// хранится массив чисел, которые уже были сгенерированы функцией.  
/*
function getRand1_100 (x, y) {

	var arr = [];
	
	return function() {
		var rand;
		for (var i = 0; i < 100; i++) {
			var rand = Math.floor(Math.random() * y + x);
			if (arr.indexOf(rand) === -1) {
                arr.push(rand);
                return rand;
            } else {
            	i--;
            	continue;

            }
		}	
		
	}
	return console.log(arr);
}

var random = getRand1_100(1, 100);
console.log(random());
*/

function getRand1_100 (x, y) {

	var arr = [];
	
	return function() {
		var rand;
		while (true) {
			var rand = Math.floor(Math.random() * y + x);
			if (arr.indexOf(rand) === -1) {
                arr.push(rand);
                return rand;
            } 
		}	
		
	}
	return console.log(arr);
}

var random = getRand1_100(1, 100);
console.log(random());