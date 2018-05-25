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

function Article(name, price) {
	this.name = name,
	this.price = price
};

function ShoppingCart() {
	this._product = [];
	this._amount = 0;
	this._productSum = 0;

	this.addProduct = function(newP) {
		this._product.push(newP);
		this._amount++;
		this._productSum += newP.price;
	}

	this.getReturnSum = function() {
		return this._productSum;
	}

	this.getAmount = function() {
		return this._amount;
	}
}

var prod = new Article("phone", 100);
var prod2 = new Article("tv", 150);
var prod3 = new Article("audio", 75);

var cart = new ShoppingCart();

cart.addProduct(prod);
cart.addProduct(prod2);
cart.addProduct(prod3);

console.log(cart._product);
console.log(cart.getReturnSum());
console.log(cart.getAmount());


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
/*
function User(name) {
	this.say = function(){
		console.log('Моё имя ' + this.name);
	}	
};

User.anon = function UserAnon() {
	var user = new User;
	user.name = "Аноним";
	return user;
};

User.userSetar = function UserSetArg(userData) {
	var user = new User;
	user.name = userData.name;
	user.age = userData.age;
	return user;
};

var user1 = User.anon();
user1.say();

var user2 = User.userSetar({
  name: "Иван",
  age: 20
});
user2.say();*/