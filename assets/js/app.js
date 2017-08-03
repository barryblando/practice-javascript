/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

init();

/*
  'cause this is only for user, we can't use callback function, Callback function means we let a function to call a function
  Example: 
    function btn() {
      //Do Something
    }
    document.querySelector('.btn-roll').addEventListener('click', btn); 
*/

//let's add event listener which is click event and use anonymous function = not reusable

//Roll
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random Number
  var dice = Math.floor(Math.random() *6) + 1;

  // 2. Display the  result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';

  //so let's change the img of dice rolls
  diceDOM.src = 'assets/img/dice-' + dice + '.png';

  // 3. Update Round Score if the rolled number was NOT a 1
  if (dice !== 1) {
    //Add Score to current player which is player 0
    roundScore += dice; //or roundScore = roundScore + dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore; 
  } else {
    // Next Player
    nextPlayer();
  }
});

//Hold
document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] +=  roundScore;
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if player won the game
  if(scores[activePlayer] >= 20) {
    document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.btn-hold').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
  } else { 
    // Next Player
    nextPlayer();
  }
});

//using DRY principle Don't repeat yourself we'll use this in our roll & hold events
function nextPlayer() {
  // We'll use ternary operator
  activePlayer = (activePlayer === 0 ? 1 : 0);
  /* if(activePlayer === 0) { activePlayer = 1; } else { activePlayer = 0; } */

  //when player gets roll dice 1 he/she loses his/her score, so it should be set to zero
  roundScore = 0;
  //Also set zero in the UI
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //so in HTML player-0-panel is currently have class active so will use toggle 
  //what toggle does is to add the class, if it's not there, and if it's there, to remove.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active'); 

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active'); 

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

// let's create init function to initialize variables from the beginning and reuse it 

function init() {
  scores = [0,0]; // Which stores the scores for both the players
  roundScore = 0;
  activePlayer = 0; /* stores the active player, Player 1 = 0 & Player 2 = 1 
        we can use activePlayer to access, to read, or to write, in this case the scores
        right into the scores array. */
  /* 
    lets get id score-0 for player 1, use querySelector method to manipulate, to change values and elements
    and use textContent method for changing its value and it can only set plain text, so no HTML. 
    but if we want to put some html code we'll use innerHTML. We can also use querySelector to actually
    only read elements from a webpage and store into some variable.
  */

  //Setter - for changing/setting the value
  //document.querySelector('#current-' + activePlayer).textContent = dice; 

  //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

  //Getter - for reading/getting the value
  //var x = document.querySelector('#score-0').textContent;

  //to change some CSS on a element.. style property : property value; > (display : none;)
  document.querySelector('.dice').style.display = 'none';

  //so let's use getElementById for ID selector which is faster than querySelector so no more hashtag
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  //check if there's winner & active class that is active
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  //add back active class to first player
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.btn-hold').style.display = 'block';
  document.querySelector('.btn-roll').style.display = 'block';
}




