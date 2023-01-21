import {
  CHASSE_AUX_RONDS_DE_CUIR,
  CHASSE_AU_WOKISME,
  CONTROLE_POPULATION,
  IMMIGRATION_ZER0,
  LEGALISATION_ARMES,
  LEGALISATION_CANNABIS,
  PRIX_DE_L_ESSENCE,
  SMIC_2000,
  UNIFORME_OBLIGATOIRE,
} from '../utils/tags'

export const groups = [
  {
    name: 'gilets jaunes',
    sprite: 'assets/group_base.png',
    force: 1,
    cost: 8,
    minPopularity: 0,
    accepts: [SMIC_2000, ISF, CHASSE_AUX_RONDS_DE_CUIR, PRIX_DE_L_ESSENCE],
    rejects: [TOUT_NUCLAIRE],
    color: '#b51212',
  },
  {
    name: 'patriotes',
    sprite: 'assets/group_base.png',
    force: 1,
    cost: 8,
    minPopularity: 0,
    accepts: [
      IMMIGRATION_ZER0,
      CHASSE_AU_WOKISME,
      CONTROLE_POPULATION,
      LEGALISATION_ARMES,
    ],
    rejects: [ISF, SMIC_2000],
    color: '#b51212',
  },
  {
    name: 'étudiants en sociologie',
    sprite: 'assets/group_base.png',
    force: 1,
    cost: 8,
    minPopularity: 0,
    accepts: [SMIC_2000, ISF, LEGALISATION_CANNABIS],
    rejects: [IMMIGRATION_ZER0],
    color: '#b51212',
  },
]
