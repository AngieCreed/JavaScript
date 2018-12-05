// var markHeight = 3.5;
// var markMass = 175;
// var johnHeight = 3.7;
// var johnMass = 160;

// var markBmi = markMass/ (markHeight * markHeight);
// var johnBmi = johnMass / (johnHeight * johnHeight);

// var markBmiHigher = markBmi > johnBmi;
// console.log("is Mark's BMI Higher? " + markBmiHigher)

// var teamJohnAvg = (89 + 200 + 103)/3;
// var teamMikeAvg = (116 + 94 + 123)/3;
// var teamMaryAvg = (97 + 300 + 105)/3;

// var winner = (teamJohnAvg > teamMikeAvg) && (teamJohnAvg > teamMaryAvg) ? "John": (teamMikeAvg > teamJohnAvg) && (teamMikeAvg > teamMaryAvg) ? "Mike" : "Mary";
// console.log(winner)

// var tips = [];
// var totalAmt = [];
// var bill = [124, 48, 268]

// var tipAmt = function(bill) {
//     if (bill < 50) {
//         return (bill * .2)
//     } else if (bill >= 50 && bill < 200) {
//         return (bill * .15)
//     } else {
//         return (bill * .1)
//     }
// }


// tips.push(tipAmt(bill[0]),tipAmt(bill[1]),tipAmt(bill[2]));
// totalAmt.push((tips[0]+bill[0]),(tips[1]+bill[1]),(tips[2]+bill[2]))
// console.log(tips, totalAmt)

// var mark = {
//     fullName: "Mark Miller",
//     mass:78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = (this.mass) / (this.height * this.height)
//         return this.bmi
//     } 
// }

// var john = {
//     fullName: 'John Smith',
//     mass: 110,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = (this.mass) / (this.height * this.height);
//         return this.bmi
//     }
// }



// console.log("Mark's BMI: " + mark.bmi)
// console.log("John's BMI: " + john.bmi)


// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(mark.fullName + "'s BMI of " + mark.bmi +  " is higher than that of " + john.fullName)
// } else if (john.bmi > mark.bmi) {
//     console.log(john.fullName + "'s BMI of " + john.bmi + " is higher than that of " + mark.fullName)
// } else {
//     console.log(mark.fullName + "'s and " + john.fullName + "'s BMIs are the same")
// }

var johntips = [];
var johntotalAmt = [];
var marktips = [];
var marktotalAmt = [];

var johnBills = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++)
             {
                if (this.bills[i] < 50) {
                    this.tip = (this.bills[i] * .2);
                    johntips.push(this.tip)
                    this.total = (this.bills[i] + this.tip);
                    johntotalAmt.push(this.total)
                } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                    this.tip = (this.bills[i] * .15)
                    johntips.push(this.tip)
                    this.total = (this.bills[i] + this.tip);
                    johntotalAmt.push(this.total)
                } else {
                    this.tip = (this.bills[i] * .1)
                    johntips.push(this.tip) 
                    this.total = (this.bills[i] + this.tip);
                    johntotalAmt.push(this.total)
                }
                
            }
    }
}

var markBills = {
    bills: [77, 475, 110, 45],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++)
             {
                if (this.bills[i] < 100) {
                    this.tip = (this.bills[i] * .2);
                    marktips.push(this.tip)
                    this.total = (this.bills[i] + this.tip);
                    marktotalAmt.push(this.total)
                } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                    this.tip = (this.bills[i] * .1)
                    marktips.push(this.tip)
                    this.total = (this.bills[i] + this.tip);
                    marktotalAmt.push(this.total)
                } else {
                    this.tip = (this.bills[i] * .25)
                    marktips.push(this.tip) 
                    this.total = (this.bills[i] + this.tip);
                    marktotalAmt.push(this.total)
                }
                
            }
    }
}

johnBills.calcTip();
markBills.calcTip();
console.log("john's total bill with tips: " + johntotalAmt)
console.log("john's tip amounts: " + johntips)
console.log("mark's total bill with tips: " + marktotalAmt)
console.log("mark's tip amounts: " + marktips)

tipAvg = function () {
    var johntipsum = 0;
    var marktipsum = 0;

    for (var i = 0; i < johntips.length; i++) {
        johntipsum = (johntipsum + johntips[i])
    }
    for (var i = 0; i < marktips.length; i++) {
        marktipsum = (marktipsum + marktips[i])
    }

    johntipAvg = johntipsum / (johntips.length)
    marktipAvg = marktipsum / (marktips.length)

    if (johntipAvg > marktipAvg) {
        console.log("John's family paid the highest tips on average")
    } else {
        console.log("Mark's family paid the highest tips on average")
    }
}
tipAvg()
console.log("john tip avg: " + johntipAvg)
console.log("mark tip avg: " + marktipAvg)

