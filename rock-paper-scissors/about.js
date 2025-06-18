const human = document.querySelector("#human")
const computer = document.querySelector("#computer")
const result = document.querySelector("#result")
const rockButton = document.querySelector("#rock")
const displayHumanScore = document.querySelector("#displayHumanScore")
const displayComputerScore = document.querySelector("#displayComputerScore")
const displayWinner = document.querySelector("#displayWinner")
const buttons = document.querySelector("#buttons")


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
// i remove my getHumanChoice function

let humanScore = 0
let computerScore = 0 
function checkWinner() {
    if (humanScore === 5) {
      displayWinner.innerHTML = "human win"
    } else if(computerScore === 5) {
      displayWinner.innerHTML = "computer win"
    }else if (humanScore=== 5 || computerScore=== 5) {
      buttons.innerHTML = ''
    }
  }

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

// i remove my playgame function 
rockButton.addEventListener("click" , ()=>{
  const computerChoice =getComputerChoice()
  computer.innerHTML = computerChoice
  human.innerHTML = "rock"
  result.innerHTML= playRound("rock",computerChoice)
    displayHumanScore.innerHTML = humanScore
  displayComputerScore.innerHTML = computerScore
  checkWinner()
})
const paperButton = document.querySelector("#paper")
paperButton.addEventListener("click" , ()=>{
  const computerChoice =getComputerChoice()
  computer.innerHTML = computerChoice
  human.innerHTML = "paper"
  result.innerHTML=playRound("paper" , computerChoice)
  displayHumanScore.innerHTML = humanScore
  displayComputerScore.innerHTML = computerScore
  checkWinner()
})
const scissorsButton = document.querySelector("#scissors")
scissorsButton.addEventListener("click" , ()=>{
  const computerChoice =getComputerChoice()
  computer.innerHTML = computerChoice
  human.innerHTML = "scissors"
  result.innerHTML=playRound("scissors" , computerChoice)
  displayHumanScore.innerHTML = humanScore
  displayComputerScore.innerHTML = computerScore
  checkWinner()
})

  

