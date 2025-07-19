const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer ='X';
let isGameOver = false;
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] 
];

function initializeBoard(){
    gameBoard.innerHTML = '';
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameOver = false;

    for (let i = 0; i <9; i++) {
        const cell =document.createElement('div');
        cell .classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.dataset.index);
    if (board[clickedCellIndex] !== '' || isGameOver) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer.toLowerCase());
    if (checkWinner ()) {
        isGameOver = true;
        alert(`¡El jugador ${currentPlayer} ha ganado!`);}

else if (checkDraw()) {
    isGameOver = true;
    alert ("¡Es un empate!");
}
else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
}

function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board [a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

resetButton.addEventListener('click', initializeBoard);
initializeBoard();