let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let statusTurn = document.getElementById("status");
let cells = document.querySelectorAll(".cell");
let startGameButton = document.getElementById("startGame");

// Game Logic

let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

function initializeGame(){
  startGameButton.addEventListener("click", () => {
    cells.forEach((cell,index) => {
      cell.addEventListener("click", () => {
        handleCellClick(cell, index);
      });
    })
  })
}

function handleCellClick(cell,index){
  if (!board[index]){
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWin()){
      alert(`Player ${currentPlayer} wins!`);
      return;
    } else {
      switchTurn()
    }
  }
}



function switchTurn (){
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus();
}

function updateStatus() {
  currentPlayer === "X" ? statusTurn.textContent = "X" : statusTurn.textContent = "O";
}

// Check for win

const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6] // diagonals
]

function checkWin(){
  for (let i = 0; i< winningCombos.length; i++){
    const [a,b,c] = winningCombos[i];

    if (board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a]; // return the winner
    }
  }
  return null;
}

initializeGame();
