import Game from './game.js'

const gameContainer = document.querySelector('main')
const initialValues = [
  'amashosyna',
  'lempiy',
  'listochkin',
  'suchov',
  'sudodoki',
  'shvaikalesh',
  'viktor-yakubiv',
  'zonzujiro',
]

const game = new Game(initialValues, gameContainer)
game.start()
