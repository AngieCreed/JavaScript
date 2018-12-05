

var scores, roundScore, activePlayer, gamePlaying;



        var dice = Math.floor(Math.random() * 6) + 1; 
        var prevDice = 6;
        lastPlusCurrent = prevDice + dice;
        //2. display the result
        // var diceDOM = document.querySelector('.dice'); // reads the img src from the dice class in the html file and assigns to the diceDOM variable
        // diceDOM.style.display = 'block';  // sets dice class to display
        // diceDOM.src = 'dice-' + dice + '.png';  // assigns the dice value to the dice image
    

        if (prevDice <= 6 && dice !== 1 && lastPlusCurrent !== 12) {
            //do something
            prevDice = dice;
            
            console.log(prevDice, dice, lastPlusCurrent)
            
        } else {
            console.log(prevDice, dice, lastPlusCurrent,' something else')
        }