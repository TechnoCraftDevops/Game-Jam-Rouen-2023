export const selectLeaderStage = ( {score} ) => {
    add([
      text(`choose your Leader ${score}`, {
        width: width(),
      }),
      pos(12),
    ])
    onKeyRelease('right', () => {
      score += 6
      go('selectGroup', { score })
    })
  }
  