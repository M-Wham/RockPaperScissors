const ansArry = ["Rock", "Paper", "Scissors"];

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * ansArry.length);
  return ansArry[randomChoice];
}

function getHumanChoice() {
  let choice = prompt("Enter Rock, Paper, or Scissors:");

  if (!choice) return null; // handle cancel

  const formattedChoice =
    choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

  if (ansArry.includes(formattedChoice)) {
    return formattedChoice;
  } else {
    alert("Invalid choice!");
    return getHumanChoice(); // ask again until valid
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let gameOver = false;

  function playRound(humanChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();
    //const humanChoice = getHumanChoice();

    resultsDiv.textContent = "";

    const choice = document.createElement("p");
    choice.textContent = `Player: ${humanChoice} | Computer: ${computerChoice}`;
    resultsDiv.appendChild(choice);

    const outcome = document.createElement("p");

    if (computerChoice === humanChoice) {
      outcome.textContent = "Draw!";
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      outcome.textContent = "You win!";
      humanScore++;
    } else {
      outcome.textContent = "You lose!";
      computerScore++;
    }

    resultsDiv.appendChild(outcome);

    const scoreTxt = document.createElement("p");
    scoreTxt.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
    resultsDiv.appendChild(scoreTxt);

    if (humanScore === 5 || computerScore === 5) {
      gameOver = true;
      const endGameMsg = document.createElement("h2");
      if (humanScore === 5) {
        endGameMsg.textContent = "YOU WON!";
      } else {
        endGameMsg.textContent = "YOU LOSE!";
      }
      resultsDiv.appendChild(endGameMsg);

      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
    }

  }

rockBtn.addEventListener("click", () => {
  playRound("Rock");
});

paperBtn.addEventListener("click", () => {
  playRound("Paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("Scissors");
});


  console.log("Final Scores:");
  console.log("Your Score:", humanScore);
  console.log("Computer Score:", computerScore);
}



// Start the game
playGame();