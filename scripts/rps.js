const button = document.querySelector("button");

// fxn declarations, will try to implement anon and arrow fxns later

function getComputerChoice() {
    
    let choiceNum = Math.floor(Math.random() * 3); // multiply by 3 bc only 3 choices in this game
    let choices = ["Rock", "Paper", "Scissors"]; // possible choices of computer
    let selection = choices[choiceNum];

    console.log(`The computer chose ${selection}`)
    return selection;

}

// add arrow fxn

const roundOfGame = (playerSelection, computerSelection) => {

    let me = prompt("Please enter a valid selection in rock, paper, scissors.");
    let them = getComputerChoice();
    let firstChar = me.charAt(0);
    let restOfString = me.slice(1);

    const winMap = {

        "Rock" : "Scissors",
        "Scissors" : "Paper",
        "Paper" : "Rock"

    }

    let formattedSelection = `${firstChar.toUpperCase()}${restOfString.toLowerCase()}`;

    if (formattedSelection === them) {

        console.log("It's a tie");
        return "tie";

    }

    if (winMap[formattedSelection] === them) {

        console.log("You win!");
        return "win";

    }

    console.log("You lose!");
    return "lose";

}

// implement a playGame fxn

button.addEventListener("click", roundOfGame);

