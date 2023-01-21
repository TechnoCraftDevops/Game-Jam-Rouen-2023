/**
 * Sprites
 */
loadSprite('bean', 'src/assets/bean.png')
loadSprite('grass', 'src/assets/grass.png')
loadSprite('title', 'src/assets/title.png', {
  sliceX: 8,
  anims: {
    idle: {
      from: 0,
      to: 7,
      speed: 10,
      loop: true,
    },
  },
})
