
var display = $('#quiz-area')
var startingNumber = 30

$(document).on('click', '#reset', function (e) {
  game.refresh();
});

$(document).on("click", ".answer-btn", function (e) {
  game.click(e);
});

$(document).on("click", "#start", function (e) {
  $("#subwrapper").prepend("<h2> Time Remaining: <span id='countdown-number'>30</span> Seconds</h2>")
  game.loadQuestion();
});

var questions = [{
  question: " Which basketball player changed the game forever? ",
  answers: ["Kareem Abdul Jabbar", "Michael Jordan", "Shaquile Oneal", "Hakeem Olajuwon"],
  correctAnswer: "Michael Jordan",
  image: "https://media.giphy.com/media/l46CzMzHoPpA80ecw/giphy.gif"
}, {
  question: " Who was the most dominant player for a decade in the early millennium?",
  answers: ["Kobe Bryant", "Lebron James", "Allen Iverson", "kevin Durant"],
  correctAnswer: "Kobe Bryant",
  image: "https://media.giphy.com/media/14gbAFcFSUt7s4/giphy.gif"
},

{
  question: " Which team has the most banners in NBA history? ",
  answers: ["New York Knicks", "Boston Celtics", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Boston Celtics",
  image: "https://media.giphy.com/media/sQpl7yebgk3Pq/giphy.gif"
},
{
  question: " In today's NBA, who is the best player in the world?  ",
  answers: ["Kawhi Leonard", "Kevin Durant", "Stephen Curry", "Lebron James"],
  correctAnswer: "Lebron James",
  image: "https://media.giphy.com/media/xTiTnElw9C00WiLmhy/giphy.gif"
},

 
{
  question: " Which Player is the closest comparison to Michael Jordan?",
  answers: ["Lebron James", "Clyde Drexler", "Kobe Bryant", "Tracy Mgrady"],
  correctAnswer: "Kobe Bryant",
  image: "https://media.giphy.com/media/wphRdusxTbbfW/giphy.gif"
},


];



var game = {
  questions: questions,
  currentQuestion: 0,
  counter: startingNumber,
  right: 0,
  wrong: 0,

  countdown: function () {
    game.counter--;
    $("#countdown-number").html(game.counter);

    if (game.counter === 0) {
      game.timeExpired();
    }
  },

  loadQuestion: function () {

    timer = setInterval(game.countdown, 1000);
    display.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
    for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
      display.append('<button class="answer-btn" id ="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i] + '</button');
    }


  },

  nextQuestion: function () {
    game.counter = startingNumber
    $('countdown-number').html(game.counter)
    game.currentQuestion++
    game.loadQuestion();

  },
  timeExpired: function () {
    clearInterval(timer)
    $('countdown-number').html(game.counter)
    $('#countdown-number').html("<h2>Times Up!</h2>")
    display.append("<h3> Good try the correct answer is" + questions[this.currentQuestion].correctAnswer + '!')
    display.append("<img src=" + questions[this.currentQuestion].image + '>')

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3000)

    } else {
      setTimeout(game.nextQuestion, 5000)
    }
  },

  results: function () {
    clearInterval(timer);
    display.html('<h2> Lets see how you stacked up!</h2>');
    display.append('<h3>Correct Answers: ' + game.right + '</h3>');
    display.append('<h3>Wrong Answers: ' + game.wrong + '</h3>');
    display.append('<h3>Unanswered: ' + (questions.length - (game.wrong + game.right)) + '</h3>');
    display.append('<br><button id="reset">Try Again?</button>');
  },

  click: function (e) {

    clearInterval(timer)

    if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer) {
      this.rightAnswer();
    }
    else {
      this.wrongAnswer();
    }
  },

  rightAnswer: function () {
    clearInterval(timer)
    game.right++
    display.html("<h2> Right!<h2>")
    display.append("<img src=" + questions[this.currentQuestion].image + '>')

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3000)

    } else {
      setTimeout(game.nextQuestion, 5000)
    }
  },

  wrongAnswer: function () {
    game.wrong++
    clearInterval(timer)
    display.html("<h2> NOOO!<h2>")
    display.append("<h2> The right answer is " + questions[this.currentQuestion].correctAnswer + "</h2>")
    display.append("<img src=" + questions[this.currentQuestion].image + '>')

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3000)

    } else {
      setTimeout(game.nextQuestion, 5000)
    }

  },


  refresh: function () {
    this.currentQuestion = 0;
    this.counter = startingNumber;
    this.correct = 0;
    this.wrong = 0;
    this.loadQuestion();
  }

}





