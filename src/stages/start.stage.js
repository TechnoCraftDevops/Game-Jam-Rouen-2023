import { STAGES } from '../../main'
import { button } from '../utils/button'
import { SPRITES } from '../utils/load-sprites'

export const startStage = (props) => {
  const title = add([sprite(SPRITES.title), pos(center()), origin('center')])

  button('Commencer', 300, 300, () => {
    go(STAGES.selectLeader, props)
  })

  button('credits', 300, 350, () => {
    go(STAGES.credits, props)
  })

  title.play('idle')
}
