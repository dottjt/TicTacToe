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

var p2_combinations = { 	
	h1: [0,0,0],
	h2: [0,0,0],
	h3: [0,0,0],
	v1: [0,0,0],
 	v2: [0,0,0],
 	v3: [0,0,0],
 	d1: [0,0,0],
 	d2: [0,0,0]
};

var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');

function playerTurn(n) {
	for (var i = 0; i < 9; i++) {
		if (i == 0) {
			n.innerHTML = "X";
			i += 1;
			return
		}
		if (i % 2 == 0) {
			n.innerHTML = "O";
			i += 1;
			return 
			}
		else {
			n.InnerHTML = "X";
			i += 1;
			return 
		} 
	} 
}

	t1.addEventListener('click', function() {
		combination.h1[0] = 1;
		combination.v1[0] = 1;
		combination.d1[0] = 1;
		playerTurn(t1);
		determineWinner();

	});

	t2.addEventListener('click', function()  {
		combination.h1[1] = 1;
		combination.v2[0] = 1;
		playerTurn(t2);
		determineWinner();

	});

	t3.addEventListener('click', function()  {
		combination.h1[2] = 1;
		combination.v3[0] = 1;
		combination.d2[2] = 1;
		playerTurn(t3);
		determineWinner();

	});

	// middle row of tiles

	t4.addEventListener('click', function()  {
		combination.h2[0] = 1;
		combination.v1[1] = 1;
		playerTurn(t4);
		determineWinner();

	});

	t5.addEventListener('click', function()  {
		combination.h2[1] = 1;
		combination.v2[1] = 1;
		combination.d1[1] = 1;
		combination.d2[1] = 1;
		playerTurn(t5);
		determineWinner();

	});

	t6.addEventListener('click', function()  {
		combination.h2[3] = 1;
		combination.v3[1] = 1;
		playerTurn(t6);
		determineWinner();

	});

	//bottom row of tiles

	t7.addEventListener('click', function()  {
		combination.h3[0] = 1;
		combination.v3[2] = 1;
		combination.d2[0] = 1;
		playerTurn(t7);
		determineWinner();

	});

	t8.addEventListener('click', function()  {
		combination.h3[1] = 1;
		combination.v3[2] = 1;
		playerTurn(t8);
		determineWinner();

	});

	t9.addEventListener('click', function()  {
		combination.h1[2] = 1;
		combination.v3[2] = 1;
		combination.d1[2] = 1;
		playerTurn(t9);
		determineWinner();

});
	


function determineWinner() {
	for (var combo in combination) {
		if (combo = [1,1,1]) {
			alert("Player one wins");
		}
	}
};









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