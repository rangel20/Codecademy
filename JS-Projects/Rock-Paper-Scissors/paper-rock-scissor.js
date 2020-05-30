const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  return (userInput === 'rock' ||
    userInput === 'paper' || 
    userInput === 'scissors') ? userInput : console.log('Invalid input!');
};

const getComputerChoice = () => {
  const cp = Math.floor(Math.random() * 3);
  return (cp === 0) ? 'rock' : (cp === 1) ? 'paper' : 'scissors';
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return 'The game is a tie!';
};