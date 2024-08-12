let word;

function setupWord(element, initWord) {
    word = initWord;
    console.log(word)

    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
    })
}

function isLetterInWord(letter) {
    return word.includes(letter);
}

function revealLetterInWord(letter) {
    if (isLetterInWord(letter)) {
        const letterboxes = document.querySelectorAll('.letter-box');
        // console.log(letterboxes)
        word.split('').forEach((wordLetter, i) => {
            if (wordLetter === letter) {
                letterboxes[i].innerHTML = letter;
            }
        })
    }
}

export { setupWord, isLetterInWord, revealLetterInWord };