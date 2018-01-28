# Memory Pair Game

@Kottans Memory Pair Game is a solution of [Task 8][task].

In the game you can tap pairs of Kottant coaches. Enjoy!


## Implementation Detailes

The basic idea — use JavaScript classes and components based apporach
to implement 2 components: _Card_ and _Game_.

Each component contains both business and presentational logic, which are
splitted up to different methods.

`Game`'s business logic implemented with `start()`, `update()` and `finish()`
methods. However, helper method `toggle()` and getter `finished` are added
to make code more understendable.

`Card` is helper component too. The component makes easier work with cards,
i. e. flipping and hiding. To perform these actions getters and setters
`opened` and `hidden` are used.


## Tools and Language Features

#### ECMA Script 6+ syntax and features

- Arrays
  - [`filter()`][js-array-filter]
  - [`forEach()`][js-array-foreach]
  - [`map()`][js-array-map]
- [Arrow functions][js-arrow]
- [Classes][js-classes]
  - [getters][js-getters] & [setters][js-setters]
  - regular & static methods
- [Destructuring syntax][js-destructuring]
- Modules
  - `<script type=module>`
  - [`import`][js-import] & [`export`][js-export]
- [Spread syntax][js-spread]
  - [function parameters][js-rest-params]
  - arrays

#### DOM APIs

- [`document.createElement()`][dom-createelement]
- `Element.className` & [`Element.classList`][dom-classlist]
  - `contains()`
  - `toggle()`
- `Element.appendChild()`
- `Elemend.addEventListener()`

#### Environment tools

- [ESLint][eslint]
  - [Airbnb JavaScript Style Guide][airbnb-js]
- [EditorConfig][editorconfig]


[airbnb-js]: https://github.com/airbnb/javascript
[eslint]: https://eslint.org
[editorconfig]: http://editorconfig.org
[dom-createelement]: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
[dom-classlist]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
[js-array-filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[js-array-forEach]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[js-array-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[js-arrow]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[js-destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[js-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[js-export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export 
[js-getters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-rest-params]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
[js-setters]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[js-spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
[task]: https://github.com/kottans/frontend/blob/master/test08.md
