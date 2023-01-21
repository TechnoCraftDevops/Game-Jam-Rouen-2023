import './style.css'
import './src/utils/k.js'
import './src/utils/load-sprites.js'
import { startScene } from './src/stage/start.js'
const SPEED = 320

scene('start', startScene)

scene('choose-boss', ({ score }) => {
  add([
    text(`choose your bosse ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    score += 6
    go('choose-groups', { score })
  })
})

scene('choose-groups', ({ score }) => {
  add([
    text(`select groups ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    score += 6
    go('fight', { score })
  })
})

scene('fight', ({ score }) => {
  add([
    text(`fight ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    go('start', { score })
  })
})

function start() {
  // Start with the "game" scene, with initial parameters
  go('start', {
    score: 20,
  })
}
start()

function truc(score, func) {
  func(score)
  return score
}
