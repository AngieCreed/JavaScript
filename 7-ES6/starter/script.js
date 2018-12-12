// lecture: let and const


// ES5

var name5 = 'Jane Smith';
var age5 = 23;
name5 = "Jane Miller";
console.log(name5)

// ES6

const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6)

/*
variables declared with var in ES5 are function scoped
variables declared with let and const in ES6 are block-scoped - code wrapped within curly braces - variables declared within a block are only accessible by the code that are inside of the same block
    declare variables outside of the block
    can only use a variable after it is declared and defined
*/

// ES5
function driversLicense(passedTest) {
    if (passedTest) {
        // console.log(firstName) - will return as undefined because variables are hoisted
        var firstName = "John";
        var yearOfBirth = 1990;
        
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car')
}


driversLicense(true);

// ES6
function driversLicense(passedTest) {
    if (passedTest) {
        let firstName = "John";
        const yearOfBirth = 1990;
        
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car')
}


driversLicense(true);


function driversLicense(passedTest) {
    // console.log(firstName) - will return an error firstName is not defined
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = "John";
        // const yearOfBirth = 1990; to be able to use const outside of the block it has 
        // to be declared outside of the block
        
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car')
}


driversLicense(true);




let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i) // returns 0,2,3,4,5
}

console.log(i); // returns 23

//*************************************************************** */
// Blocks & IIFEs

// for data privacy, all we have to do is use a block
// can just use curly braces

{
    const a = 1;
    let b = 2;
}

console.log(a + b)// returns an error a and b not defined

/***************************** */

// template literals - use ``

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
    
}
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// new string methods

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J')) // case sensitive
console.log(n.endsWith('h'))
console.log(n.includes(' '))
console.log(firstName.repeat(5))
console.log(`${firstName} `.repeat(5))

/*************************************************
 Arrow Functions
 */

 const years = [1990, 1965, 1982, 1937];

 //ES5
//  var ages5 = years.map(function(el) {
//     return 2016 - el;
//  })
//  console.log(ages5)

 //ES6

//  const ages6 = years.map(el => 2016 - el);
//  console.log(ages6)

 let ages6 = years.map(el => 2016 - el);
 console.log(ages6)

 ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`)
 console.log(ages6)

 /*
 If we have more than one line, we also have to use curly braces and the return keyword is not implicit and have to write it again
 */

 ages6 = years.map((el, index) => {
     const now = new Date().getFullYear()
     const age = now - el;
     return `Age element ${index + 1}: ${age}.`
 })
 console.log(ages6)

 /* 
 Arrow Functions 2
 unlike normal functions, arrow functions don't get their own this keyword
 They simply use the this keyword of the function they are written in
 */

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            console.log(str)
        })
    },
}


box5.clickMe()