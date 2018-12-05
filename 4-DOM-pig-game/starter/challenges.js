/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, prevDice, lastPlusCurrent;

init();



// function btn() {
    
// }
// btn();  /*this is a callback function = a function that we pass into another function as an argument.  In this case, it is passed into the event listener method 



// document.querySelector('.btn-roll').addEventListener("click", btn)

document.querySelector('.btn-roll').addEventListener("click", function () {
    if(gamePlaying) {
            //1. random number
        var dice1 = Math.floor(Math.random() * 6) + 1;  //assigns random number to dice variable
        var dice2 = Math.floor(Math.random() * 6) + 1

        lastPlusCurrent = prevDice + dice;

        //2. display the result
        //. var diceDOM = document.querySelector('.dice'); // reads the img src from the dice class in the html file and assigns to the diceDOM variable
        document.getElementById('.dice-1').style.display = "block"
        document.getElementById('.dice-2').style.display = "block"

        // diceDOM.style.display = 'block';  // sets dice class to display
        document.ElementById('.dice-1').src = 'dice-' + dice1 + '.png';  // assigns the dice value to the dice image
        document.ElementById('.dice-2').src = 'dice-' + dice2 + '.png';

        //3.  update the round score IF the rolled number was NOT a 1

        

        if (dice !== 1 && lastPlusCurrent !== 12) {
            // Add score
            prevDice = dice
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            console.log(dice, prevDice);
        } else if (lastPlusCurrent === 12) {
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
            console.log(dice, prevDice)
        } else {
            //next player
            console.log(dice, prevDice)
            nextPlayer();
            // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            // roundScore = 0;

            // document.getElementById('current-0').textContent = '0';
            // document.getElementById('current-1').textContent = '0';

            //  document.querySelector('.player-0-panel').classList.toggle('active');
            // document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('.dice').style.display = 'none';

            // document.querySelector('.player-0 panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');

            }
    }
  
});

document.querySelector('.btn-hold').addEventListener("click", function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        var input = document.querySelector('.final-score').value;
        console.log(input);
        var winningScore;
        
        if(input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }

        console.log(input);
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active'); 
    document.querySelector('.player-1-panel').classList.toggle('active');  // removed "active" from player 1; toggling will add it 

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener("click", init);

  function init () {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    gameMax = 0;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  }







// document.querySelector('#current-' + activePlayer).textContent = dice;  // this is a setter

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em';

//to read something from our webpage and store in a variable
// var x = document.querySelector('#score-0').textContent;
// console.log(x)  //this is a getter