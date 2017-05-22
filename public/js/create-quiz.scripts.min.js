var isQuizNameValid = true;

function onQuizNameInput(quizName) {
	isQuizNameValid = !quizName.match(INVALID_NAME_PATTERN);
	document.getElementById("invalid-name-alert").style.display = isQuizNameValid ?
		"none" :
		"block";
}