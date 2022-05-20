let premierTeams = [
    'Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'CrystalPalce', 'Everton', 'LeedsUnited', 'LeicesterCity', 
    'Liverpool', 'ManchesterCity', 'ManchesterUnited', 'NewcastleUnited', 'NorwichCity', 'Southampton', 'TottenhamHotspur', 'Watford', 
    'WestHamUnited', 'Wolverhampton'];
let answer;
let mistakes = 6;
let guess = [];
let currentWord = null;








/**
 * Picks a random team from the premierTeams array
 */
function getRandomTeam () { 
  answer = premierTeams[Math.floor(Math.random() * premierTeams.length)];
    
}

/**
 * Generats button that represent the alphabet and inserts them to html.
 */
function buildKeyboard() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="alphabet"
          id='` + letter + `'
          onClick="playerGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }
  /**
   * Displays dotted line for the hidden word for the player to guess
   */
  function gameWord() {
    answer = answer.toLowerCase();
    currentWord = answer.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('currentTeam').innerHTML = currentWord;
    console.log(answer);
  } 

  //Updates gallowimage when player enters wrong 
  function updateGallowImg() {
    if(mistakes === 6){
    document.getElementById('gallowImage').src = 'assets/images/hangman0.JPG';
  }
  else if (mistakes === 5)
  document.getElementById('gallowImage').src = 'assets/images/hangman1.JPG';
  
  else if (mistakes === 4){
  document.getElementById('gallowImage').src = 'assets/images/hangman2.JPG';
  }
  else if (mistakes === 3){
    document.getElementById('gallowImage').src = 'assets/images/hangman3.JPG';
  }
  else if (mistakes === 2){
    document.getElementById('gallowImage').src = 'assets/images/hangman4.JPG';
  }
  else if (mistakes === 1){
    document.getElementById('gallowImage').src = 'assets/images/hangman5.JPG';
  }
  else if (mistakes === 0) 
    document.getElementById('gallowImage').src = 'assets/images/hangman6.JPG';
  }
  
  function correctWord() {
    if(currentWord === answer) {
      document.getElementById('currentTeam').innerHTML = 'Winner!';
    } 
  }
  function gameOver() {
    if(mistakes === 0){
      document.getElementById('currentTeam').innerHTML = 'Game over!';
    }

  }
  function upDateChancesLeft () {
    document.getElementById('mistakes').innerHTML = mistakes;
  }

  function playerGuess(chosenLetter) {
    guess.indexOf(chosenLetter) === -1 ? guess.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      gameWord();
      correctWord();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes--;
      upDateChancesLeft();
      updateGallowImg();
      gameOver();
    }
  }


  document.getElementById('hint').addEventListener('click', getHint);
  /**
   * Alerts a hint for teams homestadium
   */
  function getHint () {
    let hints = [
      'Emirates Stadium', 'Villa Park', 'Brentford Community Stadium', 'Falmer Stadium', 'Turf Moor', 'Stamford Bridge', 'Selhurst Park',
      'Goodison Park', 'Elland Road', 'King Power Stadium', 'Anfield', 'Etihad Stadium', 'Old Trafford', 'St James Park', 'Carrow Road', 
      'St Marys Stadium', 'Tottenham Hotspur Stadium', 'Vicarage Road', 'London Stadium', 'Molineux Stadium'];
      lower();
      let hintIndex = premierTeams.indexOf(answer);
      window.alert(hints [hintIndex]); 
}

document.getElementById('reset').addEventListener('click', resetButton);

function resetButton () {
    mistakes = 6;
    guess = [];
    document.getElementById('gallowImage').src = 'assets/images/hangman0.JPG';
    getRandomTeam();
    buildKeyboard();
    gameWord(); 
    playerGuess();
  }
  
  getRandomTeam();
  buildKeyboard();
  gameWord(); 