export const SPRITES = {
  lalanne: 'lalanne',
  melanchon: 'melanchon',
  zemmour: 'zemmour',
  group_base: 'group_base',
  batiment: 'batiment',
  mairie: 'mairie',
  prefecture: 'prefecture',
  title: 'title',
  explode: 'explode',
  group: 'group',
  group2: 'group2',
  cop: 'cop',
}

loadSprite(SPRITES.lalanne, '/assets/lalanne.png')
loadSprite(SPRITES.melanchon, '/assets/melanchon.png')
loadSprite(SPRITES.zemmour, '/assets/zemmour.png')
loadSprite(SPRITES.group_base, '/assets/group_base.png')
loadSprite(SPRITES.batiment, '/assets/batiment.png')
loadSprite(SPRITES.mairie, '/assets/mairie.png', {
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
loadSprite(SPRITES.prefecture, '/assets/prefecture.png', {
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
loadSprite(SPRITES.title, '/assets/title.png', {
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

loadSprite(SPRITES.explode, '/assets/explode.png', {
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

loadSprite(SPRITES.group, '/assets/group.png', {
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

loadSprite(SPRITES.group2, '/assets/group2.png', {
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

loadSprite(SPRITES.cop, '/assets/cop.png', {
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
