function getSelectedAnswer() {
	var selectedAnswer = document.querySelector("input[name='nr-question']:checked");
	return selectedAnswer ? selectedAnswer.value : null;
}

function getNextQuestion(answer) {
	
}

function onAnswerSubmit() {
	var answer = getSelectedAnswer();

	if (answer) {
		document.getElementById("no-answer-alert").style.display = "none";
		getNextQuestion(answer);
	}
	else {
		document.getElementById("no-answer-alert").style.display = "block";
	}
}
