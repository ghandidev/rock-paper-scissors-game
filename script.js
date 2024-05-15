function getRandomComputerResult() {
  const options = ['Rock', 'Paper', 'Scissors'];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

console.log(getRandomComputerResult());
