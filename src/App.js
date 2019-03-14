import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import FirstClass from './components/FirstClass'
import Cacao from './components/Cacao'

const taco = [
  "lettuce",
  "cheese",
  "tomatoe",
  "sour cream",
  "corn shell"
];

const choco = [
  "72% chocolate",
  "milk chocolate",
  "white chocolate",
  "dark chocolate",
  "hazelnut chocolate"
]

class App extends Component {
  render() {
    return (
      <div>
        {/* {taco.map(taco => {
          return <FirstClass name={taco}/>
        })}
        <HelloWorld />
        <FirstClass name="Stella" />
        <FirstClass name="Bree" />
        <FirstClass name="Adrian" />
        <FirstClass name="Liz" />
        <FirstClass name="Katherine" /> */}

        {choco.map(choco => {
          return <Cacao chocolat={choco} />
        })}
      </div>  
    )
  }
}

export default App
