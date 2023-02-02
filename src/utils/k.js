import kaboom from 'kaboom'

export const WIDTH = 200
export const HEIGHT = 110

//TODO utiliser le scale plutôt que multiplier par 4
export const k = kaboom({
  width: WIDTH * 4,
  height: HEIGHT * 4,
  font: 'sinko',
})
