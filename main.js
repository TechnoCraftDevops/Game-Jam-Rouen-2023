import './style.css'
import './src/utils/k.js'
import './src/utils/load-sprites.js'
import { startStage } from './src/stages/start.stage'
import { selectGroupStage } from './src/stages/select-groups.stage'
import { selectTargetStage } from './src/stages/select-target.stage'
import { selectLeaderStage } from './src/stages/select-leader.stage'
import { creditsStage } from './src/stages/credits.stage'
import { fightStage } from './src/stages/fight.stage'

export const gameInitialState = {
  popularity: 20,
  generateCount: 3,
  unlockTarget: 0,
}

export const gameState = {
  popularity: gameInitialState.popularity,
  generateCount: gameInitialState.generateCount,
  unlockTarget: gameInitialState.unlockTarget,
  leader: undefined,
  groups: [],
  target: undefined,
}

export const STAGES = {
  start: 'start',
  selectGroups: 'selectGroups',
  selectTarget: 'selectTarget',
  selectLeader: 'selectLeader',
  credits: 'credits',
  fight: 'fight',
}

scene(STAGES.start, (props) => startStage(props))
scene(STAGES.selectGroups, (props) => selectGroupStage(props))
scene(STAGES.selectTarget, (props) => selectTargetStage(props))
scene(STAGES.selectLeader, (props) => selectLeaderStage(props))
scene(STAGES.credits, (props) => creditsStage(props))
scene(STAGES.fight, (props) => fightStage(props))

function start() {
  go(STAGES.start, gameState)
}

start()
