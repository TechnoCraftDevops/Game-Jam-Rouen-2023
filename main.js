import './style.css'
import './src/utils/k.js'
import './src/utils/load-sprites.js'

import { startStage } from './src/stage/startStage.js'
import { selectLeaderStage } from './src/stage/selectLeaderStage.js'
import { selectGroupStage } from './src/stage/selectGroupStage'
import { fightStage } from './src/stage/fightStage.js'

scene('start', startStage)
scene('selectLeader', selectLeaderStage)
scene('selectGroup', selectGroupStage)
scene('fight', fightStage)


function start() {
  // Start with the "game" scene, with initial parameters
  go('start', {
    score: 0,
  })
}
start()