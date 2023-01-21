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
loadSprite('lalanne', 'src/assets/lalanne.png')
loadSprite('melanchon', 'src/assets/melanchon.png')
loadSprite('zemmour', 'src/assets/zemmour.png')
loadSprite('group_base', 'src/assets/group_base.png')
loadSprite('batiment', 'src/assets/batiment.png')
