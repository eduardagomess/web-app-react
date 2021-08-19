import React from 'react';
import next from '../images/next.png';
import '../App.css'

function Curiosity(){
        return (
        <div className='mobile-hide'>
            <h1 id="second-title">Curiosidades sobre os primos</h1>
            <ul>
                <li className='list'>
                    <div>
                        <img id="img-next" src={next} alt="Item da lista"></img>
                    </div>
                    <table id='table'>
                        <tr><td>
                            <p className="curiosity">O projeto Great Internet Mersenne Prime Search atualmente oferece 3.000 dólares por descobertas de números primos com menos de 100.000 milhões de dígitos</p>
                        </td></tr>
                    </table>
                </li>
                <li className='list'>
                    <div>
                        <img id="img-next"src={next} alt="Item da lista"></img>
                    </div>
                    <table id='table'>
                        <tr><td>
                            <p className="curiosity">A criptografia assimétrica utiliza amplamente dos números primos e é baseada na Teoria dos Números.</p>
                        </td></tr>
                    </table>
                </li>
                <li className='list'>
                    <div>
                        <img id="img-next"src={next} alt="Item da lista"></img>
                    </div>
                    <table id='table'>
                        <tr><td>
                           <p className="curiosity"> O maior número primo possui quase 25 milhões de dígitos</p>
                        </td></tr>
                    </table>
                </li>
                <li className='list'>
                    <div>
                        <img id="img-next"src={next} alt="Item da lista"></img>
                    </div>
                    <table id='table'>
                        <tr><td>
                            <p className="curiosity">Não há número primo algum que termine em 5, exceto o próprio 5</p>
                        </td></tr>
                    </table>
                </li>
              </ul>
            </div>
        );
}
 
export default Curiosity;