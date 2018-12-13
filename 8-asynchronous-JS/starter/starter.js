
// const second = () => {
//     setTimeout(() => {
//         console.log('Async Hey there')
//     }, 2000)
// }



// const first = () => {
//     console.log('hey there');
//     second()
//     console.log("The End")
// }
// first()

// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974]
//         console.log(recipeID)
        
//         setTimeout((id) => {
//             const recipe = {title: 'Fresh Tomato Pasta', publisher: "Jonas"}
//             console.log(`${id}: ${recipe.title}`)

//             setTimeout(publisher => {
//                 const recipe2 = {title: "Italian Pizza", publisher: "Jonas"};
//                 console.log(recipe);
//             }, 1500, recipe.publisher);

//         }, 1500, recipeID[2]);


//     }, 1500);
// }

// getRecipe();

/* 
PROMISES
a promise is an object that keeps track about whether a certain event has happened already or not, and if it did happen,
then the promise determines what happens next.

Kind of implements the concept of a future value that we are expecting

Before the event has happened, the promise is pending
After the event has happened, the promise is called

To consume the promise, we use to methods - "then" and "catch"
*/


// 1st Promise
// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([523, 883, 432, 974])
//     }, 1500);

//     });


// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout((ID) => {
//             const recipe = {title: 'Fresh Tomato Pasta', publisher: "Jonas"}
//             resolve(`${ID}: ${recipe.title}`)   
//         }, 1500, recID);
        
//     })
// };

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {title: "Italian Pizza", publisher: "Jonas"};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1500, publisher);
//     }) 
// }
// Old Way
//
// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2])
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated("Jonas")
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log("error")
// });


// Async/Await was designed for us to consume promises - without all of the callbacks
// can only be used in an async function



// async function getRecipesAW() {
//     const IDs = await getIDs //from first promise above
//     console.log(IDs)

//     const recipe = await getRecipe(IDs[2])
//     console.log(recipe)

//     const related = await getRelated("Jonas")
//     console.log(related)

//     return recipe;
// }

// getRecipesAW().then(result => console.log(result));


/* So, get IDs, is this promise here, and then to consume it, we simply say Await IDs, and assign result to this IDs variable. And, what happens here is that this Await expression, here, will really stop the code from executing, at this point, until the promise is fulfilled.

So, in this case, this get IDs, promise. And, if the promise is resolved, which remember, means that it was successful,
then the value of the Await expression is the resolved value of the promise, which is then assigned to this IDs variable

And so again, what happens here, is that we fire off the functions, so we start the function. And, it then keeps running asynchronously in the background. And then, here, we wait for this promise, here, to resolve, assign a value to this IDs variable, and simply log it to the console.
*/



/*
AJAX and APIs - And basically, it allows us to asynchronously communicate with remote servers

Asynchronous JavaScript And XML
Application Programming Interface

and on a very high level, it's basically a piece of software that can be used by another piece of software in order to basically allow applications to talk to each other.

2 types of APIs
1. Your own API for data coming from your own server
2. External 3rd party APIs

*/

// function getWeather(woeid) {

// fetch(`https://api.codetabs.com/v1/proxy?quest=https://www.metaweather.com/api/location/${woeid}/`)
// .then(result => {
//     console.log(result);
//     return result.json();
// })
// .then(data => {
//     const today = data.consolidated_weather[0]
//     console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp} `)
// })
// .catch(error => console.log(error))
// }

// getWeather(2487956)


// now create the same thing using async await

async function getWeatherAW(woeid) {
    try {
        const result = await fetch
        (`https://api.codetabs.com/v1/proxy?quest=https://www.metaweather.com/api/location/${woeid}/`);
    
        const data = await result.json();
        // console.log(data)
    
        const today = data.consolidated_weather[0]
        const tomorrow = data.consolidated_weather[1]
        console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp} today`)
        console.log(`Temperatures in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp} tomorrow`)
        return data;
    } catch(error) {
        console.log(error)
    }
  
}

getWeatherAW(2487956);
let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon);
});




