import React, { Component } from 'react'
import AceEditor from 'react-ace'
import SampleSVG from './samplesvg'

import brace from 'brace'
import 'brace/mode/svg'
import 'brace/theme/ambiance'
import 'brace/ext/searchbox'

export default class SourceView extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: SampleSVG
    }
  }

  shouldComponentUpdate () {
    return false
  }

  handleChange = (obj) => {
    this.setState({ value: obj }, () => (
      this.props.liveUpdate && this.props.onChange(obj)
    ))
  }

  render () {

    return (
      <AceEditor
        mode="svg"
        theme="ambiance"
        fontSize={ 12 }
        name="svg-source"
        height="100%"
        width="100%"
        showPrintMargin={ false }
        showGutter={ true }
        highlightActiveLine={ true }
        value={ this.state.value }
        onChange={ this.handleChange } />
    )
  }
}
