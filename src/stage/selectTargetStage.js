import { targets } from '../figure/targets'

export const selectTargetStage = ({ score, groups }) => {
  //BG
  add([rect(width(), height()), pos(0, 0), color(156, 134, 101)])

  targets.forEach((target, index) => {
    const x = width() / 2
    const y = 70 + 100 * index
    const targetRect = add([
      rect(width() - 100, 80),
      pos(x, y),
      origin('center', 'top'),
      area({ cursor: 'pointer' }),
      solid(),
      outline(2, color(100, 100, 100)),
      color(140, 119, 87),
    ])

    //thumbnail
    add([sprite(target.sprite), pos(60, y - 30)])

    //name
    add([
      text(target.name, {
        size: 20,
      }),
      pos(140, y - 20),
      origin('left', 'top'),
    ])

    target.foes.forEach((foe, idx) => {
      add([
        text(`${foe.number[0]}~${foe.number.at(-1)} ${foe.name}`, {
          size: 20,
        }),
        pos(140, y + 5 + 22 * idx),
        origin('left', 'top'),
      ])
    })

    targetRect.onClick(() => {
      go('selectFight', { target, score, groups })
    })
  })
}
