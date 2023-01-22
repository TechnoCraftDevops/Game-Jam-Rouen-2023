import { groups } from "../figure/groups"

export const selectGroupStage = (props) => {
  add([
    text(`select groups`, {
      width: width(),
    }),
    pos(12),
  ])

  groups.forEach((group, index) => {
    console.log(group)
    const acc = group.accepts.map(str => ({ str, accept: true }))
    const rjc = group.rejects.map(str => ({ str, accept: false }))
    const grs = acc.concat(rjc)

    add([
      sprite(group.sprite, {
        width: 50,
        height: 50,
      }),
      pos(90 + index * 250, 100),
      area({ cursor: 'pointer' }),
    ])
    add([
      text(group.name.toUpperCase()),
      pos(90 + index * 250, 90),
      area({ cursor: 'pointer' }),
    ])
    
    // accept / reject display
    grs.forEach((gr, indexAccept) => {
      add([
        text(`${gr.accept ? '+' : '-'} ${gr.str}`),
        pos(90 + index * 250, 200 + indexAccept * 15),
        area({ cursor: 'pointer' }),
      ])
    })

    // force / cost display
    add([
      text(`Force : ${group.force}\nCost : ${group.cost}\nPopularty min : ${group.minPopularity}`),
      pos(90 + index * 250, 300),
      area({ cursor: 'pointer' }),
    ])
  })

  onKeyRelease('right', () => {
    go('fight', props)
  })
}
