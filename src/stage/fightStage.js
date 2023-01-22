import { foes } from '../figure/foes'
import { groups } from '../figure/groups'
import { getRandomInt } from '../utils/getRandomInt'

export const fightStage = ({ myGroups, target, leader, popularity }) => {
  //DECORS --------------------
  //BG
  add([rect(width(), height()), pos(0, 0), color(83, 82, 140)])

  //ground
  add([
    rect(width(), 2),
    pos(0, height() - 62),
    area(),
    solid(),
    color(0, 0, 0),
  ])
  add([
    rect(width(), 60),
    pos(0, height() - 60),
    color(...leader.color),
    area(),
  ])

  //PERSONNAGES --------------------

  const Y = height() - 72
  target.foes.forEach((foe) => {
    const foeObj = foes.find((foe) => foe.name === foe.name)

    Array.from(
      Array(getRandomInt(foe.number.at(0), foe.number.at(-1))).keys()
    ).forEach((unit) => {
      const x = getRandomInt(width() - 100, width() - width() / 3)

      const foeSprite = add([
        rect(5, 20),
        pos(x, Y),
        origin('left', 'top'),
        area(),
        solid(),
        color(20, 15, 107),
        health(foeObj.force),
        { force: foeObj.force },
        'character',
      ])

      foeSprite.onCollide('group', (unitGroup) => {
        foeSprite.hurt(unitGroup.force)
        unitGroup.hurt(foeSprite.force)
        popularity = +foeSprite.force
      })
    })
  })

  myGroups.forEach((supporter) => {
    const supporterObj = groups.find((group) => group.name === supporter.name)
    Array.from(Array(supporter.number).keys()).forEach((unit) => {
      const x = getRandomInt(50, width() / 3)

      const supporterSprite = add([
        rect(5, 20),
        pos(x, Y),
        origin('left', 'top'),
        area(),
        solid(),
        body(),
        color(0, 0, 0),
        health(supporterObj.force),
        'group',
        'character',
        { force: supporterObj.force },
      ])

      const speed = getRandomInt(300, 500)
      setInterval(() => {
        supporterSprite.move(speed, 0)
      }, 100)
    })
  })

  on('death', 'character', (e) => {
    destroy(e)
  })

  //objectif
  const objectif = add([
    sprite(target.sprite),
    pos(width() - 80, height() - 127),
    area(),
  ])

  objectif.onCollide('group', () => {
    go('selectGroup', { popularity, leader })
  })
}
