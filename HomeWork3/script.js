// 1 Дана строка, изображающая целое число. 
// Вывести сумму цифр этого числа. 

/*
var num = prompt("Введите целое число");
var i = 0;
var sum = 0;


while (i < num.length) {
		sum = sum + parseInt(num[i]);
	 	i++;
	 	if (isNaN(sum)) {
	 		break;
	 	}	
}

if (isNaN(sum)) {
	alert("Попробуйте еще раз!")
} else {
	alert(sum);
};
*/

// 2 Дана строка S и символ C. 
// Удвоить каждое вхождение символа C в строку S.
/*
var s = prompt("Введите строку").toLowerCase();
var c = prompt("Введите символ").toLowerCase();
var i = 0;
var str = " ";

while (i < s.length) {
	if (s[i] === c) {
		str = s[i] + c;
	} else {
		str += s[i];
	}
	i++;
}
alert(str);

*/

// 3 Проверить что введенный пароль удовлетворяет 
// следующим условиям сложности:
// 	- длинна от 9 символов;
// 	- содержит обязательно английские буквы верхнего 
// 	и нижнего регистра;
// 	- содержит более двух цифр;
// 	- содержит обязательно один из неалфавитных 
// 	символов (например, !, $, #, %).

var password = prompt("Введите пароль");

if (password.length < 9) {
	alert("Пароль должен быть не меньше 9 символов");
} else if (password.match(/(?=.*[a-z])(?=.*[A-Z])/g) === null) {
	alert("Должны быть латинские буквы");
} else if (password.match(/(.*\d){3}/g) === null) {
	alert("Должно быть больше двух цифр");
} else if (password.match(/.*[!$#%]/g) === null) {
	alert("Пароль должен содержать !, $, #, %");
} else {
	alert("Пароль введен корректно");
}