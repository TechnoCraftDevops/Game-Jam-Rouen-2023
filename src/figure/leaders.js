import {
  ANTIVAX,
  CHASSE_AUX_RONDS_DE_CUIR,
  CHASSE_AU_WOKISME,
  CONTROLE_POPULATION,
  IMMIGRATION_ZER0,
  ISF,
  LEGALISATION_CANNABIS,
  MARIAGE_POUR_TOUS,
  PRIX_DE_L_ESSENCE,
  RETRAITE_A_60_ANS,
  SMIC_2000,
  UNIFORME_OBLIGATOIRE,
  ENERGIE_100_POURCENT_RENOUVELABLE,
  LEGALISATION_ARMES,
  TOUT_NUCLAIRE,
} from '../utils/tags'

export const leaders = [
  {
    name: 'Melant Chotron',
    sprite: 'melanchon',
    accepts: [
      SMIC_2000,
      ISF,
      ENERGIE_100_POURCENT_RENOUVELABLE,
      RETRAITE_A_60_ANS,
    ],
    rejects: [IMMIGRATION_ZER0, CHASSE_AU_WOKISME, TOUT_NUCLAIRE],
    color: [181, 18, 18],
  },
  {
    name: 'Model Z',
    sprite: 'zemmour',
    accepts: [
      IMMIGRATION_ZER0,
      CHASSE_AU_WOKISME,
      UNIFORME_OBLIGATOIRE,
      CONTROLE_POPULATION,
      TOUT_NUCLAIRE,
    ],
    rejects: [SMIC_2000, MARIAGE_POUR_TOUS],
    color: [65, 69, 181],
  },
  {
    name: 'La LAN',
    sprite: 'lalanne',
    accepts: [
      ANTIVAX,
      CHASSE_AUX_RONDS_DE_CUIR,
      LEGALISATION_CANNABIS,
      PRIX_DE_L_ESSENCE,
    ],
    rejects: [CONTROLE_POPULATION, LEGALISATION_ARMES],
    color: [173, 168, 9],
  },
]
