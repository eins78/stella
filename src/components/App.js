import React, { Component } from 'react'

import Layout from './Layout'
import Article from './Article'

class App extends Component {
  render () {
    return (
      <Layout className='App'>
        <Article />
      </Layout>
    )
  }
}

export default App
