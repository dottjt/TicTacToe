// Unit tests 
/* */
// So, this test works with additional logic in the function. 


var combination = { 
	h1: [0,0,0],
	v1: [0,0,0],
	d1: [0,0,0]
};

var t1 = document.getElementById('t1');

function t1E() {
	var s = rry[turn];

	if (turn % 2 === 0) {
				var p = "X";
			} else {
				var p = "O";
			}
		console.log(p);
		console.log(s);
		console.log(turn);
		t1.innerHTML = p;
		combination.h1[0] = 1;
		combination.v1[0] = 1;
		combination.d1[0] = 1;
		turn += 1;
}

var turn = 0; 
var rry = [1,2,1,2,1,2,1,2,1];


var playGame = function() { 

	t1.addEventListener('click', t1E, false);
};


playGame();

function gameOver() { 
	if (turn === 9) {
		alert("No one wins")
	}
}