
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

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    
       var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }      
    };

    return {
        addItem: function(type, des, val) { 
            var newItem, ID;
            
            // create new ID - last ID + 1 
            //   | allItems[exp]    | length - 1 is the index of the last position| .id is the id of the last position
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                } else {
                    ID = 0;
                }
            
            
            // create new item based on 'inc' or 'exp' type
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        }
    };
   
})();


// UI Controller{


var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
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
        
        addListItem: function(obj, type) { // obj = newItem object created in ctrlAddItem function
            var html, newHtml, element;

            // create html string with placeholder text">
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // replace the placeholder text with actual data which is data we receive from the object - replace method
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert the html into the DOM
            // beforeend keyword makes it so that all of our HTML will be inserted as a child of these containers
            // but as the last child so as the last element in the list
            /* The insertAdjacentHTML() method parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on, and thus it does not corrupt the existing elements inside that element. 
            all of that html pasted above has been commented out in the html file
            inserted as a child of (element)
            */
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },

        // new method to clear input fields
        /* It doesn't return a nice arraywhich we can then use and loop over,but instead it returns something similar,
        but still different,and that's a list.So, again, a list is a bit similar to an array,
        but it doesn't have all of these nice methods that we have for arrays.
        So the solution to that is to convert the list to an array. slice method */

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            })
            fieldsArr[0].focus(); //puts the cursor focus on the inputDescription field
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
        var input, newItem;
        //1. get field input data
        input = UICtrl.getInput();

       //2. add item to budget controller
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);

       //3. add the item to the UI
       UICtrl.addListItem(newItem, input.type);

       // clear the fields
       UICtrl.clearFields();

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


