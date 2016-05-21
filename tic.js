// game winning logic. 
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
var tile_array = [t1, t2, t3, t4, t5, t6, t7, t8, t9]


var determineWinner = function(player) {
	for (var combo in combination.player) {
		if (combo === [1,1,1] || combo === [1,1,1,1]) {
			alert(n + "wins this round!");
		}
} };


var playerTurn = function(p1,p2) {
	for (var i = 0; i < 9; i++) {
		if (i % 2 === 0) {
			
			
		} else {
			
		} 
	} 
}



function t1E(player,n) {
		player.combination.h1[0] = 1;
		player.combination.v1[0] = 1;
		player.combination.d1[0] = 1;
		t1.InnerHTML = n;
		t1.style.fontSize = "500%";
		determineWinner(player);
}
t1.addEventListener('click', function() { t1E(player,n); }, false);


function t2E(player,n) {
		player.combination.h1[1] = 1;
		player.combination.v2[0] = 1;
		t2.InnerHTML = n;
		t2.style.fontSize = "500%";
		determineWinner(player);
	};
t2.addEventListener('click', function() { t2E(player,n); }, false);


function t3E(player, n) {
		player.combination.h1[2] = 1;
		player.combination.v3[0] = 1;
		player.combination.d2[2] = 1;
		t3.InnerHTML = n;
		t3.style.fontSize = "500%";
		determineWinner(player);
}
t3.addEventListener('click', function() { t3E(player,n); }, false);


	// middle row of tiles

function t4E(player, n) {
		player.combination.h2[0] = 1;
		player.combination.v1[1] = 1;
		t4.InnerHTML = n;
		t4.style.fontSize = "500%";
		determineWinner(player);
	}
t4.addEventListener('click', function() { t4E(player,n); }, false);


function t5E(player, n) {
		player.combination.h2[1] = 1;
		player.combination.v2[1] = 1;
		player.combination.d1[1] = 1;
		player.combination.d2[1] = 1;
		t5.InnerHTML = n;
		t5.style.fontSize = "500%";
		determineWinner(player);
	}
t5.addEventListener('click', function() { t5E(player,n); }, false);


function t6E(player, n) {
		player.combination.h2[3] = 1;
		player.combination.v3[1] = 1;
		t6.InnerHTML = n;
		t6.style.fontSize = "500%";
		determineWinner(player);
	}
t6.addEventListener('click', function() { t6E(player,n);}, false);


	//bottom row of tiles

function t7E(player, n) {
		player.combination.h3[0] = 1;
		player.combination.v1[2] = 1;
		player.combination.d2[0] = 1;
		t7.InnerHTML = n;
		t7.style.fontSize = "500%";
		determineWinner(player);
	}
t7.addEventListener('click', function() { t7E(player,n); }, false);


function t8E(player, n) {
		player.combination.h3[1] = 1;
		player.combination.v2[2] = 1;
		t8.InnerHTML = n;
		t8.style.fontSize = "500%";
		determineWinner(player);
	}
t8.addEventListener('click', function() { t8E(player,n); }, false);


var t9E = function(player, n) {
		player.combination.h3[2] = 1;
		player.combination.v3[2] = 1;
		player.combination.d1[2] = 1;
		t9.InnerHTML = n;
		t9.style.fontSize = "500%";
		determineWinner(player);
	}
}
t9.addEventListener('click', function() { t9E(player,n); }, false);



var gamePlay = function() {

	console.log("Thank you for playing TicTacToe, have fun!");
	var tim = prompt("Player one, please provide your name");
	var tim2 = prompt("Player two, please provide your name");
	playerTurn(tim,tim2);
	determineWinner();

	
}



var play = function() {
	if (t1.onclick())
		addEventListener('click', function() { t1E(player,n); }, false);

}

play();



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


*/