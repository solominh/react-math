import * as types from '../actions/ActionTypes'
import addInRange20PuzzleGenerator from '../utils/addInRange20PuzzleGenerator'
import makePuzzleReducer from './makePuzzleReducer'

const getInitialState = () => {
  return {
    stats: {
      right: 0,
      wrong: 0,
    },
    puzzle: addInRange20PuzzleGenerator({}),
    currentAnswer: "",
  }
}

const onDoneKeyClick = (state, action) => {
  const { right, wrong } = state.stats
  const { puzzle, currentAnswer } = state
  const isRight = (puzzle.firstNumber + puzzle.secondNumber) === Number(currentAnswer) ? 1 : 0
  if (isRight) {
    return {
      stats: {
        right: right + 1,
        wrong: wrong,
      },
      puzzle: addInRange20PuzzleGenerator(puzzle),
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

export default makePuzzleReducer(getInitialState, onDoneKeyClick)
