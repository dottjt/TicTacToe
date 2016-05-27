// game winning logic. 
var combination = { 
	h1: [0,0,0],
	h2: [0,0,0],
	h3: [0,0,0],
	v1: [0,0,0],
 	v2: [0,0,0],
 	v3: [0,0,0],
 	d1: [0,0,0],
 	d2: [0,0,0]
};

// tile selectors
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');

// utilised to replicate jQuery .onclick() function
 

// 21-05-16, got it to work, largely with the tmp function. final. 
function determineWinner() {
	for (var i in combination) {
		var tmp = combination[i].toString();
		console.log(combination[i]);
		if (tmp === "1,1,1" || tmp === "1,1,1,1") {
			alert("You win this round!");
		}
	}
};

function gameOver() { 
	if (turn === 9) {
		alert("No one wins")
	}
}


var turn = 0;


var playGame = function() { 
	t1.addEventListener('click', t1E, false);
	t2.addEventListener('click', t2E, false);
	t3.addEventListener('click', t3E, false);
	t4.addEventListener('click', t4E, false);
	t5.addEventListener('click', t5E, false);
	t6.addEventListener('click', t6E, false);
	t7.addEventListener('click', t7E, false);
	t8.addEventListener('click', t8E, false);
	t9.addEventListener('click', t9E, false);
};

playGame();



function t1E() {
	console.log(turn);
	if (turn % 2 === 0) {
		t1.innerHTML = "X";
		combination.h1[0] = 1;
		combination.v1[0] = 1;
		combination.d1[0] = 1;
	} else {
		t1.innerHTML = "O";
		combination.h1[0] = 2;
		combination.v1[0] = 2;
		combination.d1[0] = 2;
	}
	gameOver();
	turn += 1;

}

function t1E() {
		combination.h1[0] = 1;
		combination.v1[0] = 1;
		combination.d1[0] = 1;
		t1.InnerHTML = n;
		t1.style.fontSize = "500%";
		determineWinner();
}
var t1Event = t1.addEventListener('click', function() {t1E()}, false);


function t2E() {
		combination.h1[1] = 1;
		combination.v2[0] = 1;
		t2.InnerHTML = n;
		t2.style.fontSize = "500%";
		determineWinner();
	};

var t2Event = t2.addEventListener('click', function() {t2E()}, false);


function t3E() {
		combination.h1[2] = 1;
		combination.v3[0] = 1;
		combination.d2[2] = 1;
		t3.InnerHTML = n;
		t3.style.fontSize = "500%";
		determineWinner();
}
var t3Event = t3.addEventListener('click', function() {t3E()}, false);


	// middle row of tiles

function t4E() {
		combination.h2[0] = 1;
		combination.v1[1] = 1;
		t4.InnerHTML = n;
		t4.style.fontSize = "500%";
		determineWinner();
	}
var t4Event = t4.addEventListener('click', function() {t4E()}, false);


function t5E() {
		combination.h2[1] = 1;
		combination.v2[1] = 1;
		combination.d1[1] = 1;
		combination.d2[1] = 1;
		t5.InnerHTML = n;
		t5.style.fontSize = "500%";
		determineWinner();
	}
var t5Event = t5.addEventListener('click', function() {t5E()}, false);


function t6E() {
		combination.h2[3] = 1;
		combination.v3[1] = 1;
		t6.InnerHTML = n;
		t6.style.fontSize = "500%";
		determineWinner();
	}
var t6Event = t6.addEventListener('click', function() {t6E()}, false);


	//bottom row of tiles

function t7E() {
		combination.h3[0] = 1;
		combination.v1[2] = 1;
		combination.d2[0] = 1;
		t7.InnerHTML = n;
		t7.style.fontSize = "500%";
		determineWinner();
	}
var t7Event = t7.addEventListener('click', function() {t7E()}, false);


