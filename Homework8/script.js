// 1. Создать функцию которая выводит время 
// в html и обновляет значения каждую секунду. 
// Время выводить в формате чч:мм:cc, при этом 
// часы, минуты и секунды отобразить разными цветами. 
/*
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

function clock () {
	var time = new Date();
	var h = time.getHours().toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();

	if (h.length < 2) {
		h = "0" + h;
	}

	if (m.length < 2) {
		m = "0" + m;
	}

	if (s.length < 2) {
		s = "0" + s;
	}

	hour.style.color = "blue";
	min.style.color = "orange";
	sec.style.color = "green";

	hour.textContent = h;
	min.textContent = m;
	sec.textContent = s;	

}

clock();
setInterval(clock, 1000);*/
	


// 2. Создать объект «Товар» включающий:
// - свойства, такие как фото, артикул, 
// описание и т.п.;
// - метод, которому при вызове передается 
// id пустого div элемента и в этот html 
// элемент данный метод создаст и внесёт 
// все необходимые html элементы, стили, 
// и содержание для отображения 
// всей информации хранящихся в свойствах 
// объекта о данном товаре. Дизайн оформления 
// информации в html о товаре – 
// это ваше творчество.
/*
var article = {
    name: "car",
    image: "img/cars.jpg",
    color: "red",
    power: "300HP",
    year: "2018",
    price: "250000$",
    vis: function() {
        document.getElementById("car").style.width = "300px";
        var img = document.createElement("img");
        img.src = this.image;
        img.style.width = "100%";
        document.getElementById("car").appendChild(img);
        spanAdd(this.name);
        spanAdd(this.color);
        spanAdd(this.power);
        spanAdd(this.year);
        spanAdd(this.price);
       	

       	function spanAdd(objElem) {
	        var span = document.createElement('span');
	        span.innerText = objElem;
	        span.style.display = "block";
	        document.getElementById("car").appendChild(span);
        }
    }

}
article.vis();*/

3. Создать светофор (красный, желтый, 
зелёный). Переключать цвет у светофора 
через каждые 2 сек сверху вниз и снизу вверх. 