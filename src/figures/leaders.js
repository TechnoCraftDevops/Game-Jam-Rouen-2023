import { SPRITES } from '../utils/load-sprites'
import { TAGS } from '../utils/tags'

export const LEADERS = {
  melanchon: 'Mélent Chontron',
  zemmour: 'Modèle Z',
  lalanne: 'La LAN',
}

export const leaders = [
  {
    name: LEADERS.melanchon,
    sprite: SPRITES.melanchon,
    accepts: [
      TAGS.smic2000,
      TAGS.isf,
      TAGS.energie100PourcentRenouvelable,
      TAGS.retraiteA60Ans,
    ],
    rejects: [
      TAGS.immigrationZero,
      TAGS.chasseAuWokisme,
      TAGS.uniformeObligatoire,
    ],
    color: [181, 18, 18],
  },
  {
    name: LEADERS.zemmour,
    sprite: SPRITES.zemmour,
    accepts: [
      TAGS.immigrationZero,
      TAGS.chasseAuWokisme,
      TAGS.uniformeObligatoire,
      TAGS.controlePopulation,
      TAGS.toutNucleaire,
    ],
    rejects: [TAGS.smic2000, TAGS.mariagePourTous],
    color: [65, 69, 181],
  },
  {
    name: LEADERS.lalanne,
    sprite: SPRITES.lalanne,
    accepts: [
      TAGS.antivax,
      TAGS.chasseAuxRondsDeCuir,
      TAGS.legalisationCannabis,
      TAGS.prixDeLEssence,
    ],
    rejects: [TAGS.controlePopulation, TAGS.legalisationArmes],
    color: [173, 168, 9],
  },
]
