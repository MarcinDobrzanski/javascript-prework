function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

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
