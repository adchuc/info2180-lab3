document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');

    let gameState = Array(9).fill(null); // to track the state of the game
    let playerX = true; // true for X, false for O

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; 
            }
        }
        return null;
    }

    squares.forEach((square, index) => {
        square.classList.add('square');

         square.addEventListener('mouseenter', () => {
            square.classList.add('hover'); 
         }); 

         square.addEventListener('mouseleave', () => {
            square.classList.remove('hover');
         });

         square.addEventListener('click', () => {
        if (gameState[index] !== null || checkWinner() !== null) 
            return;

            const currentPlayer = playerX ? 'X' : 'O';

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            gameState[index] = currentPlayer; // update game state
        
            const winner = checkWinner();
            if (winner) {
                statusDiv.textContent = "Congratulations! " + winner + " is the Winner!";
                statusDiv.classList.add('you-won');

            } else{
                playerX = !playerX;
            }
        });
    });

    newGameButton.addEventListener('click', () => {
        gameState = Array(9).fill(null);
        playerX = true;

        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        statusDiv.textContent = '';
        statusDiv.classList.remove('you-won');
    });

});