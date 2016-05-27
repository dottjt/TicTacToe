// Unit tests 
/* */
// So, this test works with seperate logic from the function. 


var combination = { 
	h1: [0,0,0],
	v1: [0,0,0],
	d1: [0,0,0]
};

var t1 = document.getElementById('t1');

var turn = 0; 
var rry = [1,2,1,2,1,2,1,2,1];


function determinep() { 
	if (turn % 2 === 0) {
		return p = "X";
	} else {
		return p = "O";
	}
}

function t1E() {
		determinep();
		var s = rry[turn];
		console.log(p);
		console.log(s);
		console.log(turn);
		t1.innerHTML = p;
		combination.h1[0] = s;
		turn += 1;
}


function playGame() { 

	t1.addEventListener('click', t1E, false);
};


playGame();

function gameOver() { 
	if (turn === 9) {
		alert("No one wins")
	}
}