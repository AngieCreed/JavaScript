// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'Teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
    
// }

// Person.prototype.calculateAge = function() {//************************** */
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = "Smith";  //********************************** */

// var john = new Person("John", 1990, "teacher") //this is called instantiation because these objects are instances of the Person object
// console.log(john)   // Person { name: 'John', yearofBirth: 1990, job: 'teacher' }

// console.log(john.yearOfBirth)
// john.calculateAge()

// var jane = new Person('Jane', 1969, "Designer")
// var mark = new Person("Mark", 1948, "Retired")

// jane.calculateAge()
// mark.calculateAge()

// console.log(john.lastName)
// console.log(jane.lastName)


// var Dog = function(name, breed, age, weight) {
//     this.breed = breed;
//     this.age = age;
//     this.weight = weight;
// }

// var patty = new Dog("Patty", "black lab", 2, "30 lbs")
// console.log (patty.breed)

// var x = [2, 4, 6]
// console.info(x)

// Object.create method ********************************************************
// define an object that will act as the prototype and then create a new object based on that very prototype
// object.create - creates an object that has the specified prototype or that has null prototype
/* 
The difference between the object.create and the function constructor pattern is that the object.create builds an object that
inherits directly from the one that we passed into the first argument.

While on the other hand, the function constructor, the newly created object inherits from the constructor's prototype property



*/

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth)
//     }
// }

// var john = Object.create(personProto)
// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: "jane"},
//     yearOfBirth: { value: 1969},
//     job: { value: 'designer'}
// })

// console.log(jane.name)

// Primitives vs. Objects
// A big difference between primitives and objects is that variables containing primitives actually hold
// that data inside of the variable itself
// Variables associated with objets do not actually contain the object, but instead contain a reference
// to the place in memory where the object sits, so where the object is stored
// A variable declared as an objec does not have a real copy of the object - it just points to that object

var a = 23;
var b = a;
a = 46
console.log(a) //46
console.log(b) //23

var obj1 = {
    name: "John",
    age: 26
}

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); //30
console.log(obj2.age); //30 we did not create a new object; we created a new reference which points to the first object
                        // both hold a reference that point to the exact same object in memory


// Functions
var age = 27;
var obj = {
    name: "Jonas",
    city: "Lisbon"
}                

function change(a, b) {
    a = 30;
    b.city = "San Francisco"
}

change(age, obj)

console.log(age) // 27
console.log(obj.city) //San Francisco

/* Functions are also objects in javascript - first class functions
A function is an instance of the object type
- behaves like any other object
- can sstore functions in a variable
- can pass a function as an argument to another funcction
- can return a function from a function

*/
// write a function that will receive an array and return a new result aray and do the calculations that we pass into the 
// calculation function
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {  // will pass in the array and a function that does the calculations
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))   // the result of calling our fn function - pass element of input array - gets pushed into the calulateAge function (el) when called
    }
    return arrRes
}


function calculateAge(el) {  // el = element of array
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}


function maxHeartRate(el) {
    if (el >= 18 && el <= 81){
        return Math.round( 206.9 - (0.67 * el))
    }  else {
    return -1;
    }
}

var ages = arrayCalc(years, calculateAge) //calculateAge is a callback function - we cant it called later

var fullAges = arrayCalc(ages , isFullAge)

var rates = arrayCalc(ages, maxHeartRate)

console.log(ages)
console.log(fullAges)
console.log(rates)


// Functions returning Functions
/* Example - create a function that creates different interview questions for different jobs. For each
job, we will return the function that builds a string using the person's name as an input
*/

function interviewQuestion(job) {
    if  (job === "designer") {
        return function(name) {
            console.log(name + ", Can you please explain what UX design is?")
        } 
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ", What subject do you teach?" )
        }
    } else {
        return function(name) {
            console.log("Hello "  + name + " What do you do?")
        }
    }
}

var teacherQuestion = interviewQuestion('teacher')

teacherQuestion("John")

var designerQuestion = interviewQuestion("designer")
designerQuestion("john")

interviewQuestion("teacher")("Mark")

/* 
Immediately invoked Functions Expressions - IIFE
*/

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5)
// }
// game()

//Immediately invoked function expression
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5)
})();

console.log(score)

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck)
})(5);  //can only be called once; is not reusable; allows data privacy

//  Closures
/*
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

You create a closure by adding a function inside another function. */

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearofBirth) {
        var age = 2016 - yearofBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
retirementUS(1990);
// or
retirement(66)(1990);
// this function returns a function so we can store the result of calling this function in a variable, and then this variable will be a function as well

var retirementGermany = retirement(65);
var retirementIceland = retirement(67)

retirementGermany(1990)
retirementUS(1990)
retirementIceland(1990)




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


//************************************************************* */
//Bind, call, and apply

var john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal"){
            console.log(`Good ${timeOfDay} ladies and gentlemen. I'm ${this.name}. I'm a ${this.job} and I'm ${this.age} years old.`);
        } else if (style === "friendly") {
            console.log(`Hey what's up? I'm ${this.name}. I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}`)
        }
    }
}

var emily = {
    name: "Emily",
    age: 35,
    job: "Designer"
}

john.presentation('formal',"morning")
john.presentation.call(emily, "friendly", "afternoon")

/*  Call Method - method borrowing 
1. The first argument of the call method is always set to the this variable - example emily
2. Next arguments are the arguments of the function = example presentation (style, timeOfDay)

The Apply Method is very similar - the only difference is that this one accepts the arguments as an array
*/


/*
Bind Method - Similar to the call method.  Allows us to set the this variable explicitly.  The bind doesn't immediately call the function, but instead generates/returns a copy of the function so that we can store it somewhere
*/

var johnFriendly = john.presentation.bind(john, "friendly")

johnFriendly("morning");
johnFriendly("night")

// the bind method allows us to preset some arguments, which is called "carrying" - create a function based on another function with some preset
// parameters

var emilyFormal = john.presentation.bind(emily, "formal")
emilyFormal("afternoon")



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {  // will pass in the array and a function that does the calculations
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))   // the result of calling our fn function - pass element of input array - gets pushed into the calulateAge function (el) when called
    }
    return arrRes
}


function calculateAge(el) {  // el = element of array
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)