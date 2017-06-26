import * as types from '../actions/ActionTypes'


const makePuzzleReducer = (getInitialState, onDoneKeyClick) => {
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

      case types.ON_DONE_KEY_CLICK: return onDoneKeyClick(state, action)

      default: {
        return state
      }
    }

  }
}


export default makePuzzleReducer
