import Card from './card.js'


const closeCards = (...cards) => {
  cards.forEach((c) => { c.opened = false })
}

const hideCards = (...cards) => {
  cards.forEach((c) => { c.hidden = true })
}

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }

  return a
}


export default class Game {
  static render(parentElement) {
    const element = document.createElement('div')
    element.className = 'game'

    if (parentElement) parentElement.appendChild(element)

    return element
  }

  constructor(initialValues, element) {
    this.initialValues = initialValues
    this.cards = []
    this.element = Game.render(element)
  }

  get finished() {
    return this.cards.filter(c => !c.hidden).length === 0
  }

  toggleCard(card) {
    this.current = card
    this.update()
  }

  start() {
    const values = shuffle([
      ...this.initialValues,
      ...this.initialValues,
    ])

    this.render(values)
  }

  update() {
    const { previous, current, cards } = this

    if (!previous || previous === current) {
      closeCards(...cards.filter(c => c !== current && c.opened))
      this.previous = current.opened ? current : null
    } else if (previous !== current && previous.value === current.value) {
      hideCards(previous, current)
      this.previous = null

      if (this.finished) {
        this.finish()
      }
    } else {
      this.previous = null
    }
  }

  finish() {
    alert('You won! Good job!')
    this.start()
  }

  render(values) {
    const { element } = this
    const onClick = this.toggleCard.bind(this)

    element.innerHTML = ''
    this.cards = values.map(value => new Card(value, element, { onClick }))
  }
}
