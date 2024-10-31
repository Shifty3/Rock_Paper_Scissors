/*
 player choose rock, paper, or scissors
 but first we need to get the input field
 then we need to validate the user's input to make sure it's rock/paper/scissors
 then we need to add an event listner because we need to log the choices
 then we need to make the use's choice pop up in the output

 computer generate a random choice of the 3 
 after we make that pop up in the computer output field
 compare both the player and computer choices to determine who won
 then we create the pop up window to display who won. 
 display the computer choice
 display the player choice
 show if the player won or lost
 then we make another button called try again. 
 when we click on that button, it will start the game over. 
 

 */
const submitButton = document.querySelector("#submitButton");
console.log(submitButton);
let playerChoiceInput = document.getElementById("input");

const playGame = function () {
  console.log("Sanity check! Play game!");
  //  player choose rock, paper, or scissors
  //  but first we need to get the input field
  let playerChoice = playerChoiceInput.value;
  //  then we need to validate the user's input to make sure it's rock/paper/scissors
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    console.log(playerChoice);
  } else {
    return;
  }
  //  then we need to make the use's choice pop up in the output
  const choice = document.querySelector(".player");
  choice.innerHTML = `You chose ${playerChoice}`;

  //  computer generate a random choice of the 3
  const computer = ["rock", "paper", "scissors"];
  //generates a random choice inside my array
  const computerDecision = Math.floor(Math.random() * computer.length);
  //accessing the array element at computerChoice
  const computerChoice = computer[computerDecision];
  console.log(computerChoice);
  //  after we make that pop up in the computer output field
  const computerFinalChoice = document.querySelector(".computer");
  computerFinalChoice.innerHTML = `You chose ${computerChoice}`;
  //  compare both the player and computer choices to determine who won

  testing(playerChoice, computerChoice);
  //  then we create the pop up window to display who won.
  //  display the computer choice
  //  display the player choice
  //  show if the player won or lost
  //  then we make another button called try again.
  return false;
};
//  then we need to add an event listner because we need to log the choices
function checkIfEnter(e) {
  console.log(e.code);
  if (e.code === "Enter") {
    playGame();
  }
}

function testing(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("Aaaay it's a tie");
    return;
  }

  if (playerChoice === "rock" && computerChoice === "scissors") {
    console.log("You win");
    return;
  }
  if (playerChoice === "paper" && computerChoice === "rock") {
    console.log("You win");
    return;
  }
  if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log("You win");
    return;
  }

  console.log("you loose");
  return;
}

//  when we click on that button, it will start the game over.
playerChoiceInput.addEventListener("keydown", checkIfEnter);
submitButton.addEventListener("click", playGame, false);
