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

var i = question[i]
var questions = Math.floor(Math.random(i) * (question.length))



console.log(question[questions])
console.log('0. ' + answerChoices[questions][0])
console.log('1. ' + answerChoices[questions][1])
console.log('2. ' + answerChoices[questions][2])


let quizPrompt = prompt("Please select the number of your answer choice", "Or type exit to end");

if (quizPrompt != 'exit') {
    if (quizPrompt == answer[questions]) {
        alert("Great job!");
    } else {alert("Sorry, that is incorrect");}
} else {alert("Thanks for playing");}








