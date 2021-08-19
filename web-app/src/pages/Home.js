import Navbar from '../components/Navbar';
import Curiosity from '../components/Curiosity';
import logoBridge from '../images/b-bridge.png';
import axios from 'axios';
import React, { useState } from 'react';
import '../App.css'


function Home(){
    const [fields, setFields] = useState({ num1: 'none', num2: 'none' });
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
        });
    }

    return (
        <div id="bg">
            <Navbar/>
        
            <h1 id="title">Descubra a sequência de primos entre dois números de forma ágil!</h1>
            <div className="mobile-hide">
                <Curiosity/>
            </div>
            <form id="form" onSubmit={handleFormSubmit}>
                <div id="first-number">
                    <label id="label"> 
                        Primeiro número 
                        <input
                            id="num1"
                            name="num1"
                            className="input"
                            type="number"
                            onChange={handleInputChange}
                            required 
                        /> 
                    </label>
                </div>
                <div id="second-number">
                    <label id="label" >
                        Segundo número 
                        <input  
                            id="num2"
                            name="num2"
                            className="input"
                            type="number"
                            onChange={handleInputChange}  
                            required
                        /> 
                    </label>
                </div>
                <div>
                    <button id="button" type="submit" value="Salvar">
                        <span id="button-title">Enviar</span>
                    </button>
                </div>
            </form>
            <div id="result">
                <ul>
                    <li className="list">
                        <table id="table">
                            <tr><td>
                                <spam className="result-list">Resultado {result}</spam>
                            </td></tr>
                        </table>
                    </li>
                </ul>
            </div> 
            <div>
                <img src={logoBridge} alt="Logo do Bridge" id="logo-bridge"></img>
            </div>
        </div>
    )
};

export default Home;