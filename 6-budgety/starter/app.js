
//module that will handle our budget data
// variable is an immediately-invoked fxn expression (IIFE)that will return an object
// returns an object with all of the functions

/* 
So using the public test method, which is the one that we exposed to the public,
actually works while using the add methods, or the x variable, does not because they are private.


*/
// var budgetController = (function() {

//     var x = 23;

//     var add = function(a) {
//         return x + a;
//     }

//     return { // return an object containing a method - accessible outside of the module - object is assigned to the budgetController variable
        // publicTest: function(b) { // the variable is an object with the publicTest method
//             return (add(b))
//         }
//     }
// })();




// var UIController = (function() {



// })();


// Pass the other two modules as arguments to the controller so it knows about the other two and can connect them
// var controller = (function(budgetCtrl, UICtrl) {

// var z = budgetCtrl.publicTest(5);

// return {
//     anotherPublic: function() {
//         console.log(z)
//     }
// }


// })(budgetController, UIController);


// Budget Controller
var budgetController = (function() {

   
})();



// UI Controller{


var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }


// write a function/method to use in the controller so it can't be private
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,// will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };

        },
          
        getDOMstrings: function() {
            return DOMstrings
        }
    }

})();


// Pass the other two modules as arguments to the controller so it knows about the other two and can connect them
//Global App Controller
//calls methods created in the other controllers
var controller = (function(budgetCtrl, UICtrl) {

    //setup event listener functions
    var setupEventListeners = function() {

        // to access string variables in UI controller
        var DOM = UICtrl.getDOMstrings()

        // if anyone hits any key in the document
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // if anyone hits return anywhere in the document
        document.addEventListener('keypress', function(event) {
        
        if(event.keycode === 13 || event.which === 13) {  //which is for older browsers
            ctrlAddItem()
        }

        })
    };

    var ctrlAddItem = function() {
        //1. get field input data
        var input = UICtrl.getInput();
        console.log(input)

       //2. add item to budget controller

       //3. add the item to the UI

       //4. calculate the budget

       //4. display the budget on the UI

   }

    return {
        init: function() {
            console.log('application has started');
            setupEventListeners();
        }
    };


})(budgetController, UIController);

controller.init()


