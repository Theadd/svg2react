import React, { Component } from 'react'
import SplitPane from 'react-split-pane'
import SourceView from './views/sourceview/sourceview'
import ComponentView from './views/componentview/componentview'
import svg2react from './lib/svg2react'
import GitHubForkRibbon from 'react-github-fork-ribbon'

import './app.css'

export class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleSourceChange = (source) => {
    svg2react(source, result => {
      this.setState({
        value: result
      })
    })
  }

  render () {

    return (
      <main>
        <GitHubForkRibbon href="https://github.com/Theadd/svg2react" target="_blank" position="left-bottom">
          Fork me on GitHub
        </GitHubForkRibbon>
        <SplitPane split="vertical" minSize="150" defaultSize="50%">
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <SourceView onChange={ this.handleSourceChange } liveUpdate={ true } />
          </div>
          <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
            <ComponentView value={ this.state.value } />
          </div>
        </SplitPane>
      </main>
    )
  }
}
