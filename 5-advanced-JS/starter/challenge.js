// Build a function constructor called Question to describe a question. 

var Question = function(question, answerChoices, answer) {
    this.question = question;
    this.answerChoices = answerChoices;
    this.answer = answer
}


var question = [
    "Who is the current President?",
    "When is Christmas?",
    "What was Angie's former job?"
]

var answerChoices = [
    
    ["John Wayne",
    "Bill Clinton",
    "Donald Trump"],

     ["December 25",
     "January 1",
     "November 28"],
    
    ["Pilot",
     "Guidance Counselor",
     "Dancer",]
]

var answer = [2, 0, 1]

// console.log(question[0])
// console.log('0. ' + answerChoices[0][0])
// console.log('1. ' + answerChoices[0][1])
// console.log('2. ' + answerChoices[0][2])
// console.log(answer[0])

var i = question[i]
var questions = Math.floor(Math.random(i) * (question.length))

console.log(question[questions])
console.log('0. ' + answerChoices[questions][0])
console.log('1. ' + answerChoices[questions][1])
console.log('2. ' + answerChoices[questions][2])
console.log(answer[questions])
// var quizQuestion = prompt("Please select the number of your answer choice", "Or type exit to end");

// let quizPrompt = prompt("Please select the number of your answer choice", "Or type exit to end");

   
// if (quizPrompt != '') {
//     if (quizPrompt = answer[questions]) {
//         alert("Great job! Go on to the next question"); 
//     } else {alert("Sorry, that is incorrect");}
// } else {alert("Please enter a response");}

