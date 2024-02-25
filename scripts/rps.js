const button = document.querySelector("button");

function getComputerChoice() {
    
    let choiceNum = Math.floor(Math.random() * 3); // multiply by 3 bc only 3 choices in this game
    if (choiceNum === 0) {

        console.log("Computer chose Rock!");

    } else if (choiceNum === 1) {

        console.log("Computer chose Papers!");

    } else {

        console.log("Computer chose Scissors!");

    }

}

button.addEventListener("click", getComputerChoice);