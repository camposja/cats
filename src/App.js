import React, { Component } from 'react'
import Cats from './components/cats/cats'
import Navbar from './components/navbar/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cats />
      </div>  
    )
  }
}

export default App
