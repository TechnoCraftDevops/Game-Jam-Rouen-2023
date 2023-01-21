import { button } from '../utils/button'

export const startStage = ({ score }) => {
  const title = add([
    sprite('title'), // sprite() component makes it render as a sprite
    pos(center()), // pos() component gives it position, also enables movement
    origin('center'),
  ])

  button('Start', 300, 300, () => {
    go('selectLeader', { score })
  })
  button('credits', 300, 350, () => {
    go('credit', { score })
  })

  title.play('idle')
}
