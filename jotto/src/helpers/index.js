/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of tellers matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(guessedWord.split(""));

  const letterFiltered = [...secretLetterSet].filter(letter =>
    guessedLetterSet.has(letter)
  );

  return letterFiltered.length;
}
