// selecciona un valor aleatorio de un array
function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}
let playerScore = 0;
let computerScore = 0;
// verifica quien a ganado la ronda
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  );
}
