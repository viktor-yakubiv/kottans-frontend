import Game from './game.js'

const gameContainer = document.querySelector('main')
const initialValues = [1, 2, 3, 4, 5, 6, 7, 8]

const game = new Game(initialValues, gameContainer)
game.start()
