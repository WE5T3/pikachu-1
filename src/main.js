import string from "./css"

const player = {
  n: 1,
  time: 100,
  id: undefined,
  ui:{
    demo : document.querySelector('#demo'),
    demoStyle : document.querySelector('#demoStyle')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demoStyle.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    for (let key in player.events) {
      const value = player.events[key]  // play/pause/slow...
      document.querySelector(key).onclick = player[value]
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demoStyle.innerHTML = string.substr(0, player.n)
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    window.clearInterval(player.id)
    player.id = setInterval(player.run, player.time)

  },
  pause: () => {
    window.clearInterval(player.id)
  },
  update: () => {
    player.pause()
    player.play()
  },
  slow: () => {
    player.time = 100
    player.update()
  },
  normal: () => {
    player.time = 50
    player.update()
  },
  fast: () => {
    player.time = 0
    player.update()
  }
}

player.init()
