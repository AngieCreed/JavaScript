// function interviewQuestion(job) {
//     if  (job === "designer") {
//         return function(name) {
//             console.log(name + ", Can you please explain what UX design is?")
//         } 
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log(name + ", What subject do you teach?" )
//         }
//     } else {
//         return function(name) {
//             console.log("Hello "  + name + " What do you do?")
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher')

// teacherQuestion("John")

// var designerQuestion = interviewQuestion("designer")
// designerQuestion("john")

// interviewQuestion("teacher")("Mark")

function interviewQuestion(job) {
    return function(name) {
        if (job === "teacher") {
            console.log(`My name is ${name} and I am a ${job}`)
        } else if  (job === "designer") {
            console.log(`My name is ${name} and I am a ${job}`)
        } else {
            console.log(`I am a ${job}`)
        }
        
    }
}

interviewQuestion("teacher")("John");
interviewQuestion("Designer")("Jane");
interviewQuestion("Coder")("Jason")