


/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function subtractInRange20PuzzleGenerator({ firstNumber: prevFirstNumber = 15, secondNumber: prevSecondNumber = 8 }) {
  let firstNumber;
  do {
    firstNumber = getRandomInt(11, 18)
  } while (firstNumber === prevFirstNumber)


  let secondNumber;
  do {
    secondNumber = getRandomInt(1, 9)
  } while (firstNumber - secondNumber >= 10)

  return {
    firstNumber,
    secondNumber,
    operator: '-',
    checkPuzzle(difference) {
      return difference === (this.firstNumber - this.secondNumber);
    }
  }
}

export const checkPuzzle = ({ firstNumber, secondNumber, answer }) => {
  return answer === (firstNumber - secondNumber)
}
