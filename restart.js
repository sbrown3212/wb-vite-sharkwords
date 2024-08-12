// QUESTION: would I want to create a module for each of these functions?
// Or since they are related to restarting the game, is it better to have them in the same module?

// QUESTION: is there a better way to be able to have access to call initSharkwords() than to import it?
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