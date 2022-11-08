function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Liczba po zaokrągleniu w dół to: ' + randomNumber);