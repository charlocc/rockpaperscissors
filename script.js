

var wins = 0
var losses = 0
var ties = 0


function winMessage() {

    return "You win!";

}

function loseMessage() {

    return "You lose!";

}

function tieMessage() {

    return "You tied!";

}

function statCount() {

    return "Wins = " + wins + "\nLosses = " + losses + "\nTies = " + ties;

}

function playGame() {

    var userChoice = prompt("Please choose R, P, or S")
    var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "R";
        } else if(computerChoice <= 0.67) {
            computerChoice = "P";
        } else {
            computerChoice = "S";
        }

    if (((userChoice === "R") && (computerChoice === "S")) || ((userChoice === "S") && (computerChoice === "P")) || ((userChoice === "P") && (computerChoice === "R")))  {

        alert(winMessage());
        wins ++;
        alert(statCount());
        
    } else if (userChoice === computerChoice) {

        alert(tieMessage());
        ties ++;
        alert(statCount());

    } else {

        alert(loseMessage());
        losses ++;
        alert(statCount());

    }

    console.log(wins);
    console.log(losses);
    console.log(ties);

    var playAgain = confirm("Do you want to play again?")
    console.log(playAgain);

    if (playAgain === true) {
        playGame();
    }

}

playGame();