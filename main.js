const buttons = document.querySelectorAll(`.choices`);
let playerChoice = document.querySelector(`#playerChoice`);
let computerChoice = document.querySelector(`#computerChoice`);
let result = document.querySelector(`#result`);
let pScoreDisplayed = document.querySelector(`#playerScore`);
let cScoreDisplayed = document.querySelector(`#computerScore`);
let playerScore = 0;
let computerScore = 0;
let winner = document.querySelector(`#winner`);
let resetButton = document.querySelector(`#reset`);
resetButton.addEventListener(`click`, reset);

buttons.forEach((button) => {
    button.addEventListener(`click`, function() {
        
        playerChoice.textContent = userPlay(button.id);
        computerChoice.textContent = computerPlay();
        result.textContent = playRound(playerChoice.textContent, computerChoice.textContent);
        pScoreDisplayed.textContent = playerScore;
        cScoreDisplayed.textContent = computerScore;
        winner.textContent = whoIsWinner(playerScore, computerScore);

    });
});

function random(number) {
    return Math.floor(Math.random() * number)
}

function userPlay(play) {
    return play;
}

function computerPlay() {
    let plays = [`rock`, `paper`, `scissors`];
    let pick = random(3);
    let play = plays[pick];
    return play;
}

function addScore(result) {
    if (result[4] == `w`) {
        playerScore++;
    } else if (result[4] == `l`) {
        computerScore++;
    }
}

function whoIsWinner(playerScore, computerScore) {
    let winner;
    if (playerScore > computerScore) {
        if (playerScore == 5) {
            winner = `The player wins the game!`
        }
    } else if (playerScore < computerScore) {
        if (computerScore == 5) {
            winner = `The computer wins the game!`
        }
    } else if (playerScore == 5 && computerScore == 5) {
        winner = `It's a tie!`
    } else {
        winner = ""
    }
    return winner;
}

function reset() {
    playerChoice.textContent = ``;
    computerChoice.textContent = ``;
    result.textContent = ``;
    winner.textContent = ``;
    pScoreDisplayed.textContent = ``;
    cScoreDisplayed.textContent = ``;
    playerScore = 0;
    computerScore = 0;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      let result = `Nobody wins this round.`;
      addScore(result);
      return result;
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
      let result = `You lose! Paper beats Rock.`;
      addScore(result);
      return result;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
      let result = `You win! Rock beats scissors.`;
      addScore(result);
      return result;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
      let result = `You win! Paper beats Rock.`;
      addScore(result);
      return result;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
      let result = `You lose! Scissors beats paper.`;
      addScore(result);
      return result;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
      let result = `You lose! Rock beats scissors.`;
      addScore(result);
      return result;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
      let result = `You win! Scissors beats Paper.`;
      addScore(result);
      return result;
    }
}