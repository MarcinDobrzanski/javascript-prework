function playGame(playerInput) {
	clearMessages();
	function getMoveName(argMoveId) {
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
	}

	function displayResult(argComputerMove, argPlayerMove) {
		printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
		console.log('moves:', argComputerMove, argPlayerMove);
		if (
			(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
			(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
			(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
		) {
			printMessage('Ty wygrywasz!');
			return 'Ty wygrywasz!';
		} else if (argComputerMove == argPlayerMove) {
			printMessage('Tym razem remis!');
			return 'Tym razem remis!';
		} else {
			printMessage('Tym razem przegrywasz :(');
			return 'Tym razem przegrywasz :(';
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let computerMove = getMoveName(randomNumber);

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	let wonMove = displayResult(computerMove, playerMove);
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
