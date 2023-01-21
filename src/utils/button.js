export const button = (txt, posx, posy, func) => {
    const btn = add([
        text(txt),
		pos(posx, posy),
		area({ cursor: "pointer", }),
		scale(1),
    ])
    btn.onClick(func)
  }
  