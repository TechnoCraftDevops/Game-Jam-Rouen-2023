import { SPRITES } from '../utils/load-sprites'
import { FOES } from './foes'

export const TARGETS = {
  mairie: 'Mairie',
  prefecture: 'Prefecture',
  matignon: 'Matignon',
  elysee: 'Elysee',
}

export const targets = [
  {
    name: TARGETS.mairie,
    sprite: SPRITES.mairie,
    foes: [
      {
        name: FOES.policeMunicipale,
        number: [5, 15],
      },
    ],
  },
  {
    name: TARGETS.prefecture,
    sprite: SPRITES.prefecture,
    foes: [
      {
        name: FOES.policeMunicipale,
        number: [5, 20],
      },
      {
        name: FOES.policeNationale,
        number: [10, 20],
      },
    ],
  },
  {
    name: TARGETS.matignon,
    sprite: SPRITES.batiment,
    foes: [
      {
        name: FOES.policeNationale,
        number: [30, 50],
      },
      {
        name: FOES.policeNationale,
        number: [10, 100],
      },
    ],
  },
  {
    name: TARGETS.elysee,
    sprite: SPRITES.batiment,
    foes: [
      {
        name: FOES.policeNationale,
        number: [3, 10],
      },
      {
        name: FOES.crs,
        number: [8, 15],
      },
    ],
  },
]
