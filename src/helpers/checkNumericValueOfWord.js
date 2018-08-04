const letterNumbers = {
  "a": 1,
  "b": 2,
  "c": 3,
  "d": 4,
  "e": 5,
  "f": 6,
  "g": 7,
  "h": 8,
  "i": 9,
  "j": 1,
  "k": 2,
  "l": 3,
  "m": 4,
  "n": 5,
  "o": 6,
  "p": 7,
  "q": 8,
  "r": 9,
  "s": 1,
  "t": 2,
  "u": 3,
  "v": 4,
  "w": 5,
  "x": 6,
  "y": 7,
  "z": 8
}

const checkNumericValueOfWord = (name) => {
  let number = name
    .split('')
    .filter(letter => typeof letterNumbers[letter] !== 'undefined')
    .reduce((sum, letter) => sum + letterNumbers[letter], 0);

  while(number > 9) {
    number = number.toString().split('').reduce((sum, stringNumber) => {
      return sum + parseInt(stringNumber, 10);
    }, 0);
  }

  return number;
};

export default checkNumericValueOfWord;
