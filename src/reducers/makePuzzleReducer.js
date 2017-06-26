import * as types from '../actions/ActionTypes'

const makePuzzleReducer = (puzzleGenerator, checkPuzzle) => {

  const getInitialState = () => {
    return {
      stats: {
        right: 0,
        wrong: 0,
      },
      puzzle: puzzleGenerator({}),
      currentAnswer: "",
    }
  }

  return (state = getInitialState(), action) => {

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
        const { firstNumber, secondNumber } = puzzle
        const isRight = checkPuzzle({ firstNumber, secondNumber, answer: Number(currentAnswer) }) ? 1 : 0
        if (isRight) {
          return {
            stats: {
              right: right + 1,
              wrong: wrong,
            },
            puzzle: puzzleGenerator(puzzle),
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

}


export default makePuzzleReducer
