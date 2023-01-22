import { groups } from "../figure/groups"
import { alertMessage } from "../utils/alertMessage"
import { button } from "../utils/button"

export const selectGroupStage = (props) => {

  add([
    text(`select groups`, {
      width: width(),
    }),
    pos(12),
  ])

  groups.forEach((group, index) => {
    const acc = group.accepts.map(str => ({ str, accept: true }))
    const rjc = group.rejects.map(str => ({ str, accept: false }))
    const grs = acc.concat(rjc)
    // group sprit
    add([
      sprite(group.sprite, {
        width: 50,
        height: 50,
      }),
      pos(90 + index * 250, 50),
      area({ cursor: 'pointer' }),
    ])
    add([
      text(group.name.toUpperCase()),
      pos(90 + index * 250, 40),
      area({ cursor: 'pointer' }),
    ])

    // accept / reject display
    grs.forEach((gr, indexAccept) => {
      add([
        text(`${gr.accept ? '+' : '-'} ${gr.str}`),
        pos(90 + index * 250, 110 + indexAccept * 15),
        area({ cursor: 'pointer' }),
      ])
    })

    // force / cost display
    add([
      text(`Force : ${group.force}\nCost : ${group.cost}\nPopularty min : ${group.minPopularity}`),
      pos(90 + index * 250, 220),
      area({ cursor: 'pointer' }),
    ])

    button('rassembler !', (90 + index * 250), 380, () => {
      // logic d'achat
      console.log(props, group.minPopularity, props.props.popularity >= group.minPopularity)
      const playerPopularity = props.props.popularity
      const groupePopularityCost = group.popularityCost
      if (playerPopularity >= groupePopularityCost) {
        props.props.popularity = playerPopularity - groupePopularityCost
        props.myGroup.push(group)
        delete groups[index]
        go('selectGroup', props)
      } else {
        alertMessage('popularite insuffisante')
      }
    })
  })

  button('A l\'attack', 640, 400, () => {
    go('fight', props)
  })

  onKeyRelease('right', () => {
    go('fight', props)
  })
}
