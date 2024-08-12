// Create a string of the values to be used as buttons for user input
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// This function takes the HTML element and a callback function as arguments
function setupGuesses(element, handleGuess) {
  // Takes alphabet string and turns it into an array
  alphabet.split('').forEach((letter) => {
    // Creates a button element with the innerText of the current letter
    const btn = document.createElement('button');
    btn.innerText = letter;
    // Adds an event listener to the button created
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    // Appends the button to the HTML element
    element.append(btn);
  });
}

export default setupGuesses;
