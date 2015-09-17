
const generate = svg => `import React, { Component } from 'react'

export default class GeneratedComponent extends Component {

  linkAs = (key, attrs) => (
    (this.__cb4r3fs || (this.__cb4r3fs = new Map())).get(key) || this.__cb4r3fs.set(key, node => (
      this.refs = Object.assign({}, this.refs, { [key]: node }),
      Object.keys(attrs).forEach(attr => node.setAttributeNS(null, attr, attrs[attr]))
    )).get(key)
  )

  render () {

    return (
      ${svg.trim()}
    )
  }
}
`

export default generate
