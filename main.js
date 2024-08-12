import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word.js';
import setupGuesses from './src/guess.js';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  // for debugging:
  // console.log(`[INFO] Correct word is: ${word}`);

  setSharkImage(document.querySelector('#shark-img'), numWrong);

  setupWord(document.querySelector('#word-container'), word);

  // QUESTION: Is it best to have this function declaration inside our outside initSharkwords delcaration?
  const handleGuess = (guessEvent, letter) => {
    guessEvent.target.setAttribute('disabled', true);
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong++;
      setSharkImage(document.querySelector('#shark-img'), numWrong);
    };

    const isWordComplete = [...document.querySelectorAll('.letter-box')].every((el) => el.innerText !== '');

    if (isWordComplete) {
      document.querySelector('#game-status').innerText = `You win!`;
      document.querySelectorAll('button').forEach((letterBox) => letterBox.setAttribute('disabled', true))
    }
  };

  setupGuesses(document.querySelector('#letter-buttons'), handleGuess)
};

initSharkwords();
