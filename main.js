import kaboom from 'kaboom';

kaboom({
  width: window.innerWidth - 4,
  height: window.innerHeight - 4,
})
/**
 * Sprites
 */
loadSprite("bean", "src/assets/bean.png")
loadSprite("grass", "src/assets/grass.png")
loadSprite("grass", "src/assets/grass.png")

const SPEED = 320

scene("start", ({ score }) => {
  add([
    text(`go a head${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease("right", () => {
    score += 6
    go('choose-boss', { score })
  })
})

scene("choose-boss", ({ score }) => {
  add([
    text(`choose your bosse ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease("right", () => {
    score += 6
    go('choose-groups', { score })
  })
})

scene("choose-groups", ({ score }) => {
  add([
    text(`select groups ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease("right", () => {
    score += 6
    go('fight', { score })
  })
})

scene("fight", ({ score }) => {

  add([
    text(`fight ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease("right", () => {
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
