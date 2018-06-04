// var start = true;
var timerId;
var timerId2;
var timerId3;
var timerId3;
// var game = true;

var gameWidth = document.querySelector(".container").clientWidth;
var gameHeight = document.querySelector(".container").clientHeight;
var fadeDiv = document.querySelector(".fade");
var buttonStart = document.getElementById("start");

var dog = document.querySelector(".dog");
var duck = document.querySelector(".duck");
	// duck.style.transition = "transform 3s linear";

function dogWalk() {
	dog.classList.add("dog_walk");
	dog.style.transform = "translate(" + gameWidth/4 + "px, 0px)";
};

function dogSniff() {
	dog.classList.remove("dog_walk");
	dog.classList.add("dog_sniff");
};

function dogJump() {
	dog.classList.remove("dog_sniff");
	dog.classList.add("dog_jump");
};

// dogWalk();
// setTimeout(dogSniff, 8000);
// setTimeout(dogJump, 10000);

function duckFlyLeft() {
	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_fly_left");
	duck.style.transform = "translateX(0px)";
};

function duckFlyRight() {
	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_fly_right");
	duck.style.transform = "translateX(" + (gameWidth - duck.offsetWidth) + "px";
};

function duckFlyLeftTop() {
	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_fly_top_left");
	duck.style.transform = "translate(0px, -" + gameHeight + "px)";
};

function duckFlyRightTop() {
	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_fly_top_right");
	duck.style.transform = "translate(" + (gameWidth - duck.offsetWidth) + "px, -" + gameHeight + "px)";
};


function randomFrom(array) {
	return array[Math.floor(Math.random() * array.length)];
};


function randomchords() {
    var func = randomFrom([duckFlyLeft, duckFlyRight, duckFlyLeftTop, duckFlyRightTop]);
    (func)();
};

function messageCancelGame() {
	fadeDiv.style.display="block";
	buttonStart.style.display = "none";
	setTimeout(function() {
		alert("Вы проиграли, утка улетела");
	},200);
};

function reloaded() {
	location.reload();
}

function duckFlyForGood() {
	timerId2 = setTimeout(duckFlyLeftTop, 24000);
};

function messageGameOver() {
	timerId3 = setTimeout(messageCancelGame, 27000);
};

function reloadedGame() {
	timerId4 = setTimeout(reloaded, 27500);
};
// buttonStart.addEventListener("click", game);
// Создать функцию, которая будет запускать gameStart с аргументом

function gameStart() {
	fadeDiv.style.display="none";
	dogWalk();
	setTimeout(dogSniff, 8000);
	setTimeout(dogJump, 10000);
	setTimeout(duckFlyRight, 11000);
	setTimeout(function() {
		timerId = setInterval(randomchords, 1000);
	}, 12000);
	setTimeout(function() {
		clearInterval(timerId);
	}, 23000);
	duckFlyForGood(); 
	messageGameOver();
	reloadedGame();
	// location.reload();
	

	// let game = false;
	// if (game === false) {
	// 	alert("Вы проиграли");
	// }
	// Перезагрузка игры
	// // location.reload();
}



 
// setTimeout(function() {
// 	timerId = setInterval(randomchords, 1000);
// }, 12000);
 



 function duckShort() {
 	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_shot");
	clearInterval(timerId);
	clearInterval(timerId2);
	clearInterval(timerId3);
	clearInterval(timerId4);
	setTimeout(duckDie, 200);
};

function duckDie() {
	duck.className = "duck";
	duck.classList.add("duck_fly");
	duck.classList.add("duck_dead");
	// duck.style.transform = "none";
	// duck.style.transform = "translateY(0px)";
	fadeDiv.style.display="block";
	duck.style.display = "none";
	buttonStart.style.display = "none";
	setTimeout(function() {
		alert("Поздравляем, вы попали в утку!");
		setTimeout(location.reload(), 500);
	},200);
	// location.reload();
};

 buttonStart.addEventListener("click", gameStart);
 duck.addEventListener("click", duckShort);


