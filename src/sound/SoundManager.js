

export function playTouchSound() {
  let sound = new Audio('https://raw.githubusercontent.com/solominh/react-math/master/public/touch.wav')
  sound.play()
}

export function playRightAnswerSound() {
  let sound = new Audio('https://raw.githubusercontent.com/solominh/react-math/master/public/ding.aac')
  sound.play()
}

export function playWrongAnswerSound() {
  let sound = new Audio('https://raw.githubusercontent.com/solominh/react-math/master/public/beep.aac')
  sound.play()
}
