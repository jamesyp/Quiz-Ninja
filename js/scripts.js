// welcome the user
alert("Welcome to Quiz Ninja!");

var quiz = [
	["What is Superman's real name?", "Kal El"],
	["What is Wonderwoman's real name?", "Dianna"],
	["What is Batman's real name?", "Wayne Bruce"],
];

var score = 0;

for (var i = 0; i < quiz.length; i++) {
	var answer = prompt(quiz[i][0]);

	if (answer === quiz[i][1]) {
		alert("Correct!");
		score++;
	} else {
		alert("WRONGO BOZO");
	}
}

alert("Game over, you scored " + score + " points");