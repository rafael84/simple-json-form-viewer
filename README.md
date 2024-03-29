# simple-json-form-viewer

> A react component that displays a JSON object or array as a form

[![NPM](https://img.shields.io/npm/v/simple-json-form-viewer.svg)](https://www.npmjs.com/package/simple-json-form-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Live demo: [rafael84.github.io/simple-json-form-viewer](http://rafael84.github.io/simple-json-form-viewer/)

## Install

```bash
npm install --save simple-json-form-viewer
```

## Usage

```jsx
import React, { Component } from 'react'

import { JSONViewer } from 'simple-json-form-viewer'
import 'simple-json-form-viewer/dist/index.css'

class Example extends Component {
  render() {
    return <JSONViewer data={{ foo: 'bar' }} />
  }
}
```

## License

MIT © [rafael84](https://github.com/rafael84)
