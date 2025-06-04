function getComputerChoice() {
    const randomvalue = Math.random()
    if (randomvalue<0.33) {
        return "rock"
    } else if (randomvalue<0.66) {
        return "paper"
    } else {
        return "scissors"  
    }  
}


    function getHumanChoice () {
        let choose = prompt("enter ur choice 'rock' 'paper' 'scissors' ")
        return choose.toLowerCase()
}

let humanScore = 0
let computerScore = 0 

function playRound(humanChoice , computerChoice) {
  if (humanChoice===computerChoice) {
    return "it's draw"
  } else if (humanChoice==='rock' && computerChoice==='scissors') {
    humanScore++
    return "you win ! rock beat scissors"
  }  else if (humanChoice==='rock' && computerChoice==='paper') {
    computerScore++
    return "you lose ! paper beat rock"
    
  } else if (humanChoice==='paper' && computerChoice==='scissors') {
    computerScore++
    return "you lose ! scissores beat paper"
  } else if (humanChoice==='paper' && computerChoice==='rock') {
    humanScore++
    return "you win ! paper beat rock"

  } else if (humanChoice ==='scissors' && computerChoice==='rock') {
    computerScore++
    return "you lose ! rock beat scissors"
    
  } else if (humanChoice==='scissors' && computerChoice==='paper') {
    humanScore++
    return "you win ! scissors beat paper"
  }
}
let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
console.log(humanChoice);
console.log(computerChoice);
const result = playRound(humanChoice, computerChoice)
console.log(result)
function playGame() {
  for (let itr = 1; itr < 5; itr++) {
    let humanChoice = getHumanChoice();
    console.log(humanChoice);
    let computerChoice = getComputerChoice()
    console.log(computerChoice);
    console.log(playRound(humanChoice,computerChoice))
  }
  
}
playGame()