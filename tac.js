var determineWinner = function() {
	for (var i in combination) {
		var tmp = combination[i].toString();
		console.log(combination[i]);
		if (tmp === "1,1,1") {
			alert("You win this round!");
		}
		if (tmp === "2,2,2") {
			alert
		}
	}
};

var combination = { 
	h1: [0,0,0]
};

/////////////////////////////////////////


var PlayerOne = function() { 


}


var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');


var buffer = [true,false,true,false,true,false,true,false,true]


var game = function() { 
	
	for (var i = 0; i < length.buffer; i++) {
		if (buffer[i] === true) {
			var p = "X";

		} else {
			var p = "O";
		} 
	} 
	// encapsulated in game function


	function t1E(p) {
			combination.h1[0] = 1;
			determineWinner();
			if p =
			t1.innerHTML = p;
		};

	var t1Event = t1.addEventListener('click', function() {t1E()}, false);

	function t2E() {
			combination.h1[1] = 1;
			determineWinner();
		};
	var t2Event = t2.addEventListener('click', function() {t2E()}, false);


	function t3E() {
			combination.h1[2] = 1;
			determineWinner();
		};
	var t3Event = t3.addEventListener('click', function() {t3E()}, false);

};