import React from 'react';
import Navbar from '../navbar';
import Curiosity from '../curiosity';
import '../App.css'


function Home(){
    return (
    <div id="bg">
        <Navbar/>
        <div>
            <h1 id="title">Descubra a sequência de primos entre dois números de forma ágil!</h1>
        </div>
        <div className='mobile-hide'>
            <Curiosity/>
        </div>
    </div>
    )
};

export default Home;