import * as types from './actionTypes';


export function onNumberKeyClick(number) {
  return {
    type: types.ON_NUMBER_KEY_CLICK,
    number,
  }
}

export function onAllClearKeyClick() {
  return {
    type: types.ON_ALL_CLEAR_KEY_CLICK,
  }
}

export function onDoneKeyClick() {
  return {
    type: types.ON_DONE_KEY_CLICK,
  }
}
