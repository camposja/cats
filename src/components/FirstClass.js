import React, { Component } from 'react'

class FirstClass extends Component {
  render() {
    return (
        <div>
            <h2>Some props make names, other make tacos: {this.props.name}</h2>
        </div>
    )
  }
}

export default FirstClass