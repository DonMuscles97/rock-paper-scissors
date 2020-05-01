// Listen for the go button
document.querySelector('#button').addEventListener('click', playGame)

let playerInput = document.querySelector('#userChoice')
let userOutput = document.querySelector('#userOutput')
let computerOutput =  document.querySelector('#computerOutput')
let results = document.querySelector('#results')


function getUserChoice (userInput)  {
  // userInput = userInput.toLowerCase();
  console.log(userInput)
  if (userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors' || userInput === 'bomb'){
    userOutput.value = userInput;
    
  } else {
    alert('choose rock paper or scissors')
    userOutput.value = 'an invalid option'

  }
}; 

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  // computerOutput.value = ''
  switch (choice) {
    case 0:
      computerOutput.value = 'rock';
      break;
      
    case 1:
      computerOutput.value = 'paper';
      break;
      
    case 2:
      computerOutput.value = 'scissors';
      break;
  
  }
};

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    results.value = 'you win but you cheated'

  }else if (userChoice === computerChoice) {
    results.value = 'the game was a tie'
   
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      results.value = 'you lose'
      
    } else if (computerChoice === 'scissors') {
      results.value = 'you win'
    
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'rock'){
      results.value = 'you win'
     
    } else if (computerChoice === 'scissors'){
      results.value = 'you lose'
      
    }
  } else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      results.value = 'you lose'
     
    } else if (computerChoice === 'paper'){
      results.value = 'you win'
    }
  } 
}


function playGame(e) {
  let play = playerInput.value
  let player = play.toLowerCase()
  getUserChoice(player);
  getComputerChoice();
  determineWinner(player, computerOutput.value)

  console.log(player)
  console.log(computerOutput.value)
  console.log(results.value);
  console.log(typeof player)
  playerInput.value = ''
  // computerOutput.value = ''

  e.preventDefault();
  
}
