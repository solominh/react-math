import touch from '../assets/media/touch.wav'
import ding from '../assets/media/ding.aac'
import beep from '../assets/media/beep.aac'

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
