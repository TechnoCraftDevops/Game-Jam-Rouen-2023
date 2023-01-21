import { leaders } from "../figure/leaders"
import { button } from "../utils/button"

var x = 0 

export const selectLeaderStage = ({ score }) => {
  // text 
  add([
    text(`choose your Leader`, {
      width: width(),
      size: 50,
    }),
    pos(12),
  ])
  // back button
  button("<", 50, 250, () => {
    (x <= 0) ? x = leaders.length-1 : x-=1
    go('selectLeader', { score })
  })
  // leader sprite
  add([
    sprite(leaders[x].sprite),
    pos(150, 250),
    origin("center"),
  ])
  // forward button
  button(">", 200, 250, () => {
    (x >= leaders.length-1) ? x = 0 : x+=1
    go('selectLeader', { score })
  })
  // leader name
  add([
    text(leaders[x].name, {
      width: width(),
      size: 35,
    }),
    pos(150, 400),
    origin("center"),
  ])

  // accept & reject
  leaders[x].accepts.forEach( (accept, index)=>{
    add([
      text(accept, {
        width: width(),
        size: 25,
      }),
      pos(330, 150+index*20),
    ])
  })

  // accept & reject
  leaders[x].rejects.forEach( (reject, index)=>{
    add([
      text(reject, {
        width: width(),
        size: 25,
      }),
      pos(330, 250+index*20),
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
