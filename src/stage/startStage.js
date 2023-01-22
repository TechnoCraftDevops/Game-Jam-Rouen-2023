import { button } from '../utils/button'

export const startStage = (props) => {
  const title = add([
    sprite('title'), // sprite() component makes it render as a sprite
    pos(center()), // pos() component gives it position, also enables movement
    origin('center'),
  ])

  button('Start', 300, 300, () => {
    go('selectLeader', props)
  })
  button('credits', 300, 350, () => {
    go('credit', props)
  })

  title.play('idle')
}
