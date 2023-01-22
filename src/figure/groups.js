import {
  CHASSE_AUX_RONDS_DE_CUIR,
  CHASSE_AU_WOKISME,
  CONTROLE_POPULATION,
  IMMIGRATION_ZER0,
  LEGALISATION_ARMES,
  LEGALISATION_CANNABIS,
  PRIX_DE_L_ESSENCE,
  SMIC_2000,
  ISF,
  TOUT_NUCLAIRE,
} from '../utils/tags'

export const groups = [
  {
    name: 'Gilets jaunes',
    sprite: 'group_base',
    force: 1,
    popularityCost: 8,
    accepts: [SMIC_2000, ISF, CHASSE_AUX_RONDS_DE_CUIR, PRIX_DE_L_ESSENCE],
    rejects: [TOUT_NUCLAIRE],
    color: [181, 18, 18],
  },
  {
    name: 'Patriotes',
    sprite: 'group_base',
    force: 1,
    popularityCost: 8,
    accepts: [
      IMMIGRATION_ZER0,
      CHASSE_AU_WOKISME,
      CONTROLE_POPULATION,
      LEGALISATION_ARMES,
    ],
    rejects: [ISF, SMIC_2000],
    color: [65, 69, 181],
  },
  {
    name: 'Etudiants en sociologie',
    sprite: 'group_base',
    force: 1,
    popularityCost: 8,
    accepts: [SMIC_2000, ISF, LEGALISATION_CANNABIS],
    rejects: [IMMIGRATION_ZER0],
    color: [173, 168, 9],
  },
]