function t8E() {
		combination.h3[1] = 1;
		combination.v2[2] = 1;
		t8.InnerHTML = n;
		t8.style.fontSize = "500%";
		determineWinner();
	}
var t8Event = t8.addEventListener('click', function() {t8E()}, false);


var t9E = function() {
		combination.h3[2] = 1;
		combination.v3[2] = 1;
		combination.d1[2] = 1;
		t9.InnerHTML = n;
		t9.style.fontSize = "500%";
		determineWinner();
	}
}
var t9Event = t9.addEventListener('click', function() {t9E()}, false);


function player() { }

var tile_array = [t1Event, t2Event, t3Event, t4Event, t5Event, t6Event, t7Event, t8Event, t9Event]



var play = function(p1,p2) {
	for (var i = 0; i < 9; i++) {
		if (i % 2 === 0) {
			
		} else {
			
		} 
	} 
}
	


play();


/*

var gamePlay = function() {

	console.log("Thank you for playing TicTacToe, have fun!");
	var tim = prompt("one, please provide your name");
	var tim2 = prompt("two, please provide your name");
	urn(tim,tim2);
	determineWinner());

	
}

*/

/*
var 	h1 = [0,0,0]					
var 	h2 = [0,0,0]					
var 	h3 = [0,0,0]					
var 	v1 = [0,0,0]					
var 	v2 = [0,0,0]					
var 	v3 = [0,0,0]					
var 	d1 = [0,0,0]					
var 	d2 = [0,0,0]					


var edgeTally = { EL: 0, ER: 0, EU: 0, ED: 0 }

var winningTally = function() {
	if (edgeTally.EL > 2) {
		if edgeTally.EL > 2 {
			if edgeTally.EL > 2

		}
	}

}




var tile = { t1: {			 ER: false, ED: false			},						},
			 t2: {EL: false, ER: false, ED: false			},
			 t3: {EL: false, 			ED: false			},
			 t4: {			 ER: false,	ED: false, EU: false},
			 t5: {EL: false, ER: false,	ED: false, EU: false},
			 t6: {EL: false,  			ED: false, EU: false},
			 t7: 			 ER: false,			   EU: false},
			 t8: {EL: false, ER: false,	 		   EU: false},
			 t9: {EL: false, 					   EU: false},

}

*/ 


/*

		else if (style.id === 't2') {
			combination.h1[1] = 1;
			combination.v2[0] = 1;
		}

		else if (style.id === 't3') {
			combination.h1[2] = 1;
			combination.v3[0] = 1;
			combination.d2[2] = 1;
		}

		// middle row of tiles

		else if (style.id === 't4') {
			combination.h2[0] = 1;
			combination.v1[1] = 1;
		}

		else if (style.id === 't5') {
			combination.h2[1] = 1;
			combination.v2[1] = 1;
			combination.d1[1] = 1;
			combination.d2[1] = 1;

		}

		else if (style.id === 't6') {
			combination.h2[3] = 1;
			combination.v3[1] = 1;
		}

		//bottom row 

		else if (style.id === 't1') {
			combination.h3[0] = 1;
			combination.v3[2] = 1;
			combination.d2[0] = 1;
		}

		else if (style.id === 't2') {
			combination.h3[1] = 1;
			combination.v3[2] = 1;
		}

		else if (style.id === 't3') {
			combination.h1[2] = 1;
			combination.v3[2] = 1;
			combination.d1[2] = 1;
		}
	});
}

var combination = { 
p1: {
	h1: [0,0,0],
	h2: [0,0,0],
	h3: [0,0,0],
	v1: [0,0,0],
 	v2: [0,0,0],
 	v3: [0,0,0],
 	d1: [0,0,0],
 	d2: [0,0,0]
},
p2: {
	h1: [0,0,0],
	h2: [0,0,0],
	h3: [0,0,0],
	v1: [0,0,0],
 	v2: [0,0,0],
 	v3: [0,0,0],
 	d1: [0,0,0],
 	d2: [0,0,0]
}};


*/