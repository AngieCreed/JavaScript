
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
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    }

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        })
        // cur refers to either the income or expense object that is stored
        // at the current position of the expense or income array
        data.totals[type] = sum
        
    }

    
       var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 // minus 1 is usually a value to say that something is nonexistent. So if there
                        // are no budget values and no total expenses or incomes, there cannot be a percentage
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
        },

        deleteItem: function(type, id) {

            var ids, index;

            ids = data.allItems[type].map(function(current) {
                // map returns a new array
                return current.id;
            })

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1)
            }

        },

        calculateBudget: function() {

            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function() {
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc)
            })
            
        },

        getPercentages: function() {

            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage()
            })
            return allPerc;
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

            var formatNumber = function(num, type) {

            // + or - before number

            //exactly 2 decimal points

            //comma separating thousands
            num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
        }

        var nodeListForEach = function(list,callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i)
                }
            }


// write a function/method to use in the controller so it can't be private
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,// will be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
                //parseFloat converts a string to a floating number
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
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

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

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el);
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function (current, index, array) {
                current.value = '';
            })
            fieldsArr[0].focus(); //puts the cursor focus on the inputDescription field
        },

        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
           

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }   
        },

        displayPercentages: function(percentages) {

            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
            nodeListForEach(fields, function(current, index) {

                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
                
            })

        },

        displayMonth: function() {
            var now, year, months, month;

            now = new Date();
            // var christmas = new Date(2016, 11, 25) -- index based month
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth()
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },

        changedType: function() {

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus'); 
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');

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

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    
    var updateBudget = function() {

        //1. calculate the budget
        budgetCtrl.calculateBudget();
        //2. return the budget
        var budget = budgetCtrl.getBudget();
       //3. display the budget on the UI
        UICtrl.displayBudget(budget);
    }
    
    var updatePercentages = function() {

        // calc percentages
        budgetCtrl.calculatePercentages();
        // read from the budget controller
        var percentages = budgetCtrl.getPercentages();
        // update UI
        UICtrl.displayPercentages(percentages);
    }
    
    
    var ctrlAddItem = function() {
        var input, newItem;
        //1. get field input data
        input = UICtrl.getInput();
        
        if (input.description !== '' && !isNaN(input.value) && input.value> 0)  { // !isNaN means it is not not a number meaning it is a number
       //2. add item to budget controller
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);

       //3. add the item to the UI
       UICtrl.addListItem(newItem, input.type);

       // 4. clear the fields
       UICtrl.clearFields();

       // 5. Calculate and update budget
       updateBudget();

       // calculate and update percentages
       updatePercentages();
    }

   };

   var ctrlDeleteItem = function(event) {
       var itemID, splitID, type, ID;

       itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

       if(itemID) {

           splitID = itemID.split('-'); //splits string into an array with 2 elements
           type = splitID[0];
           ID = parseInt(splitID[1]);  //need to convert string to a number


           // delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
           // delete the item from the UI
            UICtrl.deleteListItem(itemID)

           // update and show the new budget
           updateBudget();

            // calculate and update percentages
            updatePercentages();

       }
   }

    return {
        init: function() {
            console.log('application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };


})(budgetController, UIController);

controller.init()


