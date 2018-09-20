import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import HelloWorld from 'my-react-lib'

console.log('Render loaded react component(via umd)')
console.log(renderToStaticMarkup(<HelloWorld />))