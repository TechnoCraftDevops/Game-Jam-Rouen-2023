import { foes } from '../figure/foes'
import { groups } from '../figure/groups'
import { getRandomInt } from '../utils/getRandomInt'

const leader = leaders[0]
const myGroups = [
  {
    name: 'patriotes',
    number: 10,
  },
  {
    name: 'gilets jaunes',
    number: 5,
  },
]

const target = targets[0]

export const fightStage = ({ popularity }) => {
  //DECORS --------------------
  //BG
  add([rect(width(), height()), pos(0, 0), color(83, 82, 140)])

  //ground

  add([
    rect(width(), 60),
    pos(0, height() - 60),
    color(...leader.color),
    area(),
  ])
  add([
    rect(width(), 3),
    pos(0, height() - 62),
    area(),
    solid(),
    color(0, 0, 0),
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
        sprite('cop'),
        pos(x, Y - 3),
        origin('left', 'bottom'),
        area(),
        solid(),
        health(foeObj.force),
        { force: foeObj.force },
        'character',
      ])

      foeSprite.play('idle')

      foeSprite.onCollide('group', (unitGroup) => {
        foeSprite.hurt(unitGroup.force)
        unitGroup.hurt(foeSprite.force)
        popularity = +foeSprite.force
      })
    })
  })

  myGroups.forEach((supporter) => {
    const supporterObj = groups.find((group) => group.name === supporter.name)

    const bonus = supporterObj.accepts.reduce((acc, accept) => {
      const exist = leader.accepts.includes(accept)
      if (exist) acc += 0.3

      return acc
    }, 1)

    const malus = supporterObj.rejects.reduce((acc, reject) => {
      const exist = leader.rejects.includes(reject)
      if (exist) acc -= 0.5

      return acc
    }, 0)

    const muter = bonus - malus

    Array.from(Array(supporter.number).keys()).forEach((unit) => {
      const x = getRandomInt(50, width() / 3)

      const randSp = getRandomInt(0, 1)
      const supporterSprite = add([
        sprite(randSp ? 'group' : 'group2'),
        pos(x, Y - 3),
        origin('left', 'bottom'),
        area(),
        solid(),
        body(),

        health(supporterObj.force),
        'group',
        'character',
        { force: supporterObj.force * muter },
      ])

      supporterSprite.play('run')

      const speed = getRandomInt(300, 500)
      setInterval(() => {
        supporterSprite.move(speed, 0)
      }, 100)
    })
  })

  on('death', 'character', (e) => {
    const explode = add([
      sprite('explode'),
      pos(
        getRandomInt(e.pos.x - 5, e.pos.x + 5),
        getRandomInt(e.pos.y - 5, e.pos.y + 5)
      ),
      lifespan(0.5),
      origin('center', 'center'),
    ])

    explode.play('idle')
    destroy(e)
  })

  //objectif
  const objectif = add([
    sprite(target.sprite),
    pos(width() - 80, height() - 127),
    area(),
  ])

  objectif.onCollide('group', () => {
    // AJOUTER DE LA POPULARITE de base
    if (popularity < 20) popularity = 20
    go('selectGroup', { popularity, leader })
  })
}
