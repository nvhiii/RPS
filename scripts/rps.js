// Rock Paper Scissors implementation

// game container selector
const gameContainer = document.querySelector(`.game`);
const gameRounds = document.querySelector(`.game-rounds`);
const score = document.querySelector(`.score`);
let uw = 0;
let cw = 0;
let tie = 0;

// computer selection fxn
function computerSelection() {
  const choices = [`ROCK`, `PAPER`, `SCISSORS`];
  const arrayIndex = Math.floor(Math.random() * 3);
  const choice = choices[arrayIndex];

  return choice;
}

function playRound(userChoice, computerChoice) {
  const winMap = {
    ROCK: "SCISSORS",
    SCISSORS: "PAPER",
    PAPER: "ROCK",
  };

  if (userChoice === computerChoice) {
    const tieGame = document.createElement(`li`);
    tieGame.textContent = `User chose ${userChoice} and computer chose ${computerChoice}, 
                            hence, tie.`;
    ++tie;
    gameRounds.appendChild(tieGame);
  } else if (winMap[userChoice] === computerChoice) {
    const userWins = document.createElement(`li`);
    userWins.textContent = `User chose ${userChoice} and computer chose ${computerChoice}, 
                            hence, user wins!`;
    ++uw;
    gameRounds.appendChild(userWins);
  } else {
    const computerWins = document.createElement(`li`);
    computerWins.textContent = `User chose ${userChoice} and computer chose ${computerChoice}, 
                                hence, computer wins!`;
    ++cw;
    gameRounds.appendChild(computerWins);
  }

  if (uw === 5 || cw === 5) {
    const winner = uw === 5 ? "User" : "Computer";
    const winnerMessage = document.createElement(`li`);
    winnerMessage.textContent = ` ${winner} is the winner! `;
    gameRounds.appendChild(winnerMessage);

    disableRPSButtons(); // Disable rock, paper, scissors buttons

    const resetButton = document.createElement(`button`);
    resetButton.textContent = "Play Again";
    resetButton.addEventListener(`click`, () => {
      gameRounds.innerHTML = ""; // Clear list items
      uw = 0;
      cw = 0;
      tie = 0;
      score.textContent = `User: ${uw} Computer: ${cw} Tie: ${tie}`;
      enableRPSButtons();
      gameContainer.removeChild(resetButton); // Remove the button
    });
    gameContainer.appendChild(resetButton); // Append the button to the game container
  }

  score.textContent = `User: ${uw} Computer: ${cw} Tie: ${tie}`;
}

// Button event listeners
const rockButton = document.querySelector(`#rock`);
const paperButton = document.querySelector(`#paper`);
const scissorsButton = document.querySelector(`#scissors`);

rockButton.addEventListener(`click`, () => {
  let computerChoice = computerSelection();
  let userChoice = `ROCK`;
  playRound(userChoice, computerChoice);
});

paperButton.addEventListener(`click`, () => {
  let computerChoice = computerSelection();
  let userChoice = `PAPER`;
  playRound(userChoice, computerChoice);
});

scissorsButton.addEventListener(`click`, () => {
  let computerChoice = computerSelection();
  let userChoice = `SCISSORS`;
  playRound(userChoice, computerChoice);
});

function disableRPSButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableRPSButtons() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}
