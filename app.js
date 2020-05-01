// Listen for the go button
document.querySelector('#button').addEventListener('click', playGame)

let player = document.querySelector('#userChoice')
let userOutput = document.querySelector('#userOutput')
let computerOutput =  document.querySelector('#computerOutput')
let results = document.querySelector('#results')


const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' ||  userInput === 'scissors' || userInput === 'bomb'){
    userOutput.value = player.value;
    
  } else {
    alert('choose rock paper or scissors')
    userOutput.value = 'some bull shit try again'

  }
}; 

const getComputerChoice = () => {
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

const determineWinner = (userChoice, computerChoice) => {
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
  getUserChoice(player.value);
  getComputerChoice();
  determineWinner(player.value, computerOutput.value)

  console.log(player.value)
  console.log(computerOutput.value)
  console.log(results.value);
  player.value = ''
  // computerOutput.value = ''

  e.preventDefault();
  
}
