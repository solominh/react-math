


/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function addInRange20PuzzleGenerator({ prevFirstNumber = 7, prevSecondNumber = 9 }) {

  // Total
  let prevTotal = prevFirstNumber + prevSecondNumber
  let total = prevTotal;
  while (total === prevTotal) {
    total = getRandomInt(11, 18)
  }

  let firstNumber;
  do {
    firstNumber = getRandomInt(1, 9)
  } while (total - firstNumber >= 10)

  let secondNumber = total - firstNumber;

  return {
    firstNumber,
    secondNumber,
    operator: '+',
    checkPuzzle(sum) {
      return sum === (this.firstNumber + this.secondNumber);
    }
  }
}

export const checkPuzzle = ({ firstNumber, secondNumber, answer }) => {
  return answer === (firstNumber + secondNumber)
}
