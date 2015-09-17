import React, { Component } from 'react'
import AceEditor from 'react-ace'

import brace from 'brace'
import 'brace/mode/javascript'
import 'brace/theme/ambiance'
import 'brace/ext/beautify'
import 'brace/ext/searchbox'

export default class ComponentView extends Component {

  handleLoad = (editor) => {
    this.editor = editor
    this.editor.session.setUseWrapMode(true)
  }

  render () {

    return (
      <AceEditor
        mode="javascript"
        theme="ambiance"
        fontSize={ 12 }
        name="generated"
        readOnly={ true }
        height="100%"
        width="100%"
        showPrintMargin={ false }
        showGutter={ true }
        highlightActiveLine={ false }
        value={ this.props.value }
        onLoad={ this.handleLoad } />
    )
  }
}
