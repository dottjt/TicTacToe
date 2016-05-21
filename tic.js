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

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');


var determineWinner = function(n) {
	for (var combo in combination) {
		if (combo === [1,1,1] || combo === [1,1,1,1]) {
			alert(n + "wins this round!");
		}
} };

var playerTurn = function(p1,p2) {
	for (var i = 0; i < 9; i++) {
		if (i % 2 === 0) {
			p1();
			
		} else {
			p2();
		} 
	} 
}


function uiChange(player,n) {
		player.combination.h1[0] = 1;
		player.combination.v1[0] = 1;
		player.combination.d1[0] = 1;
		t1.InnerHTML = n;
		t1.style.fontSize = "500%";
		determineWinner(player);
}

t1.addEventListener('click', uiChange(player, n) {
	


t2.addEventListener('click', function()  {
		player.combination.h1[1] = 1;
		player.combination.v2[0] = 1;
		t2.InnerHTML = n;
		t2.style.fontSize = "500%";
		determineWinner(player);
	});

var	t3E = 	t3.addEventListener('click', function()  {
		player.combination.h1[2] = 1;
		player.combination.v3[0] = 1;
		player.combination.d2[2] = 1;
		t3.InnerHTML = n;
		t3.style.fontSize = "500%";
		determineWinner(player);
	});

	// middle row of tiles

var	t4E = 	t4.addEventListener('click', function()  {
		player.combination.h2[0] = 1;
		player.combination.v1[1] = 1;
		t4.InnerHTML = n;
		t4.style.fontSize = "500%";
		determineWinner(player);
	});

var	t5E = 	t5.addEventListener('click', function()  {
		player.combination.h2[1] = 1;
		player.combination.v2[1] = 1;
		player.combination.d1[1] = 1;
		player.combination.d2[1] = 1;
		t5.InnerHTML = n;
		t5.style.fontSize = "500%";
		determineWinner(player);
	});

var	t6E = 	t6.addEventListener('click', function()  {
		player.combination.h2[3] = 1;
		player.combination.v3[1] = 1;
		t6.InnerHTML = n;
		t6.style.fontSize = "500%";
		determineWinner(player);
	});

	//bottom row of tiles

var	t7E = 	t7.addEventListener('click', function()  {
		player.combination.h3[0] = 1;
		player.combination.v1[2] = 1;
		player.combination.d2[0] = 1;
		t7.InnerHTML = n;
		t7.style.fontSize = "500%";
		determineWinner(player);
	});

var	t8E = 	t8.addEventListener('click', function()  {
		player.combination.h3[1] = 1;
		player.combination.v2[2] = 1;
		t8.InnerHTML = n;
		t8.style.fontSize = "500%";
		determineWinner(player);
	});

var	t9E = t9.addEventListener('click', function()  {
		player.combination.h3[2] = 1;
		player.combination.v3[2] = 1;
		player.combination.d1[2] = 1;
		t9.InnerHTML = n;
		t9.style.fontSize = "500%";
		determineWinner(player);
	});
}




var play = function() {

	console.log("Thank you for playing TicTacToe, have fun!");
	var tim = prompt("Player one, please provide your name");
	var tim2 = prompt("Player two, please provide your name");
	playerTurn(tim,tim2);
	determineWinner();
	
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