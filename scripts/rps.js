// revisited concise code
const button = document.querySelector("button");

// fxn declaration
function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let choiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[choiceNum];
    return computerChoice;

}

function singleRound(playerSelection, computerSelection) {

    playerSelection = prompt("Please enter rock, paper, or scissors."); // enter selection before seeing computer choice
    computerSelection = getComputerChoice(); // computer choice stored here

    let winMap = { // object key-value pairing for wins

        "Rock" : "Scissors",
        "Scissors" : "Paper",
        "Paper" : "Rock"
    }

    // formatting so that user input follows map
    let firstChar = playerSelection.charAt(0);
    let restOfString = playerSelection.slice(1); // returns remaining string from index 1 to end

    let formattedPlayerSelection = `${firstChar.toUpperCase()}${restOfString.toLowerCase()}`;

    // check if user selection is valid
    if (winMap.hasOwnProperty(formattedPlayerSelection)) {

        // tied logic
        if (formattedPlayerSelection === computerSelection) {

            return "tie";

        } else if (winMap[formattedPlayerSelection] === computerSelection) { // player win

            console.log(`Player wins!
            Player choice: ${formattedPlayerSelection}, Computer choice: ${computerSelection}`);
            return "win";

        } else { // computer win

            console.log(`Computer wins!
            Player choice: ${formattedPlayerSelection}, Computer choice: ${computerSelection}`);
            return "loss";

        }

    } else {

        console.log("Please enter a valid value for rock, paper, and scissors!");

    }

}

function playGame() {

    // if values aren't initialied, you cannot increment!!
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    alert(`Initiating a best of 5 rock-paper-scissors game...`);

    for (let i = 0; i < 5; i++) {

        let roundResult = singleRound();
        if (roundResult === "win") {

            playerWins++;

        } else if (roundResult === "loss") {

            computerWins++;

        } else if (roundResult === "tie") {

            ties++;

        } else {

            console.log(`Please enter a valid value`);

        }
    }

    // ternary logic
    let winner = playerWins > computerWins ? "Player" : "Computer";
    let loser = winner === "Player" ? "Computer" : "Player";
    console.log(`The winner is ${winner}. The loser is ${loser}.`);

}

button.addEventListener("click", playGame);

// test
// let playa;
// let computa;
// console.log(singleRound(playa, computa));

// button.addEventListener("click", singleRound);