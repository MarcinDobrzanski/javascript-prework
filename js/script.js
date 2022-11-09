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
/*
if (randomNumber == 1) {
	computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);
*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


let wonMove = displayResult(computerMove, playerMove);

/*
if (playerInput == '1') {
	playerMove = 'kamień';
} else if (playerInput == '2') {
	playerMove = 'papier';
} else if (playerInput == '3') {
	playerMove = 'nożyce';
}


printMessage('Twój ruch to: ' + playerMove);


if (
	(computerMove == 'kamień' && playerMove == 'papier') ||
	(computerMove == 'nożyce' && playerMove == 'kamień') ||
	(computerMove == 'papier' && playerMove == 'nożyce')
) {
	printMessage('Ty wygrywasz!');
} else if (computerMove == playerMove) {
	printMessage('Remis!');
} else {
	printMessage('Ty przegrywasz!');
}
*/