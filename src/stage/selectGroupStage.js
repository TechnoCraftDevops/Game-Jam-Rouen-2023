export const selectGroupStage = ( {score} ) => {
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
  }
  