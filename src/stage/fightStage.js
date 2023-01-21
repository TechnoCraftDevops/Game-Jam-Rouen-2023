export const fightStage = ( {score} ) => {
    add([
      text(`fight ${score}`, {
        width: width(),
      }),
      pos(12),
    ])
    onKeyRelease('right', () => {
      score += 6
      go('start', { score })
    })
  }
  