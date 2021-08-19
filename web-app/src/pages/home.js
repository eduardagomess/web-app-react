import React from 'react';
import Navbar from '../navbar';
import '../App.css'


function Home(){
    return (
    <div id="bg">
        <Navbar/>
        <div>
            <h1 id="title">Descubra a sequência de primos entre dois números de forma ágil!</h1>
        </div>
    </div>
    )
};

export default Home;