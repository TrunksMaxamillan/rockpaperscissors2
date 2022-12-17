let playerScore = 0;
let computerScore = 0;
let moves = 0;

// This snippet defines the valid choices the CPU can make
function getComputerChoice() {
const choices = ["rock", "paper", "scissors"];
const randomChoice = Math.floor(Math.random() * choices.length);
return choices[randomChoice];
}

//console.log(getComputerChoice());

//Player Choice takes input and limits possibilities
function getPlayerChoice() {
let input = prompt("Rock, Paper, or Scissors?");
const result = input.toLowerCase();
//retun the output of what the player inputted
return input;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
       if (playerSelection===computerSelection){
     return "this is a tie";
} else if (playerSelection==="rock" && computerSelection==="scissors") {
     playerScore = ++playerScore
     moves = ++moves
     return "Rock beats Scissors";
} else if (playerSelection==="paper" && computerSelection==="rock") {
     playerScore = ++playerScore
     moves = ++moves
     return "Paper beats Rock";
} else if (playerSelection==="scissors" && computerSelection==="paper") {
     playerScore = ++playerScore
     moves = ++moves
     return "Scissors beats Paper";
} else if (playerSelection==="rock" && computerSelection==="paper") {
     computerScore = ++computerScore
     moves = ++moves
     return "Rock loses to Paper";
} else if (playerSelection==="paper" && computerSelection==="scissors") {
     computerScore = ++computerScore
     moves = ++moves
     return "Paper loses to Scissors";
} else if (playerSelection==="scissors" && computerSelection==="rock") {
     computerScore = ++computerScore
     moves = ++moves
     return "Scissors loses to Rock";
}
}

//console.log(playRound(playerSelection, computerSelection));

function game() {
  playRound();
  return playRound;

}  