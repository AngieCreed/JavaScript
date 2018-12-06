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

Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
        console.log('Correct answer')
    } else { console.log('this is incorrect')}
}


var q1 = new Question("Who is the current President?", ["John Wayne",
"Bill Clinton","Donald Trump"], 2)

var q2 = new Question("When is Christmas?", ["December 25","January 1",
"November 28"], 0)

var q3 = new Question("What was Angie's former job?", ["Pilot",
"Guidance Counselor","Dancer",], 1)

var q4 = new Question("Is JavaScript the coolest programming language in the world?", ['yes', 'no'], 0);

var questions = [q1, q2, q3, q4];

var n = Math.floor(Math.random() * questions.length)

// need a method to display Q & A- see prototype method above
questions[n].displayQuestion();

var answer = parseInt(prompt("please select the correct answer"))

questions[n].checkAnswer(answer);
}) ();