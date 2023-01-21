import { leaders } from '../figure/leaders'
import { button } from '../utils/button'
import { HEIGHT, WIDTH } from '../utils/k'

var x = 0

export const selectLeaderStage = ({ score, leader }) => {
  console.log(leaders[x].color)
  add([
    rect(width(), height()),
    pos(0, 0),
    area(),
    solid(),
    color(...leaders[x].color),
  ])
  // text
  add([
    text(`Choose your Leader`, {
      width: width(),
      font: 'sinko',
      size: 50,
    }),
    pos(40, 20),
  ])
  // back button
  button('<', 50, 250, () => {
    x <= 0 ? (x = leaders.length - 1) : (x -= 1)
    go('selectLeader', { score, leader: leaders[x] })
  })
  // leader sprite
  add([sprite(leaders[x].sprite), pos(150, 250), origin('center')])
  // forward button
  button('>', 200, 250, () => {
    x >= leaders.length - 1 ? (x = 0) : (x += 1)
    go('selectLeader', { score, leader: leaders[x] })
  })
  // leader name
  add([
    text(leaders[x].name, {
      width: width(),
      size: 30,
    }),
    pos(30, 400),
    origin('left'),
  ])

  // accept & reject
  leaders[x].accepts.forEach((accept, index) => {
    add([
      text(accept, {
        width: width(),
        size: 20,
      }),
      pos(250, 100 + index * 20),
    ])
  })

  // accept & reject
  leaders[x].rejects.forEach((reject, index) => {
    add([
      text(reject, {
        width: width(),
        size: 20,
      }),
      pos(250, 250 + index * 20),
    ])
  })

  /**
   * Action
   */
  onKeyRelease('right', () => {
    score += 6
    go('selectGroup', { score })
  })
}
