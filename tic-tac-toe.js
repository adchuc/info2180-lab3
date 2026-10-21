document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');

    squares.forEach(square => {
        square.classList.add('square')
    });
});