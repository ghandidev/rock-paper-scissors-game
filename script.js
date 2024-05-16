// selecciona un valor aleatorio de un array para la computadora
function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}
let playerScore = 0;
let computerScore = 0;
// aplica la normativa del juego
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Scissors' && computer === 'Paper') ||
    (player === 'Paper' && computer === 'Rock')
  );
}
// devuelve la puntuacion
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (!hasPlayerWonTheRound(userOption, computerResult)) {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  } else {
    return `It's a tie! Both chose ${userOption}`;
  }
}
