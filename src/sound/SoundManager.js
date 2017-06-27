import touch from '../raw/touch.wav'
import ding from '../raw/ding.aac'
import beep from '../raw/beep.aac'

export function playTouchSound() {
  let sound = new Audio(touch)
  sound.play()
}

export function playRightAnswerSound() {
  let sound = new Audio(ding)
  sound.play()
}

export function playWrongAnswerSound() {
  let sound = new Audio(beep)
  sound.play()
}
