import { leaders } from '../figure/leaders'
import { button } from '../utils/button'
import { HEIGHT, WIDTH } from '../utils/k'

var x = 0

export const selectLeaderStage = ({ score }) => {
  //ACTIONS
  const chooseLeader = () => {
    go('selectGroup', { score, leader: leaders[x] })
  }

  //background
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
  button('<', 30, height() / 2, () => {
    x <= 0 ? (x = leaders.length - 1) : (x -= 1)
    go('selectLeader', { score, leader: leaders[x] })
  })
  // leader sprite
  const leader = add([
    sprite(leaders[x].sprite),
    pos(50, 130),
    area({ cursor: 'pointer' }),
  ])

  leader.onClick(chooseLeader)

  // forward button
  button('>', width() - 50, height() / 2, () => {
    x >= leaders.length - 1 ? (x = 0) : (x += 1)
    go('selectLeader', { score, leader: leaders[x] })
  })
  // leader name
  const leaderName = add([
    text(leaders[x].name, {
      width: width(),
      size: 30,
    }),
    pos(width() / 2, height() - 50),
    origin('center'),
    area({ cursor: 'pointer' }),
  ])

  // accept & reject
  leaders[x].accepts.forEach((accept, index) => {
    add([
      text('+ ' + accept, {
        width: width(),
        size: 20,
      }),
      pos(250, 100 + index * 20),
    ])
  })

  // accept & reject
  leaders[x].rejects.forEach((reject, index) => {
    add([
      text('- ' + reject, {
        width: width(),
        size: 20,
      }),
      pos(250, 250 + index * 20),
    ])
  })

  leaderName.onClick(chooseLeader)
}
