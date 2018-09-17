
var questions = [
  {

    question: "which team won the most championships in the 1990s in the NBA?",
    answers: {
      a: ' Los Angeles Lakers',
      b: ' Chicago Bulls',
      c: ' Utah Jazz',
      d: ' Boston Celtics'
    },
    correctAnswer: 'b',
    
  },

  {
    question: "which player was th most dominant for a decade in the early 2000s",
    answers: {
      a: ' shaquile Oneal',
      b: ' Allen Iverson',
      c: ' Kobe Bryant',
      d: ' Lebron James '
    },
    correctAnswer: 'c'

  }
];

var timer = setInterval(function () {
  myTimer()
}, 1000);
var seconds = 30;

function myTimer() {
  document.getElementById("time").innerHTML = seconds--;

}


var quizContainer = document.getElementById('quiz')
var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit')

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {


    var output = []
    var answers;

    for (var i = 0; i < questions.length; i++) {
      answers = [];

      for (letter in questions[i].answers) {

        answers.push(
          '<label>'
          + '<input type = "radio" name="question' + i + '" value="' + letter + '">'
          + letter + ':' + questions[i].answers[letter]
          + '</label>'
        );
      }
      output.push(
        '<div class ="question">' + questions[i].question + '<div>'
        + '<div class ="answers">' + answers.join(' ') + '</div>'
      );
    }
    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numberCorrect = 0

    for (var i = 0; i < questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
      if (userAnswer === questions[i].correctAnswer) {
        numberCorrect++
        $("#gif").html("<img src=" + questions.gif + ">");

        answerContainers[i].style.color = 'lightgreen'
      } else {
        answerContainers[i].style.color = 'red'
      }
    }
    resultsContainer.innerHTML = numberCorrect + 'out of' + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function () {

    showResults(questions, quizContainer, resultsContainer);
  }

}

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

