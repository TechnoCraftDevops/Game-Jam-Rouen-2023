export const startScene = ({ score }) => {
  add([
    text(`go a head${score}`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    score += 6
    go('choose-boss', { score })
  })
}
