// Player and Computer Choices
const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");
const compRock = document.getElementById("computer-rock");
const compPaper = document.getElementById("computer-paper");
const compScissors = document.getElementById("computer-scissors");

// Choice Arrays
const playerChoiceArray = [rockBtn, paperBtn, scissorsBtn];
const compChoiceArray = [compRock, compPaper, compScissors];

// Message
const message = document.getElementById("message");

// Add Event Listeners
playerChoiceArray.forEach((choice) => {
  choice.addEventListener("click", buttonClick);
});

// Globally scoped play count variable
let count = 0;

function buttonClick(event) {
  if (playCountExceeded()) {
    return;
  }
  // Randomised Computer Choice
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  console.log(randomChoice);
  showComputerChoice(randomChoice);
  calculateOutcome(event, randomChoice);
  resetGame();
}

function playCountExceeded() {
  count++;
  console.log("play count is currently", count);
  if (count > 3) {
    message.innerText = "You've played 3 times.  No more fun for you!";
    return true;
  }
  return false;
}

// Helper function to display the computer's choice
function showComputerChoice(randomChoice) {
  if (randomChoice === 1) {
    compRock.classList.remove("hidden");
  } else if (randomChoice === 2) {
    compPaper.classList.remove("hidden");
  } else {
    compScissors.classList.remove("hidden");
  }
}

// Helper function to calculate the outcome of the game and display the message
function calculateOutcome(event, randomChoice) {
  console.log("calculateOutcome", event.target.id, randomChoice);
  if (event.target.id === "rock-button") {
    switch (randomChoice) {
      case 1:
        message.innerText = "You tied.";
        break;
      case 2:
        message.innerText = "Oh no!  You lost!";
        break;
      case 3:
        message.innerText = "Nice!  You Won!";
    }
  } else if (event.target.id === "paper-button") {
    switch (randomChoice) {
      case 1:
        message.innerText = "Nice!  You Won!";
        break;
      case 2:
        message.innerText = "You tied.";
        break;
      case 3:
        message.innerText = "Oh no!  You lost!";
    }
  } else {
    switch (randomChoice) {
      case 1:
        message.innerText = "Oh no!  You lost!";
        break;
      case 2:
        message.innerText = "Nice!  You Won!";
        break;
      case 3:
        message.innerText = "You tied.";
    }
  }
}

function resetGame() {
  setTimeout(() => {
    compChoiceArray.forEach((choice) => {
      if (!choice.classList.contains("hidden")) {
        choice.classList.add("hidden");
      }
      message.innerText = "";
    });
  }, 2000);
}
