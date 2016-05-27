// Unit tests 
/* */
// This test gets one timle

var combination = { 
	h1: [0,0,0]
};

var t1 = document.getElementById('t1');

function t1E() {
	console.log(turn);
	if (turn % 2 === 0) {
		t1.innerHTML = "X";
	} else {
		t1.innerHTML = "O";
	}
	gameOver();
	turn += 1;

}

var turn = 0;


var playGame = function() { 
	t1.addEventListener('click', t1E, false);

};

playGame();

function gameOver() { 
	if (turn === 9) {
		alert("No one wins")
	}
}