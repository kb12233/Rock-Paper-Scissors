function random(number) {
  return Math.floor(Math.random() * number)
}

function computerPlay() {
  let ran = random(3);
  if (ran == 0) return `rock`;
  else if (ran == 1) return `paper`;
  else if (ran == 2) return `scissors`;
}

function userPlay() {
  let play = ``;
  while (play == ``) {
    play = prompt(`Rock, Paper, or Scissors?\n`);
  };
  if (play == null) {
    return `Bye bye!`
  } else {
    play = play.toLowerCase();
    return play;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `Nobody wins this round.`;
  } else if (playerSelection == `rock` && computerSelection == `paper`) {
    return `You lose! Paper beats Rock.`;
  } else if (playerSelection == `rock` && computerSelection == `scissors`) {
    return `You win! Rock beats scissors.`
  } else if (playerSelection == `paper` && computerSelection == `rock`) {
    return `You win! Paper beats Rock.`;
  } else if (playerSelection == `paper` && computerSelection == `scissors`) {
    return `You lose! Scissors beats paper.`;
  } else if (playerSelection == `scissors` && computerSelection == `rock`) {
    return `You lose! Rock beats scissors.`;
  } else if (playerSelection == `scissors` && computerSelection == `paper`) {
    return `You win! Scissors beats Paper.`;
  } else {
    return `You lose! You chose to concede in this round.`;
  }
}

function scorer(playerScore, computerScore) {
  let scores = `playerScore = ${playerScore}\ncomputerScore = ${computerScore}`;
  return scores;
}

function whoIsWinner(playerScore, computerScore) {
  let winner;
  if (playerScore > computerScore) {
    winner = `The player wins the game!`
  } else if (playerScore < computerScore) {
    winner = `The computer wins the game!`
  } else {
    winner = `It's a tie!`
  }
  return winner;
}

function game() {
  console.log(welcome);
  alert(welcome);

  console.log(note);
  alert(note);

  let playerScore = 0;
  let computerScore = 0;
  let winner;

  for (let round = 1; round <= 5; round++) {
    let player = userPlay();
    if (player == `Bye bye!`) {
      alert(`Bye bye!`);
      return;
    }

    let computer = computerPlay();
    let result = playRound(player, computer);

    console.log(`Player: ${player} \nComputer: ${computer} \n\n${result}`);
    alert(`Player: ${player} \nComputer: ${computer} \n\n${result}`);

    if (result[4] == `w`) {
      playerScore++;
    } else if (result[4] == `l`) {
      computerScore++;
    }

    console.log(`Round ${round} of 5\n` + scorer(playerScore, computerScore));
    alert(`Round ${round} of 5\n` + scorer(playerScore, computerScore));
  }

  winner = whoIsWinner(playerScore, computerScore);

  console.log(winner);
  alert(winner);

}

let welcome = `Welcome to Rock, Paper, Scissors!`;
let note =
  `Note:
There will be 5 rounds. Entering something 
other than the three choices (E.g. "qwerty", 
"asdf" or "paper " with a space) means that
you concede on that round.`;

game();