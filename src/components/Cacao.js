import React, { Component } from 'react'

class Cacao extends Component {
    render() {
        console.log(this.props)
        {if (this.props.chocolat === 'dark chocolate'){
           return <h1>My favorite chocolate is {this.props.chocolat} </h1>
        } else {
            return <h2>carrousel itme --{this.props.chocolat}--</h2>    
        }}
        
    }
} 

export default Cacao