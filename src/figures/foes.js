import { SPRITES } from '../utils/load-sprites'

export const FOES = {
  policeMunicipale: 'Police municipale',
  policeNationale: 'Police nationale',
  crs: 'CRS',
}

export const foes = [
  {
    name: FOES.policeMunicipale,
    sprite: SPRITES.group_base,
    force: 2,
  },
  {
    name: FOES.policeNationale,
    sprite: SPRITES.group_base,
    force: 5,
  },

  {
    name: FOES.crs,
    sprite: SPRITES.group_base,
    force: 10,
  },
]
