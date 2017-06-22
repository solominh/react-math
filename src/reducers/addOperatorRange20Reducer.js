import * as types from '../actions/actionTypes'

const getInitialState = () => {
  return {
    stats: {
      right: 0,
      wrong: 0,
    },
    puzzle: addOperatorRange20PuzzleGenerator(),
    currentAnswer: "",
  }
}
const initialState = localStorage.getItem('addOperatorRange20') || getInitialState()


export default function (state = initialState, action) {

  switch (action.type) {
    case types.ON_NUMBER_KEY_CLICK: {
      return {
        ...state,
        currentAnswer: Number("" + state.currentAnswer + action.number),
      }
    }

    case types.ON_ALL_CLEAR_KEY_CLICK: {
      return {
        ...state,
        currentAnswer: "",
      }
    }

    case types.ON_DONE_KEY_CLICK: {
      const { right, wrong } = state.stats
      const { puzzle, currentAnswer } = state
      const isRight = (puzzle.firstNumber + puzzle.secondNumber) === Number(currentAnswer) ? 1 : 0
      if (isRight) {
        return {
          stats: {
            right: right + 1,
            wrong: wrong,
          },
          puzzle: addOperatorRange20PuzzleGenerator(),
          currentAnswer: "",
        }
      }

      return {
        ...state,
        stats: {
          right,
          wrong: wrong + 1,
        },
        currentAnswer: "",
      }
    }

    default: {
      return state
    }
  }

}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function addOperatorRange20PuzzleGenerator() {
  let firstNumber = getRandomInt(1, 9)
  let secondNumber = getRandomInt(11 - firstNumber, 9)
  return {
    firstNumber,
    secondNumber,
  }
}
