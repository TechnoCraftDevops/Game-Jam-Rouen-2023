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

scene('start', startStage)
scene('selectLeader', selectLeaderStage)
scene('selectGroup', selectGroupStage)
scene('fight', fightStage)
scene('credit', creditStage)

function start() {
  go('start', {
    score: 0,
  })
}
start()