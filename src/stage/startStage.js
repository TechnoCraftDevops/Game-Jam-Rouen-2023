import { button } from '../utils/button'

export const startStage = ({ score }) => {
  const title = add([
    sprite('title'), // sprite() component makes it render as a sprite
    pos(center()), // pos() component gives it position, also enables movement
    origin('center'), // origin() component defines the pivot point (defaults to "topleft")
  ])

  button('Start', 250, 300, () => {
    go('selectLeader', { score })
  })
  button('credit', 250, 360, () => {
    go('credit', { score })
  })

  title.play('idle')
}
