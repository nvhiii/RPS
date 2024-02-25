// revisited concise code
const button = document.querySelector("button");

// fxn declaration
function getComputerChoice() {

    let choices = ["Rock", "Paper", "Scissors"];
    let choiceNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[choiceNum];
    return computerChoice;

}

function singleRound() {

    let playerSelection = prompt("Please enter rock, paper, or scissors."); // enter selection before seeing computer choice
    let computerSelection = getComputerChoice(); // computer choice stored here

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

            return "win";

        } else { // computer win

            return "loss";

        }

    } else {

        console.log("Please enter a valid value for rock, paper, and scissors!");

    }

}

function playGame() {

    for (let i = 1; i < 5; i++) {

        singleRound();

    }

}

// test
// let playa;
// let computa;
// console.log(singleRound(playa, computa));

// button.addEventListener("click", singleRound);