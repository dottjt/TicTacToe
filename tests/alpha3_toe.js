// further testing by breaking things down. 
var determineWinner = function() {
	for (var i in combination) {
		var tmp = combination[i].toString();
		console.log(combination[i]);
		if (tmp === "1,1,1" || tmp === "1,1,1,1") {
			alert("You win this round!");
		}
	}
};

var combination = { 
	h1: [0,0,0]
};

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');

var t3Event = t3.addEventListener('click', function() {t3E(p)}, false);
var t2Event = t2.addEventListener('click', function() {t2E(p)}, false);
var t1Event = t1.addEventListener('click', function() {t1E(p)}, false);

//////////////////////////////

var buffer = [true,false,true,false,true,false,true,false,true]



// maybe seperate three. 
	for (var i = 0; i < buffer.length; i++) {

	// event function
		if (buffer[i] === true) {
			var p = "X";
		} else {
			var p = "O";
		};

//Okay, here is the main logical issue I'm facing. 
//I'm trying to loop, but the problem is that it only stays at 1.
//I don't know how to hold state with loop. 
// 

		function t1E(p) {
			if (p === "X") {
				t1.innerHTML = "X";
				combination.h1[0] = 1;
			}
			else {
				t1.innerHTML = "O";
				combination.h1[0] = 2;
			}
			determineWinner();
		};
		function t2E(p) {
			if (p === "X") {
				t2.innerHTML = "X";
				combination.h1[1] = 1;
			}
			else {
				t2.innerHTML = "O";
				combination.h1[1] = 2;
			}
			determineWinner();
		};

		function t3E(player) {
			if (p === "X") {
				t3.innerHTML = "X";
				combination.h1[2] = 1;
			}
			else {
				t3.innerHTML = "O";
				combination.h1[2] = 2;
			}
			determineWinner();
		};
	};



// so the good thing is 
