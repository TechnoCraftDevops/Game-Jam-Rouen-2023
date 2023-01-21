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

/**
 * Sprites
 */
// loadSprite('bean', 'src/assets/bean.png')
// loadSprite('grass', 'src/assets/grass.png')
// loadSprite('startTitle', 'src/assets/title.png')

scene('start', startStage)
scene('selectLeader', selectLeaderStage)
scene('selectGroup', selectGroupStage)
scene('fight', fightStage)


function start() {
  go('start', {
    score: 0,
  })
}
start()