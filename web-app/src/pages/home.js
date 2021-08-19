import Navbar from '../navbar';
import Curiosity from '../curiosity';
import axios from 'axios';
import React, { useState } from 'react';
import '../App.css'


function Home(){

    const [fields, setFields] = useState({ num1: 0, num2: 0, });
    const [result, setResult] = useState('')

    function handleInputChange(event){
        fields[event.target.name] = event.target.value;
        setFields(fields);
    }

    function handleFormSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3031/resultado', fields).then(response => {
            document.getElementById('result').style.display = 'block';
            setResult(response.data.dados);
        })
    }

    return (
    <div id="bg">
        <Navbar/>
        <div id="result">
            <ul>
                <li className='list'>
                    <table id='table'>
                        <tr><td>
                            <spam className="result-list">Resultado {result}</spam>
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
        <form id='form' onSubmit={handleFormSubmit}>
            <div id='first-number'>
                <label id="label"> Primeiro número <input className='input'  name='num1' id='num1' onChange={handleInputChange}  /> </label>
            </div>
            <div id='second-number'>
                <label id="label" > Segundo número <input  className='input' name='num2' id='num2' onChange={handleInputChange} /> </label>
            </div>
            <div>
            { /*<button id='button' type='submit' value='Salvar'><spam id='button-title'>Enviar</spam></button>*/}
              <input type="submit" value="Salvar"></input>
            </div>
        </form>
    </div>
    )
};

export default Home;