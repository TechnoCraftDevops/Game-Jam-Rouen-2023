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
} from '../utils/tags'

export const leaders = [
  {
    name: 'Melanchontron',
    sprite: 'assets/melanchon.png',
    accepts: [
      SMIC_2000,
      ISF,
      ENERGIE_100_POURCENT_RENOUVELABLE,
      RETRAITE_A_60_ANS,
    ],
    rejects: [IMMIGRATION_ZER0, CHASSE_AU_WOKISME, TOUT_NUCLAIRE],
    color: '#b51212',
  },
  {
    name: 'Zelourd',
    sprite: 'assets/zemmour.png',
    accepts: [
      IMMIGRATION_ZER0,
      CHASSE_AU_WOKISME,
      UNIFORME_OBLIGATOIRE,
      CONTROLE_POPULATION,
      TOUT_NUCLAIRE,
    ],
    rejects: [SMIC_2000, MARIAGE_POUR_TOUS],
    color: '#4145b5',
  },
  {
    name: 'la LAN',
    sprite: 'assets/lalanne.png',
    accepts: [
      ANTIVAX,
      CHASSE_AUX_RONDS_DE_CUIR,
      LEGALISATION_CANNABIS,
      PRIX_DE_L_ESSENCE,
    ],
    rejects: [CONTROLE_POPULATION, LEGALISATION_ARMES],
    color: '#ada809',
  },
]
