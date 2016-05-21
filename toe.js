// further testing by breaking things down. 


	for (var i = 0; i < length.buffer; i++) {
	
	// event function
		if (buffer[i] === true) {
			var p = "X";
		} else {
			var p = "O";
		} 

		function t1E(player) {
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

		var t1Event = t1.addEventListener('click', function() {t1E(p)}, false);


	}