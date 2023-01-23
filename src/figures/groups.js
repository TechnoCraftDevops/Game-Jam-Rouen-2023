import { SPRITES } from '../utils/load-sprites'
import { TAGS } from '../utils/tags'

export const GROUPS = {
  giletsJaunes: 'gilets jaunes',
  patriotes: 'patriotes',
  etudiantEnSociologie: 'etudiants en sociologie',
  antivax: 'antivax',
  ecolos: 'ecolos',
}

export const groups = [
  {
    name: GROUPS.giletsJaunes,
    sprite: SPRITES.group_base,
    force: 1,
    popularityCost: 1,
    accepts: [
      TAGS.smic2000,
      TAGS.isf,
      TAGS.chasseAuxRondsDeCuir,
      TAGS.prixDeLEssence,
    ],
    rejects: [TAGS.prixDeLEssence],
  },
  {
    name: GROUPS.patriotes,
    sprite: SPRITES.group_base,
    force: 1,
    popularityCost: 1,
    accepts: [
      TAGS.immigrationZero,
      TAGS.chasseAuWokisme,
      TAGS.controlePopulation,
      TAGS.legalisationArmes,
    ],
    rejects: [TAGS.isf, TAGS.smic2000],
  },
  {
    name: GROUPS.etudiantEnSociologie,
    sprite: SPRITES.group_base,
    force: 1,
    popularityCost: 1,
    accepts: [TAGS.smic2000, TAGS.isf, TAGS.legalisationCannabis],
    rejects: [TAGS.immigrationZero],
  },
  {
    name: GROUPS.antivax,
    sprite: SPRITES.group_base,
    force: 2,
    popularityCost: 3,
    accepts: [TAGS.antivax],
    rejects: [TAGS.controlePopulation],
  },
  {
    name: GROUPS.ecolos,
    sprite: SPRITES.group_base,
    force: 3,
    popularityCost: 4,
    accepts: [TAGS.legalisationCannabis, TAGS.energie100PourcentRenouvelable],
    rejects: [TAGS.toutNucleaire],
  },
]
