function getSelectedAnswer() {
	var selectedAnswer = document.querySelector("input[name='nr-question']:checked");
	var answer = null;
	if (selectedAnswer) {
		var answerId = selectedAnswer.getAttribute("nr-answer");
		answer = document.getElementById(answerId).innerHTML;
	}
	
	return answer;
}

var currentQuestion = null;
var questionBank = null;
var questionsAnswered = 0;
var questionsCorrect = 0;

function getQuestion() {
	var questionIndex = Math.floor(Math.random() * questionBank.length);
	currentQuestion = questionBank.splice(questionIndex, 1)[0];
}

function getFirstQuestion() {
	questionBank = jQuery.extend(true, [], QUESTIONS);
	getQuestion();
}

function startTest() {
	getFirstQuestion();
	fillQuestion();

	document.getElementById("homepage-area").style.display = "none";
	document.getElementById("question-area").style.display = "block";
}

function finishTest() {
	var percentage = Math.floor((questionsCorrect / questionsAnswered) * 100);
	document.getElementById("percent-correct-label").innerHTML = percentage + "%";

	var progressBar = document.getElementById("percent-progress");
	progressBar.setAttribute("aria-valuenow", percentage);
	progressBar.style.width = percentage + "%";

	var progressClassname = "progress-bar progress-bar-striped active";
	if (percentage >= 80) {
		progressClassname += " progress-bar-success";
	}
	else if (percentage >= 50) {
		progressClassname += " progress-bar-warning";
	}
	else {
		progressClassname += " progress-bar-danger";
	}
	progressBar.className = progressClassname;

	document.getElementById("question-area").style.display = "none";
	document.getElementById("finished-area").style.display = "block";
	window.scrollTo(0, 0);
 }

function fillQuestion() {
	document.getElementById("question-title").innerHTML = "Question #" + (questionsAnswered + 1);
	document.getElementById("question-text").innerHTML = currentQuestion["question_text"];
	document.getElementById("possible-answer-1").innerHTML = currentQuestion["possible_answers"][0];
	document.getElementById("possible-answer-2").innerHTML = currentQuestion["possible_answers"][1];
	document.getElementById("possible-answer-3").innerHTML = currentQuestion["possible_answers"][2];
	document.getElementById("possible-answer-4").innerHTML = currentQuestion["possible_answers"][3];
}

function getNextQuestion(answer) {
	var correctIndex = currentQuestion["correct_answer_index"];
	var correctAnswer = currentQuestion["possible_answers"][correctIndex];
	if (correctAnswer === answer) {
		questionsCorrect += 1;
	}

	questionsAnswered += 1;
	if (questionsAnswered >= QUIZ_LENGTH) {
		finishTest();
	}
	else {
		getQuestion();
		fillQuestion();
	}
}

function onAnswerSubmit() {
	var answer = getSelectedAnswer();

	if (answer) {
		document.getElementById("no-answer-alert").style.display = "none";
		getNextQuestion(answer);
	}
	else {
		console.log('asd')
		document.getElementById("no-answer-alert").style.display = "block";
	}
}