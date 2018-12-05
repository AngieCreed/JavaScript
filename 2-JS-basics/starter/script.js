// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = "teacher";
// console.log(job)

//Variable Mutation & type coercion

// var firstName = 'John';
// var age = 24
// console.log(firstName + ' ' + age)

// var job, isMarried; //can declare multiple variables on the same line, comma separated
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is ' + age + ' ' + 'years old' + '. Is he married? ' + isMarried)

// age = 'twenty eight';
// job = 'driver';
// alert(firstName + ' is ' + age + ' ' + 'years old' + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last Name?');
// console.log(firstName + ' ' + lastName);

//Basic operators
// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn)

// console.log(now + 2)
// console.log(now * 2);
// console.log(now / 10);

// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder)
// console.log(typeof ageJohn)

//operator precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge)

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average)

//multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y)

// more operators
// x = x * 2;
// x *= 2;
// console.log(x)

// x += 10
// console.log(x)

// x = x + 1;
// x++

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will marry soon')
// }
    

// var isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will marry soon')
// }

// var firstName = 'John'
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.')
// }   else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager')
// }   else {
//     console.log(firstName + ' is a man')
// }

// ternary operator and switch statements

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)

// switch

// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs websites');
//         break;
//     default:
//         console.log(firstName + ' does something elses' );
// }
// age = 17
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy')
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager')
//         break;
//     case age >= 20 && age , 30:
//         console.log(firstName + ' is a young man')
//         break;
//     default:
//         console.log(firstName + 'is a man')
// }

//truthy and falsy
//falsy values - undefined, null, 0, '', NaN
//truthy values - all that are not falsy

// var height;
// height = 0;
// if (height || height === 0) {
//     console.log('Variable is defined')
// } else {
//     console.log('variable has not been defined')
// }

//Functions

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane)

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years')
// }

// yearsUntilRetirement(1990, 'John');

// function statements and expressions

// function declaration - don't produce any immediate value
// function whatDoYouDo = function(job, firstName) {
    
// }

// function expression - always results in a value
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case "teacher":
//             return firstName + ' teaches kids how to code';
//         case "driver":
//         return firstName + ' drives a cab';
//         case "designer":
//         return firstName + ' designs websites';
//         default:
//         return firstName + ' does something else'
//     }
// }

// console.log(whatDoYouDo("teacher", "john"))


// Arrays!!!

// initialize new array
// var names = ['John', 'Mark', 'Jane', 'Fred']
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);


// //mutate array data
// names[1] = 'Ben';
// console.log(names)

// names[names.length] = 'Mary';
// console.log(names)

// different data types

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue')
// john.unshift('Mr.') //adds to beginning
// console.log(john)

// john.pop() //removes from end
// console.log(john)

// john.shift() //removes from beginning
// console.log(john)

// console.log(john.indexOf(1990)) //gives index of that value

// var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer'
// console.log(isDesigner)

// Objects and properties
// object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };
// console.log(john.firstName)
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john)

//new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane',
// jane.birthYear = '1969',
// jane['lastName'] = 'Smith';

// console.log(jane)

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age =  2018 - this.birthYear;
//     }
// };

// john.calcAge()
// console.log(john)

//loops and iteration

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (var i = 0; i < 10; i+=2) {
//     console.log(i)
// }


//for loop
// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i])
// }


//while loop - do something while true - only has one condition
// var i = 0
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// }

//continue and break statements

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

//continue - loop continues through entire length of array and returns values that meet condition
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// break - loop continues until condition is not met then breaks out
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}
