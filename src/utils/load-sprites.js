/**
 * Sprites
 */
loadSprite('bean', 'src/assets/bean.png')
loadSprite('grass', 'src/assets/grass.png')

loadSprite('lalanne', 'src/assets/lalanne.png')
loadSprite('melanchon', 'src/assets/melanchon.png')
loadSprite('zemmour', 'src/assets/zemmour.png')
loadSprite('group_base', 'src/assets/group_base.png')
loadSprite('batiment', 'src/assets/batiment.png')
loadSprite('mairie', 'src/assets/mairie.png', {
  sliceX: 6,
  anims: {
    destruct: {
      from: 0,
      to: 5,
      speed: 10,
      loop: false,
    },
  },
})
loadSprite('prefecture', 'src/assets/prefecture.png', {
  sliceX: 9,
  anims: {
    destruct: {
      from: 0,
      to: 8,
      speed: 10,
      loop: false,
    },
  },
})
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

loadSprite('explode', 'src/assets/explode.png', {
  sliceX: 6,
  anims: {
    idle: {
      from: 0,
      to: 5,
      speed: 10,
      loop: false,
    },
  },
})

loadSprite('group', 'src/assets/group.png', {
  sliceX: 3,
  anims: {
    run: {
      from: 0,
      to: 2,
      speed: 8,
      loop: true,
    },
  },
})

loadSprite('group2', 'src/assets/group2.png', {
  sliceX: 3,
  anims: {
    run: {
      from: 0,
      to: 2,
      speed: 8,
      loop: true,
    },
  },
})

loadSprite('cop', 'src/assets/cop.png', {
  sliceX: 12,
  anims: {
    idle: {
      from: 0,
      to: 11,
      speed: 5,
      loop: true,
    },
  },
})
