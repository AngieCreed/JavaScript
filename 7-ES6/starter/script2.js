// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             console.log(str)
//         })
//     },
// }


// box5.clickMe()
// without var self, returns box number is undefined - because the internal function points to the external window object

// ES6
// always use arrow functions when you want to preserve the value of the this keyword
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
       
//         document.querySelector('.green').addEventListener('click', () => {
//             let str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             console.log(str)
//         })
//     },
// }


// box6.clickMe()

//ES5
// function Person(name) {
//     this.name = name;
// }


// Person.prototype.myFriends5 = function(friends) {

//     var arr = friends.map(function (el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this))
//     console.log(arr)
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

//.bind(this) allows access to this, otherwise since it is an
// internal function, it points to global object instead of Person

// ES6
// function Person(name) {
//     this.name = name;
// }


// Person.prototype.myFriends6 = function(friends)  {

//      let arr = friends.map((el) => `${this.name} is friends with ${el}`);
    
//      console.log(this.name)            
//     console.log(arr)
// }

// let friends = ['Bob', 'Jane', 'Mark'];
// new Person('Mike').myFriends6(friends);


/* Destructuring
    A convenient way to extract data
*/ 

// ES5
//  var john = ["john", 26];
//  var name = john[0];
//  var age = john[1];

 // ES6

//  const [name, year] = ['John', 26] // creates 2 new variables that store the value of the array element
//  console.log(name)
//  console.log(year)

////////////////////////////////


//  const obj = {
//      firstName: "John",
//      lastName: "Smith"
//  }
//  const {firstName, lastName} = obj // creates 2 new variables that store the data of the object

//  const {firstName: a, lastName: b} = obj;
//  console.log(a)
/////////////////////////////////////////////////////////////////////////////////////

//  function calcAgeRetirement(year) {
//      const age = new Date().getFullYear() - year;
//      return [age, 65 - age]
//  }

//  const [age2, retirement] = calcAgeRetirement(1990);
//  console.log(age2);
//  console.log(retirement)

 //////////////////////////////////////////////////////////////////

 // ARRAYS!!!


// const boxes = document.querySelectorAll('.box');


//ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//ES5

// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }


// ES6 way - For of Loop

// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to blue!'
// }

 
// ES5

// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//     return cur >= 18;
// })
// console.log(full)
// console.log(full.indexOf(true))
// console.log(ages[full.indexOf(true)])

// ES6

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18))


// Spread Operator

// function addFourAges (a, b, c, d) {
//     return a + b+ c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1)

// ES5

// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

//ES6 Spread Operator = ...

// in this example the spread operator expands the array into its component
// const sum3 = addFourAges(...ages)
// console.log(sum3)


// JOINING ARRAYS

// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["Mary", "Bob", "Ann"];

// const bigFamily = [...familySmith, 'Lily',...familyMiller];
// console.log(bigFamily)



// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes]
// h is the node list
// Array.from(all).forEach(cur => cur.style.color = 'purple');

// REST PARAMETERS
// allow us to pass an arbitrary number of arguments into a function, and to use
// these arguments in that function
/*rest parameters receive a couple of single values and transforms them into an array when we call a function with multiple parameters*/

//ES5
/*
function isFullAge5() {
    // console.log(arguments)
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}
isFullAge5(1990, 1999, 1965)
isFullAge5(1990, 1999, 1965, 2016, 1987)


// ES6 Rest parameters

function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >=18))
}

isFullAge6(1990, 1999, 1965, 2016, 1987)
*/


//ES5

function isFullAge5(limit) {
    // console.log(arguments)
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}
isFullAge5(21, 1990, 1999, 1965)
isFullAge5(1990, 1999, 1965, 2016, 1987)


// ES6 Rest parameters

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit))
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987)

// DEFAULT Parameters
// We use them whenever we want one or more parameters of a function to be preset, to have a default value

// ES5

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')


//ES6

function SmithPerson(firstName, yearOfBirth, lastName = "Smith", nationality = "American") {

  
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish')


// ES6 New data structure called Maps
// a key-value data structure
// can use anything for keys


const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

// console.log(question.get('question'))
// console.log(question.size)
 
// console.log(question)

// if (question.has(4)) {
//     // question.delete(4)
//     console.log('Answer 4 is here')
// }

// console.log(question)

// question.clear();

// console.log(question)

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`))

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

/*
Why use maps to create hash maps over objects?
1. We can use anything as keys
2. Iterable - making it easy to loop through them and manipulate data with them
3. It's really easy to get the size of a map using the size property
4. We can easily add and remove data from a map
 

CLASSES ********

Classes actually don't add anything new to the language, they're just synthetic sugar over the way we do prototypal inheritance in JavaScript, and that means that classes simply make it easier to implement inheritance and to create objects
based on blueprints.

classes are not hoisted. Can add methods but not properties
*/


// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher')


// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }

    static greeting() {
        console.log("Hey there!")
    }
} 

const john6 = new Person6('John', 1990, "teacher");

console.log(john5)
console.log(john6)

Person6.greeting();

/* statis methods that are simply attached to the class but are not inherited by the class instances - helper function - also an object */

/*
CLASSES WITH SUBCLASSES
*/

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age)
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals)
{
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Athlete5 class inherits from the Person5 class
Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5("John", 1990, "Swimmer", 4, 10);
console.log(johnAthlete5)

johnAthlete5.calculateAge()
johnAthlete5.wonMedal()


// ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age)
    }

} 

class Athlete6 extends Person6 {
    constructor (name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job)
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals)
    }
}

const johnAthlete6 = new Athlete6("John", 1990, "Swimmer", 4, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();