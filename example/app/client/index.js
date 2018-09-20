import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'

import HelloWorld from 'my-react-lib'

const app = (
  <HelloWorld />
)

console.log('Render loaded react component(via umd)')
ReactDOM.render(app, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}