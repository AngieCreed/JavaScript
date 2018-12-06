(function () {


    // Function Constructor
var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct
}

    // write a method for display into the Question object - displays question and answers
Question.prototype.displayQuestion = 
    function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++)
    console.log(i + ': ' + this.answers[i])
}

// method to check answer and display score
Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
        console.log('Correct answer');

        sc = callback(true)

    } else { console.log('this is incorrect')

        sc = callback(false)
  }  
    this.displayScore(sc)
}

Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("_______________________")
}


var q1 = new Question("Who is the current President?", ["John Wayne",
"Bill Clinton","Donald Trump"], 2)

var q2 = new Question("When is Christmas?", ["December 25","January 1",
"November 28"], 0)

var q3 = new Question("What was Angie's former job?", ["Pilot",
"Guidance Counselor","Dancer",], 1)

var q4 = new Question("Is JavaScript the coolest programming language in the world?", ['yes', 'no'], 0);

var questions = [q1, q2, q3, q4];

function score() {
    var sc = 0;
    return function(correct) {
        if (correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score()

function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length)
    
    // need a method to display Q & A- see prototype method above
    questions[n].displayQuestion();
    
    var answer = prompt("please select the correct answer")
       

    if(answer !== 'exit') {
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
    }
}
nextQuestion()

}) ();