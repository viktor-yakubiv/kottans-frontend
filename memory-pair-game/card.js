export default class Card {
  static render({ value, onClick }, parentElement) {
    const element = document.createElement('figure')
    element.className = 'card'

    element.innerHTML = `<img src="images/${value}.jpg" alt="@${value}">`
    element.addEventListener('click', onClick)

    if (parentElement) parentElement.appendChild(element)

    return element
  }

  constructor(value, element, { onClick } = {}) {
    this.value = value
    this.onClick = onClick

    this.element = Card
      .render({ value, onClick: this.toggle.bind(this) }, element)
  }

  get opened() {
    return this.element.classList.contains('opened')
  }

  set opened(value) {
    this.element.classList.toggle('opened', value)
  }

  get hidden() {
    return this.element.classList.contains('hidden')
  }

  set hidden(value) {
    this.element.classList.toggle('hidden', value)
  }

  toggle() {
    this.opened = !this.opened
    if (this.onClick) this.onClick(this)
  }

  valueOf() {
    return this.value
  }
}
