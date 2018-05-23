// 1. Создать шаблон объектов «Товар».
// Свойства товара «Имя» и «Цена».
// Создать шаблон объектов «Корзина товаров». 
// Приватные свойства объекта:
// - Массив товаров;
// - Количество товаров;
// - Сумма товаров.
// Методы объекта:
// - Добавить товар;
// - Вернуть сумму товара;
// - Вернуть количество товара.
/*
function Article(name, price) {
	this.name = name,
	this.price = price
};

function ShoppingCart() {
	var _product = [];
	var _amount = 0;
	var _productSum = 0;

	this.addProduct = function(name, price) {
		Article.call(this, name, price);
		_product[this.name] = this.price;
		_amount++;
		_productSum += this.price;
	}

	this.getReturnSum = function() {
		return _productSum;
	}

	this.getAmount = function() {
		return _amount;
	}
}

var prod = new ShoppingCart();
prod.addProduct("phone", 100);
prod.addProduct("tv", 150);
prod.addProduct("audio", 75);

console.log(prod.getReturnSum());
console.log(prod.getAmount());
*/

/*2. Создать шаблон объектов «Человек».
Свойства «Имя», «Возраст», «Пол», «Интересы».
Метод преобразования к строке вида: «Человек: 
Иван. Возраст: 25 лет. Пол: м. Интересы: 
музыка, программирование.»
Создать шаблон объектов «Студент».
Свойства от наследованные от шаблона объектов 
«Человек» и добавить «Институт».
Переопределить метод преобразования к строке 
вида: «Студент: Иван. Возраст: 25 лет. Пол: м. 
Интересы: музыка, программирование. 
Обучается в ИТМО.»*/
/*
function Human(name, age, gender, ...interests) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.interests = [...interests];

	this.toString = function() {
    	return 'Человек: ' + this.name + ', ' + this.age + ', ' + this.gender + ', интересы: ' + this.interests;
  	}

};

function Student(name, age, gender, institute, ...interests) {
	Human.call(this, name, age, gender, ...interests);
	this.institute = institute;

	this.toString = function() {
    	return 'Студент: ' + this.name + ', ' + this.age + ', ' + this.gender + ', интересы: ' + this.interests + ', обучается в ' + this.institute;
  	}
};

var hum = new Human("Иван", 18, "м", "программирование", "музыка");
alert(hum.toString());
var stud = new Student("Иван", 18, "м", "ИТМО", "программирование", "музыка");
alert(stud.toString());
*/

// 3. Создать шаблон объектов «Пользователь».
// Метод преобразования к строке выводит имя пользователя.
// Два фабричных метода:
// - «Создать анонимного пользователя» не получает аргументов,
//  в качества имя пользователя устанавливает «Аноним».
// - «Создать пользователя из данных» в качества аргументов 
// получает объект с именем и возрастом пользователя.

function User(name) {
	this.name = name;
	this.toString = function(){
		return 'Моё имя ' + this.name;
	}	
};

function UserAnon() {
	User.call(this);
	this.toString = function(){
		return "Аноним";
	}
};

function UserSetArg(name, age) {
	User.call(this, name, age);
	this.name = name;
	this.age = age;
	this.toString = function(){
		return 'Моё имя ' + this.name + ', ' + this.age;
	}
};

var user = new User("Иван");
alert(user.toString());

var anon = new UserAnon();
alert(anon.toString());

var userSetArg = new UserSetArg("Петр", 20);
alert(userSetArg.toString());