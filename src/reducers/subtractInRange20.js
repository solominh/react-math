import * as types from '../actions/ActionTypes'
import subtractInRange20PuzzleGenerator from '../utils/subtractInRange20PuzzleGenerator'


const getInitialState = () => {
  return {
    stats: {
      right: 0,
      wrong: 0,
    },
    puzzle: subtractInRange20PuzzleGenerator({}),
    currentAnswer: "",
  }
}

export default function (state = getInitialState(), action) {

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
      const isRight = (puzzle.firstNumber - puzzle.secondNumber) === Number(currentAnswer) ? 1 : 0
      if (isRight) {
        return {
          stats: {
            right: right + 1,
            wrong: wrong,
          },
          puzzle: subtractInRange20PuzzleGenerator(puzzle),
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
