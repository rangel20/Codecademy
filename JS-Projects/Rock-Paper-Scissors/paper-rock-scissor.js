const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  return (userInput === 'rock' ||
    userInput === 'paper' || 
    userInput === 'scissors' ||
    userInput === 'bomb') ? userInput : console.log('Invalid input!');
};

const getComputerChoice = () => {
  const cp = Math.floor(Math.random() * 3);
  return (cp === 0) ? 'rock' : (cp === 1) ? 'paper' : 'scissors';
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') return 'You won!'
  if (userChoice === computerChoice) return 'The game is a tie!';
  if (userChoice === 'rock')
    return (computerChoice === 'paper') ? 'The computer won!': 'You won!';
  if (userChoice === 'paper')
    return (computerChoice === 'scissors') ? 'The computer won!': 'You won!';
  if (userChoice === 'scissors')
    return (computerChoice === 'rock') ? 'The computer won!': 'You won!';
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
};

playGame(); // This runs the game.
