


/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function multiply1DigitPuzzleGenerator({ fisrtNumber: prevFirstNumber = 7, secondNumber: prevSecondNumber = 9 }) {

  let firstNumber;
  do {
    firstNumber = getRandomInt(1, 9)
  } while (firstNumber === prevFirstNumber)

  let secondNumber;
  do {
    secondNumber = getRandomInt(1, 9)
  } while (secondNumber === prevSecondNumber)

  return {
    firstNumber,
    secondNumber,
    operator: 'x',
    checkPuzzle(product) {
      return product === (this.firstNumber * this.secondNumber);
    }
  }
}

export const checkPuzzle = ({ firstNumber, secondNumber, answer }) => {
  return answer === (firstNumber * secondNumber)
}
