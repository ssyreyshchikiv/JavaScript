// Вот этот код выводит приветсвие в консоль

console.log("Hello world123");

/*
Здесь будет многострочный коментарий


*/

// Переменная - это контейнер для хранения информации

/*
	Правила именования переменных:
	-латиница
	-нет пробелов
	-цифры разрешены, но начинаться с цифры не может
	-с маленькой буквы
	-не должны быть зарезервированными словами: if, for, var
	- спец символы нельзя: *,
	-но можно: _
*/

/*
	Тип данных - браузер понимает:
	 КАК хранитЬ (памяти),
	 КАКИЕ операции возможны на этими данными

	 Какие типы данных бывают:
	 	- числа: 1, 2.0
	 	- строки: 'axcv', "asdf", `dfgf`
	 	- логические: true? false
	 	-undefind: 
	 	-null:
	 	-Объекты:
	 		-массивы
			-функции
			-объекты
			-...
*/

// var var1 = 10;
// console.log(var1); //10

// var1 = "Привет мир";
// console.log(var1); //Привет мир

// var1 = true; 
// console.log(var1);//true


// console.log(typeof var1);

// var num = prompt('Введите число', '0');
// num = parseInt(num);
// num = parseFloat(num);
// console.log(num);
// console.log(typeof num);

// var flag = Boolean(num);
// console.log(flag);




var login = prompt('Введите логин');

if (login === "Админ") {
	// alert("Добро пожаловать");
	var pass = prompt("Введите пароль");

	if (pass === "Пароль") {
		alert("Добро пожаловать");
	} else {
	alert("Я вас не знаю");
	}
} else {
	alert("Я вас не знаю");
}