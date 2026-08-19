//test if JS is linked to html
console.log("Hello World")

//main code
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const results = document.querySelector("#results");
const score = document.querySelector("#score");

score.setAttribute("style", "margin-top: 16px");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}


// Play one round
function playRound(humanChoice, computerChoice) {

  // If someone has already won, don't play another round
  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  humanChoice = humanChoice.toLowerCase();

  // Tie
  if (humanChoice === computerChoice) {
    results.textContent =
      `It's a tie! You both chose ${humanChoice}.`;

  // Human wins
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    results.textContent =
      `You win! ${humanChoice} beats ${computerChoice}.`;

  // Computer wins
  } else {
    computerScore++;
    results.textContent =
      `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update the score on the page
  score.textContent =
    `You: ${humanScore}  and  Computer: ${computerScore}`;

  // Check if someone has reached 5 points
  if (humanScore === 5) {
    results.textContent += " You won the game!";
  } else if (computerScore === 5) {
    results.textContent += " The computer won the game!";
  }
}



rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()))
