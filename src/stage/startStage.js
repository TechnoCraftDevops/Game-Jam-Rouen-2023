

export const startStage = ( {score} ) => {
  add([
    text(`go a head ${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    score += 6
    go('selectLeader', { score })
  })
}
