// 1.
// Заданы два массива 
// A = [ 12, 4, 3, 10, 1, 20 ]  
// B = [-3, -7, -100, -33] 
// необходимо их объединить 
// в один массив C добавив 
// массив B в конец(в начало) A. 
/*
var A = [ 12, 4, 3, 10, 1, 20 ];
var B = [-3, -7, -100, -33];

var A = A.concat(B);
console.log(A);
*/

// 2.
// Одномерным массивом задана доска 3 на 3 
// var area = 
// [ null, null, null, null, null, null, null, null, null ]

// Необходимо сформировать игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 

// При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 

// Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.



/*
`<table><tbody><tr><th>№</th><th>№*2</th>
</tr>

<tr style="background-color:red;">
	<td>1</td><td>2</td>
</tr>
<tr style="background-color:green;">
	<td>2</td><td>4</td>
</tr>
<tr style="background-color:red;">
<td>3</td><td>6</td>
</tr><tr style="background-color:green;">
<td>4</td><td>8</td></tr></tbody></table>`
*/

/*
var arr = [ 1, null, 0, null, 1, null, null, null, null ];
var container = `<table>
		<tbody>
		<tr>`;
var i = 0;
while(i < arr.length && i < 3) {
	if(arr[i] === 1) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;
	} else if (arr[i] === null) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;"></td>`;
	} else if (arr[i] === 0) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;	
	}else {
		continue;
	}
	i++;
}
container += `</tr><tr>`;
while(i < arr.length && i < 6 && i > 2) {
	if(arr[i] === 1) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;
	} else if (arr[i] === null) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;"></td>`;
	} else if (arr[i] === 0) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;	
	}else {
		continue;
	}
	i++;
}
container += `</tr><tr>`;
while(i < arr.length && i <= 8 && i > 5) {
	if(arr[i] === 1) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;
	} else if (arr[i] === null) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;"></td>`;
	} else if (arr[i] === 0) {
		container += `<td style = "width: 25px; height: 25px; border: 1px solid black; text-align: center;">${arr[i]}</td>`;	
	}else {
		continue;
	}
	i++;
}

container += `</tr></tbody></table>`;
document.write(container);
*/

// 3.
// Задан массив  - [12,4,3,10,1,20]. 
// Удалить из него наименьшее и наибольшее значение.

/*var arr = [12,4,3,10,1,20];
var min = arr.indexOf(Math.min(...arr));
arr.splice(min, 1);

var max = arr.indexOf(Math.max(...arr));
arr.splice(max, 1);

console.log(arr);
*/


// 4. Задан массив - [12,4,3,10,1,20]. 
// Необходимо отсортировать его в порядке возрастания, 
// при этом не использовать готовый метод sort 
// и методы разобранные на занятии.
// Снабдите комментариями каждую строку.

// Quicksort

var arr = [12,4,3,10,1,20];

// Пишем функцию, котора бдует принимать наш массив
//  и возвращать отсортированный массив

var qsort = function(arr) {
	// при длине массива меньше 2х, возвращаем наш массив
	if(arr.length < 2) {
		return arr;
	} else {
		// определяем поворотную точку, где будем дробить массив
		// на две половины.
		// Вычисляем среднее значение, чтобы количество итераций было наименьшим.
		// если взять начальную точку за arr[0], количество итераций будет равно
		// длине массива.

		// таким образом получаем среднее значение, которое будет равномерно
		// распределено по длине массива
		var pivot = arr[Math.floor(Math.random() * arr.length)];

		// Дальше собираем массив из значений, которые меньше поворотной
		// точки
		var less = arr.filter(function(value) {
			return value < pivot;
		});

		// Дальше собираем массив из значений, которые больше поворотной
		// точки

		var greater = arr.filter(function(value) {
			return value > pivot;
		});

		// Осталось  собрать массив, который меньше мы пропускаем через quiksort меньшее, вставляем поворотную точку
		//  и дальше то что пропускаем через quiksort большее
		return [...qsort(less), pivot, ...qsort(greater)];
	}
	
};

console.log(qsort(arr));