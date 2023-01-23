import { STAGES } from '../../main'
import { button } from '../utils/button'

export const creditsStage = () => {
  add([text(`credit 1`, { width: width() }), pos(10, 10)])
  add([text(`credit 2`, { width: width() }), pos(10, 70)])
  add([text(`credit 3`, { width: width() }), pos(10, 130)])
  add([text(`credit 4`, { width: width() }), pos(10, 190)])
  add([text(`credit 5`, { width: width() }), pos(10, 250)])
  button('Back', 300, 350, () => {
    go(STAGES.start, {
      score: 0,
    })
  })
}
