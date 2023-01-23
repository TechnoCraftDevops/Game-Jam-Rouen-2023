import { groups } from '../figures/groups'
import { alertMessage } from '../utils/alertMessage'
import { button } from '../utils/button'
import { getRandomInt } from '../utils/getRandomInt'
import { STAGES } from '../../main'

export const selectGroupStage = (props) => {
  //background
  add([
    rect(width(), height()),
    pos(0, 0),
    area(),
    solid(),
    color(...props.leader.color),
  ])

  add([
    text(`Points de popularite: ${props.popularity}`, {
      width: width(),
      size: 20,
    }),
    pos(20),
    origin('left', 'top'),
  ])

  const manifestants = props.groups.reduce((acc, group) => {
    return acc + group.number
  }, 0)

  add([
    text(`Manifestant${manifestants ? 's' : ''}: ${manifestants}`),
    origin('right', 'top'),
    pos(width() - 30, 20),
  ])

  //display 3 random groups
  const randomGroups = groups.sort(() => Math.random() - 0.5).slice(0, 3)

  randomGroups.forEach((group, index) => {
    const numOfPeople = getRandomInt(1, props.popularity / 2)
    const cost = group.popularityCost * numOfPeople

    const acceptStr = group.accepts.map((str) => `+ ${str}`)
    const rejectStr = group.rejects.map((str) => `- ${str}`)
    const resumeNum = [
      `Groupe de ${numOfPeople} personne${numOfPeople > 1 ? 's' : ''}`,
    ]
    const resumeForce = [`Force : ${group.force}`, ' ']
    const resume = resumeNum.concat(resumeForce)
    const tagsResume = [...acceptStr, ' '].concat(rejectStr)
    const texts = resume.concat(tagsResume)

    const x = 40 + index * 250

    const card = add([
      rect(width() / 3 - 25, height() - 150),
      pos(x - 10, 60),
      area(),
      color(0, 0, 0),
      opacity(0.3),
      outline(2, color(0, 0, 0)),
      area({ cursor: 'pointer' }),
    ])

    // group sprites
    add([
      text(group.name.toUpperCase()),
      pos(x, 70),
      area({ cursor: 'pointer' }),
    ])
    add([
      sprite(group.sprite, {
        width: 50,
        height: 50,
      }),
      pos(x, 85),
      area({ cursor: 'pointer' }),
    ])

    // accept / reject display
    texts.forEach((txt, indexAccept) => {
      add([text(txt), pos(x, 150 + indexAccept * 15)])
    })

    add([
      text(`cout: ${cost} point${cost > 1 ? 's' : ''}`, {
        size: 14,
      }),
      pos(x, height() - 120),
    ])

    card.onClick(() => {
      // logic d'achat
      const playerPopularity = props.popularity

      if (playerPopularity >= cost) {
        props.popularity -= cost
        props.groups.push({ ...group, number: numOfPeople })
        go(STAGES.selectGroups, props)
      } else {
        alertMessage('popularite insuffisante')
      }
    })
  })

  if (props.generateCount > 0) {
    button(`generer (${props.generateCount})`, 40, height() - 40, () => {
      go(STAGES.selectGroups, props)
      props.generateCount--
    })
  }

  button('Commencer la revolution', 400, height() - 40, () => {
    if (props.groups.length === 0) return

    go(STAGES.selectTarget, props)
  })
}
