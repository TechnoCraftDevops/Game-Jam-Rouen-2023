import './style.css'
import './src/utils/k.js'
import './src/utils/load-sprites.js'
/**
 * Stages
 */
import { startStage } from './src/stage/startStage.js'
import { selectLeaderStage } from './src/stage/selectLeaderStage.js'
import { selectGroupStage } from './src/stage/selectGroupStage'
import { fightStage } from './src/stage/fightStage.js'
import { creditStage } from './src/stage/creditStage'
import { selectTargetStage } from './src/stage/selectTargetStage'

const props = {
  popularity: 9,
}
scene('start', startStage)
scene('selectLeader', selectLeaderStage)
scene('selectGroup', selectGroupStage)
scene('selectTarget', selectTargetStage)
scene('selectFight', fightStage)
scene('credit', creditStage)

export const DEFAULT_POPULARITY = 20

function start() {
  go('start', {
    props,
    popularity: DEFAULT_POPULARITY,
    unlockTarget: 0,
  })
}
start()
