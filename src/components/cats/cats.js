import React, { Component } from 'react';
import octotron from './octotron.jpg';
import obicat from './obiwancatnobi.jpg';
import daftpcat from './daftpunktocat.gif';
import octonaut from './octonaut.jpg';
import maxcat from './maxtocat.gif';
import supermario from './super-mario-cat.jpg';
import mummycat from './mummycat.gif';
import andycat from './andycat.jpg';
import eclipsecat from './total-eclipse-cat.jpg';
import './cats.css';

const cats = [
    octotron, obicat, daftpcat, octonaut, maxcat, supermario, mummycat, andycat, eclipsecat
]

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        };
    }
    componentDidMount(){
        this.getCats();
        console.log(this.state.array)
    }
    getCats(){
        fetch("https://sdg-octodex.herokuapp.com/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        array: result.data
                    })
                }
            )
    }
    render() {
        return (    
            <ul>
                {this.state.array.map((cats) => 
                    <li class="catbox">
                        <img src={cats.image} alt="logo" height="380px" />
                        <div class="txtbox">
                            <p class="numtxt"># {cats.number}</p>
                            <p class="catnam">the {cats.name} </p>
                        </div>
                    </li>  
                )}
            </ul>  
        );
    }
}

export default Cats;