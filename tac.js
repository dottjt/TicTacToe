var determineWinner = function() {
	for (var i in combination) {
		var tmp = combination[i].toString();
		console.log(combination[i]);
		if (tmp === "1,1,1") {
			alert("You win this round!");
		}
		if (tmp === "2,2,2") {
			alert()
		}
	}
};


var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');


var combination = { 
	h1: [0,0,0]
};


/*
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

		function t3E(p) {
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
*/

/////////////////////////////////////////

	



var playerOrder = function(p) { 
	if (p % 2 === 0) {
	 	var t = "X";		 
	} else {
		var t = "O";
	} 
	
	t3.addEventListener('click', function() {
		if (t === "X") {
			 combination.h1[2] = 1;
		} else {
			 combination.h1[2] = 2;
		}
		t3.innerHTML = t;
		determineWinner();
	}, false);


	t2.addEventListener('click', function() {
		t2.innerHTML = t;
		if (t === "X") {
			combination.h1[1] = 1;
		} else {
			combination.h1[1] = 2;
		}
	}, false);

	t1.addEventListener('click', function() {
		t1.innerHTML = t;
		if (t === "X") {
			combination.h1[0] = 1;
		} else {
			combination.h1[0] = 2;
		}

	}, false);

}


for (var i = 0; i < 9; i++) {
	playerOrder(i);	
}
