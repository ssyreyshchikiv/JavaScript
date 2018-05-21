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
