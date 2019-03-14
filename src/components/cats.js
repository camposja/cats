import React, { Component } from 'react';
import octotron from './octotron.jpg';
import obicat from './obiwancatnobi.jpg';
import daftpcat from './daftpunktocat.gif';
import octonaut from './octonaut.jpg';
import supermario from './super-mario-cat.jpg';
import eclipsecat from './total-eclipse-cat.jpg';
import './cats.css';

const cats = [
    octotron,
    obicat,
    daftpcat,
    octonaut,
    supermario,
    eclipsecat
]

class Cats extends Component {
  render() {
    return (
        <ul>
            {cats.map((cats) => 
               <li class="catbox">
                <img src={cats} alt="logo" height="380px" />
                    <div class="txtbox">
                        <p class="numtxt">#107</p>
                        <p class="catnam">troncat</p>
                    </div>
                </li>  
            )}
        </ul>
    );
  }
}

export default Cats;