/*
//testing one square with two arrays. 

var t1 = document.getElementById('t1');

var combination = { 
	p1: [0],
	p2: [0]
};

var playGame = function(i) { 
	var t = i;
	t1.addEventListener('click', function() {
		if (t % 2 == 0) {
		t1.innerHTML = "X";
		combination.p1[0] = 1;
		} else {
		t1.innerHTML = "O";
		combination.p2[0] = 1;
		}
	}, false)
}

playGame(2);

*/








// testing with one array. 
// Works well!

var combination = { 
	h1: [0,0,0]
};

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');

var turn = 0; // state to keep track of number of turns. 

function t1E(t) {
	if (t === 0) {
		t1.innerHTML = "X";
		combination.h1[0] = 1;
	} else {
		t1.innerHTML = "O";
		combination.h1[0] = 2;
	}
	console.log(turn);

		// determineWinner();
}

function t2E(t) {
	if (t === 0) {
		t2.innerHTML = "X";
		combination.h1[1] = 1;
	}
	else {
		t2.innerHTML = "O";
		combination.h1[1] = 2;
	}
	console.log(turn);

		// determineWinner();
};

function t3E(t) {
	if (t === 0) {
		t3.innerHTML = "X";
		combination.h1[2] = 1;
	}
	else {
		t3.innerHTML = "O";
		combination.h1[2] = 2;
	}
	console.log(turn);

		// determineWinner();
};

function playGame() {
	if (turn % 2 === 0) {
		var t = 0; 
	} 
	else {
		var t = 1;
	}
	t1.addEventListener('click', t1E.bind(this, t), false)
	t2.addEventListener('click', t2E.bind(this, t), false)
	t3.addEventListener('click', t3E.bind(this, t), false)
	
	turn += 1;

};

// var rry = ["X", "O", "X", "O", "X", "O"];




/*

// latest working 
function t1E(t) {
	if (t % 2 == 0) {
		t1.innerHTML = "X";
		combination.h1[0] = 1;
		} else {
		t1.innerHTML = "O";
		combination.h1[0] = 2;
		}
	determineWinner();
}

function t2E(t) {
		console.log(t);

	if (t % 2 == 0) {
		t2.innerHTML = "X";
		return combination.h1[1] = 1;
	}
	else {
		t2.innerHTML = "O";
		return combination.h1[1] = 2;
	}
	determineWinner();
};

function t3E(t) {
	if (t % 2 == 0) {
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


/*
// The issue is maybe I should have two different arrays, rather than just one array. @
// What I should have done is start an interative process. The VERY basics possible, rather than try and make it a bohemth to begin with. 

var playerOrder = function(p) { 
	if ()

t1.addEventListener('click',t1E, false);
t2.addEventListener('click',t2E, false);
t3.addEventListener('click',t3E, false);

for (var i = 0; i < 3; i++) {
	playerOrder(i)
}




var hello = "here is where we begin. "
	
*/
	
	




// Okay, I may have to seperate them again 

// maybe it's because I need to seperate the eventListener functions again. 
	






/*

	t3.addEventListener('click', function() {
		t3.innerHTML = t;
		if (t === "X") {
			 combination.h1[2] = 1;
		} else {
			 combination.h1[2] = 2;
		}
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






		function t1E() {

			console.log(t);
			if (t === "X") {
				t1.innerHTML = "X";
				combination.h1[0] = 1;
			}
			else {
				t1.innerHTML = "O";
				combination.h1[0] = 2;
			}
			determineWinner();
		};

		function t2E() {
			if (t === "X") {
				this.innerHTML = "X";
				combination.h1[1] = 1;
			}
			else {
				this.innerHTML = "O";
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

//completed 
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


// simpler event functions 

function t1E() {

	console.log(t);
	if (t === "X") {
		t1.innerHTML = "X";
		combination.h1[0] = 1;
};

function t2E() {
	if (t === "X") {
		t2.innerHTML = "X";
		combination.h1[1] = 1;
	}
};

function t3E() {
	if (p === "X") {
		t3.innerHTML = "X";
		combination.h1[2] = 1;
	}
};



*/

// I'm thinking, what if I create a class that determines the player order?
