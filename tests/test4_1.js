// with this test, I want to 

// Unit tests 
/* */
// So, with this test, I will move from 1 tile to 3 tiles. 


var combination = { 
	h1: [0,0,0],
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

function t2E() {
		determinep();
		var s = rry[turn];
		console.log(p);
		console.log(s);
		console.log(turn);
		t2.innerHTML = p;
		combination.h1[1] = s;
		turn += 1;
}

function t3E() {
		determinep();
		var s = rry[turn];
		console.log(p);
		console.log(s);
		console.log(turn);
		t3.innerHTML = p;
		combination.h1[2] = s;
		turn += 1;
}

function playGame() { 

	t1.addEventListener('click', t1E, false);
	t2.addEventListener('click', t2E, false);
	t3.addEventListener('click', t3E, false);

};

playGame();
