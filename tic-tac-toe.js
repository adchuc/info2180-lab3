document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    let gameState = Array(9).fill(null); // to track the state of the game

    let playerX = true; // true for X, false for O

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', () => {
            const currentPlayer = playerX ? 'X' : 'O';

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameState[index] = currentPlayer; // update game state

            playerX = !playerX; // switch turns

         square.addEventListener('mouseenter', () => {
            square.classList.add('hover');
         }); 

         square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
         });
        });
    });
});