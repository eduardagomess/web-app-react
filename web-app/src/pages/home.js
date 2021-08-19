import React from 'react';
import Navbar from '../navbar';
import Curiosity from '../curiosity';
import axios from 'axios';
import React, { useEffect } from 'react';
import '../App.css'


function Home(){
    return (
    <div id="bg">
        <Navbar/>
        <div id="result">
            <ul>
                <li className='list'>
                    <table id='table'>
                        <tr><td>
                            <spam className="result-list">Resultado</spam>
                        </td></tr>
                    </table>
                </li>
            </ul>
        </div>
        <div>
            <h1 id='title'>Descubra a sequência de primos entre dois números de forma ágil!</h1>
        </div>
        <div className='mobile-hide'>
            <Curiosity/>
        </div>
        <form id='form'>
            <div id='first-number'>
                <label id="label"> Primeiro número <input   className='input' type='text' name='num1' id='num1'  /> </label>
            </div>
            <div id='second-number'>
                <label id="label" > Segundo número <input  className='input' name='num2' id='num2' /> </label>
            </div>
            <div>
                <button id='button' type='submit' value='Enviar'><spam id='button-title'>Enviar</spam></button>
                { /* <input type="submit" value="Salvar"> */}
            </div>
        </form>
    </div>
    )
};

export default Home;