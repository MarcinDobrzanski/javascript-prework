{
	function playGame(playerInput) {
		clearMessages();
		const getMoveName = function (argMoveId) {
			if (argMoveId == 1) {
				return 'kamień';
			} else if (argMoveId == 2) {
				return 'papier';
			} else if (argMoveId == 3) {
				return 'nożyce';
			} else {
				printMessage('Nie znam ruchu o id ' + argMoveId + '.');
				return 'nieznany ruch';
			}
		};

		const displayResult = function (argComputerMove, argPlayerMove) {
			printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
			console.log('moves:', argComputerMove, argPlayerMove);
			if (
				(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
				(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
				(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
			) {
				printMessage('Ty wygrywasz!');
			} else if (argComputerMove == argPlayerMove) {
				printMessage('Tym razem remis!');
			} else {
				printMessage('Tym razem przegrywasz :(');
			}
		};

		let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1)),
			playerMove = getMoveName(playerInput);
		console.log('Ruch komputera: ' + computerMove);
		console.log('Gracz wpisał: ' + playerInput);

		displayResult(computerMove, playerMove);
	}

	document.getElementById('play-rock').addEventListener('click', function () {
		playGame('1');
	});

	document.getElementById('play-paper').addEventListener('click', function () {
		playGame('2');
	});

	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame('3');
	});
}
