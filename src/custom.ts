const art = `⠀⠀⠀⠀⠀⠀⠀⠀
                     ⠀⣠⣶⣶⣶⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣶⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢻⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠿⢿⣿⣻⢿⣿⣿⣿⡿⠄⣿⣿⣿⠀⠀⠀⣀⣤⡶⠟⠶⣤⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣤⣶⣿⠁⢈⣽⡛⠲⣤⣀⠀⠀⠀⣀⡀⠀⠈⠘⢽⣿⣿⡟⠹⠋⠈⣀⣿⣿⣿⣤⣴⠞⠉⢹⣿⣦⠀⣿⣿⡗⢦⣄⡀⠀⠀
⠀⢀⣤⣾⣏⢹⣿⡟⠀⣿⣿⠇⢀⣾⣏⠉⢉⣽⡟⢷⣤⣶⣿⣿⣿⣿⣿⣷⣦⣴⠟⣽⣿⡟⠀⣿⣿⡄⠈⢿⣿⠀⠙⢿⣷⢸⣿⣟⠲⣤
⣴⡞⢻⣿⡿⣾⠟⠁⠀⣿⠏⠀⢸⣿⡿⠀⢸⣿⣇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⣿⣿⡇⠀⢻⣿⡇⠀⠈⢿⠀⠀⠈⠻⡜⢿⣿⣠⣿
⣿⡇⣿⠏⠀⠁⠀⠀⠀⠏⠀⠀⢸⡿⠁⠀⢸⣿⢛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡙⣿⡇⠀⠀⢻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠇⠻
⠋⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠁⠀⠀⢸⠇⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁⠹⠁⠀⠀⠀⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣸⣿⡿⢹⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣆⡀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⡀⣀⣈⣻⣤⡀⢀⣠⣾⣿⣿⡿⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠙⣿⣿⣿⣶⣄⡀⢀⣴⣏⣀⣀⣠⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠈⠙⠛⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀`;

export const customConfig = {
  banner: true,
  rainbow: true,
  whiteMix: 0.35,
  bannerText: ['BAILEYS MADE BY RAN', 'BY @Ran-Dev', 'Dukungan saweria.co/ranzdev'],
  autoFollow: true,
  pairingCode: 'RANDEV12',
  newsletterIds: [
    '120363424153860594@newsletter',
    '120363422841048901@newsletter'
  ]
}

const hsv = (h: number, s: number, v: number): [number, number, number] => {
  const i = Math.floor(h / 60) % 6
  const f = h / 60 - Math.floor(h / 60)
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const rgb: [number, number, number][] = [
    [v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]
  ]
  const c = rgb[i] as [number, number, number]
  return [Math.round(c[0] * 255), Math.round(c[1] * 255), Math.round(c[2] * 255)]
}

export const showBanner = () => {
  if (!customConfig.banner) return
  const G = globalThis as any
  if (G.__baileysBannerShown) return
  G.__baileysBannerShown = true
  const lines = art.split('\n')
  const total = Math.max(lines.length, 1)
  const out = lines.map((line, i) => {
    let res = ''
    for (let x = 0; x < line.length; x++) {
      const ch = line[x] as string
      if (ch === '\u2800' || ch === ' ') {
        res += ch
        continue
      }
      const hue = ((i / total) * 300 + x * 4) % 360
      const [r, g, b] = hsv(hue, 1, 1)
      const m = customConfig.whiteMix
      const rr = Math.round(r + (255 - r) * m)
      const gg = Math.round(g + (255 - g) * m)
      const bb = Math.round(b + (255 - b) * m)
      res += `\x1b[38;2;${rr};${gg};${bb}m${ch}`
    }
    return res + '\x1b[0m'
  })
  out.push(...customConfig.bannerText.map(t => `\x1b[1;38;2;0;255;255m${t}\x1b[0m`))
  console.log(out.join('\n'))
}

export const autoFollowChannels = (sock: any) => {
  if (!customConfig.autoFollow) return
  const ids = [...new Set(customConfig.newsletterIds)].filter(Boolean)
  void (async () => {
    for (const id of ids) {
      try {
        await sock.newsletterFollow(id)
      } catch {}
      await new Promise(r => setTimeout(r, 2000))
    }
  })()
}
