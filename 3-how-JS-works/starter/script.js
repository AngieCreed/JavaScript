///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1965)
// function calculateAge(year) {
//     console.log(2016 - year)
// }


// var retirement = function(year) {
//     console.log(65 - (2016 - year))
// }
// retirement(1990)

// calling the function before the function is only available with a function expression
// with a function declaration, the call has to be after the function declaration

// variables

// console.log(age) //undefined
// var age = 23;
// console.log(age)

// function foo() {
//     var age = 65;
//     console.log(age)
// }
// foo()
// console.log(age)










///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }




///////////////////////////////////////
// Lecture: The this keyword - THE THIS VARIABLE IS ONLY ASSIGNED A VALUE AS SOON AS AN OBJECT CALLS A METHOD!!!

// console.log(this)

// calculateAge(1985)
// function calculateAge(year) {
//     console.log(2016 - year)
//     console.log(this)
// }

var john = {
    name: 'John',
    yearofBirth: 1990,
    calculateAge: function() {
        console.log(this)
        console.log(2016 - this.yearofBirth)

        // function innerFunction() {
        //     console.log(this) //still accesses the global window object
        // }
        // innerFunction();
    }
}

john.calculateAge()

var mike = {
    name: "Mike",
    yearofBirth: 1984,
}

//method borrowing
mike.calculateAge = john.calculateAge
mike.calculateAge();





