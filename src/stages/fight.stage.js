import { gameInitialState } from '../../main'
import { foes } from '../figures/foes'
import { targets } from '../figures/targets'
import { getRandomInt } from '../utils/getRandomInt'
import { STAGES } from '../../main'
import { groupTags } from '../utils/tags'
import { SPRITES } from '../utils/load-sprites'

export const fightStage = (props) => {
  const { target, groups, leader } = props
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

  const stopButton = add([
    text(`Arretez le massacre`),
    origin('right', 'top'),
    pos(width() - 30, 20),
    area({ cursor: 'pointer' }),
  ])

  stopButton.onClick(() => {
    if (props.popularity < gameInitialState.popularity)
      props.popularity = gameInitialState.popularity

    go(STAGES.selectGroups, {
      ...props,
      groups: [],
      generateCount: gameInitialState.generateCount,
    })
  })

  //PERSONNAGES --------------------

  const Y = height() - 72
  target.foes.forEach((foe) => {
    const foeObj = foes.find((fo) => fo.name === foe.name)

    Array.from(
      Array(getRandomInt(foe.number.at(0), foe.number.at(-1))).keys()
    ).forEach(() => {
      const x = getRandomInt(width() - 100, width() - width() / 3)

      const foeSprite = add([
        sprite(SPRITES.cop),
        pos(x, Y - 3),
        origin('left', 'bottom'),
        area(),
        solid(),
        health(foeObj.force),
        { force: foeObj.force },
        groupTags.person,
        groupTags.orderForce,
      ])

      foeSprite.play('idle')

      foeSprite.onCollide(groupTags.group, (unitGroup) => {
        foeSprite.hurt(unitGroup.force)
        unitGroup.hurt(foeSprite.force)
        props.popularity += foeSprite.force
      })
    })
  })

  groups.forEach((supporter) => {
    const bonus = supporter.accepts.reduce((acc, accept) => {
      const exist = leader.accepts.includes(accept)
      if (exist) acc += 0.5

      return acc
    }, 1)

    const malus = supporter.rejects.reduce((acc, reject) => {
      const exist = leader.rejects.includes(reject)
      if (exist) acc -= 1

      return acc
    }, 0)

    const muter = bonus - malus

    Array.from(Array(supporter.number).keys()).forEach((unit) => {
      const x = getRandomInt(50, width() / 3)

      const randSp = getRandomInt(0, 1)
      const supporterSprite = add([
        sprite(randSp ? SPRITES.group : SPRITES.group2),
        pos(x, Y - 3),
        origin('left', 'bottom'),
        area(),
        solid(),
        body(),

        health(supporter.force),
        groupTags.group,
        groupTags.person,
        { force: supporter.force * muter },
      ])

      supporterSprite.play('run')

      const speed = getRandomInt(300, 500)
      setInterval(() => {
        supporterSprite.move(speed, 0)
      }, 100)
    })
  })

  on('death', groupTags.person, (e) => {
    const explode = add([
      sprite(SPRITES.explode),
      pos(
        getRandomInt(e.pos.x - 5, e.pos.x + 5),
        getRandomInt(e.pos.y - 5, e.pos.y + 5)
      ),
      lifespan(0.5),
      origin('center', 'center'),
    ])

    explode.play('idle')
    destroy(e)

    wait(2, () => {
      const numberOfSurvivor = get(groupTags.group).length

      if (numberOfSurvivor <= 0) {
        props.popularity -= Math.round(props.popularity / 4)
        if (props.popularity < gameInitialState.popularity)
          props.popularity = gameInitialState.popularity

        go(STAGES.selectGroups, {
          ...props,
          groups: [],
          generateCount: gameInitialState.generateCount,
        })
      }
    })
  })

  //objectif
  const objectif = add([
    sprite(target.sprite),
    pos(width() - 80, height() - 127),
    area(),
  ])

  objectif.onCollide(groupTags.group, (unit) => {
    const index = targets.findIndex((t) => t.name === target.name)
    if (index >= props.unlockTarget) {
      objectif.play('destruct')
      props.unlockTarget++
    }

    if (props.popularity < gameInitialState.popularity)
      props.popularity = gameInitialState.popularity

    destroy(unit)
    wait(2, () => {
      go(STAGES.selectGroups, {
        ...props,
        unlockTarget: props.unlockTarget,
        groups: [],
        generateCount: gameInitialState.generateCount,
      })
    })
  })
}
