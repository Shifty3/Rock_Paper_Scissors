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
  //  but first we need to get the input field
 let playerChoiceInput = document.getElementById("input");
 
    //  player choose rock, paper, or scissors
 const playGame = function () {
   console.log("Sanity check! Play game!");

   let playerChoice = playerChoiceInput.value;
   //  then we need to validate the user's input to make sure it's rock/paper/scissors
   if (
     playerChoice === "rock" ||
     playerChoice === "Rock" ||
     playerChoice === "paper" ||
     playerChoice === "Paper" ||
     playerChoice === "scissors" ||
     playerChoice === "Scissors"
   ) {
     console.log(playerChoice);
   } else {
     return;
   }
   //  then we need to make the use's choice pop up in the output
   const choice = document.querySelector(".player");
   choice.innerHTML = `You chose ${playerChoice}`;
   
   //  computer generate a random choice of the 3
   const computer = ["rock", "paper", "scissors","rock", "paper", "scissors","rock", "paper", "scissors"];
   //generates a random choice inside my array
   const computerDecision = Math.floor(Math.random() * computer.length);
   //accessing the array element at computerChoice
   const computerChoice = computer[computerDecision];
   console.log(computerChoice);
   //  after we make that pop up in the computer output field
   const computerFinalChoice = document.querySelector(".computer");
   computerFinalChoice.innerHTML = `Bot chose ${computerChoice}`;
   
   
   //invokes the function that validates the player and computer choice
   testing(playerChoice, computerChoice);

   return false;
 };

 //  then we need to add an event listner because we need to log the choices
 //e.code allows me know what physical was pressed 
 function checkIfEnter(e) {
   console.log(e.code);
   if (e.code === "Enter") {
     playGame();
   };
 
 };
 

 //validates and returns if player won or not
 function testing(playerChoice, computerChoice) {
   let result;
 //  compare both the player and computer choices to determine who won
   if (playerChoice === computerChoice) {
     console.log("Aaaay it's a tie");
     result = "Aaaay it's a tie";
   } else if (playerChoice === "rock" && computerChoice === "scissors") {
     console.log("You win");
     result = "You win";
   } else if (playerChoice === "paper" && computerChoice === "rock") {
     console.log("You win");
     result = "You win";
   } else if (playerChoice === "scissors" && computerChoice === "paper") {
     console.log("You win");
     result = "You win";
   } else {
     console.log("you loose");
     result = "you loose";
   };
   //displays text for game result
   let gameResult = document.getElementById("gameResult");
   gameResult.innerHTML = `${result + '!!'}`;
 };
 
 
   //this is going load the pop up window displaying if player won or lost
   document.addEventListener("DOMContentLoaded", function(){
     const modal = document.getElementById("myModal");
     const closeModal = document.getElementById("closeModal");
     const form = document.getElementById("myForm");
   
     //this is goign to open the modal
     function openModal(){
       modal.style.display = "block";
     };
     //functoin to close the modal
     function close(){
       modal.style.display = "none";
     };
   
     //open modal upon submission
     form.addEventListener("submit", function(event){
       event.preventDefault();
       openModal();
     });
     //close modal whe clicking on the 'x'
     closeModal.onclick = close;
   
     //close modal when clicking outside the modal content
     window.onclick = function(event){
       if(event.target === modal){
         close()
       };
     };
   
     //close modal on pressing enter
    //  window.addEventListener("keydown",function(event){
    //    if(event.key === 'Enter'){
    //      openModal();
    //    }
    //  })
   });
   
 
 
 //  when we click on that button, it will start the game over.
 playerChoiceInput.addEventListener("keydown", checkIfEnter);
 submitButton.addEventListener("click", playGame, false);
 