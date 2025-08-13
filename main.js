const ansArry = ["Rock", "Paper", "Scissors"];

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

  function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (!humanChoice) return; // stop if user cancels

    if (computerChoice === humanChoice) {
      alert("Draw!");
    } else if (
      (humanChoice === "Rock" && computerChoice === "Scissors") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
      alert("You win!");
      humanScore++;
    } else {
      alert("You lose!");
      computerScore++;
    }

    console.log("Computer chose:", computerChoice);
    console.log("You chose:", humanChoice);
  }

  for (let i = 0; i < 6; i++) {
    playRound();
  }

  console.log("Final Scores:");
  console.log("Your Score:", humanScore);
  console.log("Computer Score:", computerScore);
}

// Start the game
playGame();