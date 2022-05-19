let premierTeams = [
    'Arsenal', 'Aston Villa', 'Brentford', 'Brighton', 'Burnley', 'Chelsea', 'CrystalPalce', 'Everton', 'LeedsUnited', 'LeicesterCity', 
    'Liverpool', 'ManchesterCity', 'ManchesterUnited', 'NewcastleUnited', 'NorwichCity', 'Southampton', 'TottenhamHotspur', 'Watford', 
    'WestHamUnited', 'Wolverhampton']

let answer;
let totaltWrongs = 6;
let mistakes = 0;
let guess = [];
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
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }

  getRandomTeam();
  buildKeyboard();