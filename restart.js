import initSharkwords from "./main.js";

function generateRestartBtn(cb) {
    const button = document.createElement('button');
    button.innerText = 'Restart';
    button.id = 'restart'
    button.addEventListener('click', restartGame)
    document.querySelector('#game-status').appendChild(button)
}

function restartGame() {
    // reset game status, word container, and letters 
    document.querySelector('#game-status').innerText = '';
    document.querySelector('#word-container').innerText = '';
    document.querySelector('#letter-buttons').innerHTML = '';

    initSharkwords();
}

export { generateRestartBtn, restartGame }