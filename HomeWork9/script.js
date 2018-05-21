// 1. Даны несколько div элементов на html.
// По первому нажатию на каждый div 
// он перекрашивается зеленым цветом, 
// при повторном нажатии перекрашивается 
// обратно и так далее каждый клик 
// происходит чередование цвета. 

/*
var elems = document.getElementsByTagName("DIV");
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener("click", changeColor);
}


function changeColor() {
	this.classList.toggle("greenbox");
}
*/


// 2. Реализовать счётчик нажатий на 
// кнопку: Дана кнопка внутри неё 
// записана цифра. При клике на 
// кнопку – её значение должно 
// увеличиваться на единицу.

/*
var elem = document.getElementById("btn");

var count = 0;
function counter() {
    count++;
    return this.textContent = count;		
};

elem.addEventListener("click", counter);
*/

// 3*. Изобразить клавиатуру и расположенные 
// на ней клавиши в виде html документа. 
// При нажатии клавиши пользователем 
// на клавиатуре, подсвечивать нажатую 
// клавишу на клавиатуре изображенной 
// в html и выводить нажатое значение.

// получаем код нажатой клавиши

	



document.onkeydown = function checkKeycode(e) {
	var writeDesk = document.getElementById("write");
	var li = document.getElementsByClassName("letter");
	var keycode = e.keyCode;
	writeDesk.textContent = String.fromCharCode(keycode).toLowerCase();

	for (var i = 0; i < li.length; i++) {
    	if(li[i].innerText == writeDesk.textContent) {
    		li[i].style.background="grey";
    	}
    }

};

document.onkeyup = function() {
	var li = document.getElementsByClassName("letter");
	for (var i = 0; i < li.length; i++) {
    		li[i].style.background="white";
    	}
}

