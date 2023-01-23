import { targets } from '../figures/targets'
import { STAGES } from '../../main'

export const selectTargetStage = (props) => {
  //BG
  add([rect(width(), height()), pos(0, 0), color(156, 134, 101)])

  targets.forEach((target, index) => {
    const isDisabled = index > props.unlockTarget
    const disabled = () => opacity(isDisabled ? 0.3 : 1)

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
    add([sprite(target.sprite), pos(60, y - 30), disabled()])

    //name
    add([
      text(target.name, {
        size: 20,
      }),
      pos(140, y - 20),
      origin('left', 'top'),
      disabled(),
    ])

    target.foes.forEach((foe, idx) => {
      add([
        text(`${foe.number[0]}~${foe.number.at(-1)} ${foe.name}`, {}),
        pos(140, y + 5 + 12 * idx),
        origin('left', 'top'),
        disabled(),
      ])
    })

    targetRect.onClick(() => {
      if (isDisabled) return
      go(STAGES.fight, { ...props, target })
    })
  })
}
