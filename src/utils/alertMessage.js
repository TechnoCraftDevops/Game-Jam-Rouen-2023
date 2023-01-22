export const alertMessage = (txt) => {
  const pad = 30

  add([
    text(`[${txt}].wavy`, {
      width: width(),
      styles: {
        green: {
          color: rgb(128, 128, 255),
        },
        wavy: (idx, ch) => ({
          color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
          pos: vec2(0, wave(-4, 4, time() * 6 + idx * 0.5)),
        }),
      },
    }),
    pos(pad, height() - pad * 2),
    origin('botleft'),
  ])
}
