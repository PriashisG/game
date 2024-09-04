// declearing default score
let user_score = 0;
let comp_score = 0;

// taking the elements as const
const user_score_span = document.getElementById("user-score"); 
const comp_score_span = document.getElementById("comp-score"); 
const score_board_div = document.querySelector(".score-board"); 
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const restart_div = document.getElementById("restart");

// computer choice function
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

// processing winner function 
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
      win(userChoice, computerChoice);
      break;
    case 'ps':
    case 'rp':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice);
      break;
    default:
      break;
  }
}

// declaring winner in website
function win(userChoice, compChoice) {
  user_score++;
  user_score_span.innerHTML = user_score;
  comp_score_span.innerHTML = comp_score;

  const smallUserWord = '<sub>user</sub>';
  const smallCompWord = '<sub>comp</sub>';
  result_p.innerHTML = `you = ${convertToWord(userChoice)} & computer = ${convertToWord(compChoice)}. You win!! 🔥`;
}

// declaring loser in website
function lose(userChoice, compChoice) {
  comp_score++;
  user_score_span.innerHTML = user_score;
  comp_score_span.innerHTML = comp_score;

  const smallUserWord = '<sub>user</sub>';
  const smallCompWord = '<sub>comp</sub>';
  result_p.innerHTML = `you = ${convertToWord(userChoice)}   &   computer = ${convertToWord(compChoice)}. You lose!! 😔`;
}

// declaring draw
function draw(userChoice) {
  user_score_span.innerHTML = user_score;
  comp_score_span.innerHTML = comp_score;
  result_p.innerHTML = "It's a draw!";
}

// returning the choice word for each make
function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

// reset button function 
function resetGame() {
  user_score = 0;
  comp_score = 0;
  user_score_span.innerHTML = user_score;
  comp_score_span.innerHTML = comp_score;
  result_p.innerHTML = "Let's start again ! 🥳";
}

// the main function
function main() {
  // action for clicking rock
  rock_div.addEventListener('click', function () {
    game('r');
  });

  // action for clicking paper
  paper_div.addEventListener('click', function () {
    game('p');
  });

  // action for clicking scissors
  scissors.addEventListener('click', function () {
    game('s');
  });

  // action for clicking reset button
  restart_div.addEventListener('click', function(){
    resetGame();
  });
}

main();
