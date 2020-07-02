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