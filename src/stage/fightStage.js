export const fightStage = (props) => {
  console.log(props)
  add([
    text(`fight`, {
      width: width(),
    }),
    pos(12),
  ])
  onKeyRelease('right', () => {
    score += 6
    go('start', { score })
  })
}
