import { leaders } from '../figures/leaders'
import { button } from '../utils/button'
import { STAGES } from '../../main'
let x = 0

export const selectLeaderStage = (props) => {
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
    text(`Choisis ton champion`, {
      width: width(),
      font: 'sinko',
      size: 45,
    }),
    pos(35, 20),
  ])

  // back button
  button('<', 30, height() / 2, () => {
    x <= 0 ? (x = leaders.length - 1) : (x -= 1)
    console.log(STAGES.selectLeader)
    go(STAGES.selectLeader, { ...props, leader: leaders[x] })
  })

  // leader sprite
  const leader = add([
    sprite(leaders[x].sprite),
    pos(50, 130),
    area({ cursor: 'pointer' }),
  ])

  // forward button
  button('>', width() - 50, height() / 2, () => {
    x >= leaders.length - 1 ? (x = 0) : (x += 1)
    go(STAGES.selectLeader, { ...props, leader: leaders[x] })
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

  leaders[x].rejects.forEach((reject, index) => {
    add([
      text('- ' + reject, {
        width: width(),
        size: 20,
      }),
      pos(250, 250 + index * 20),
    ])
  })

  //ACTIONS
  const chooseLeader = () => {
    go(STAGES.selectGroups, { ...props, leader: leaders[x] })
  }

  leader.onClick(chooseLeader)
  leaderName.onClick(chooseLeader)
}
