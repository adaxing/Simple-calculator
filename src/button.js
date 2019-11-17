import React, { Component } from 'react';
import './css/button.css';

export default class Button extends Component {
      render() {
            return (
                  <div className='buttons'>
                        <button id='clear'  value='AC' style={{background:'rgb(172,57,57)', width:160}}>AC</button>
                        <button id='divide' value='/' className='operators'>/</button>
                        <button id='multiply' value='*' className='operators'>X</button>
                        <button id='seven' value='7'>7</button>
                        <button id='eight' value='8'>8</button>
                        <button id='nine' value='9'>9</button>
                        <button id='subtract' value='-' className='operators'>-</button>
                        <button id='four' value='4'>4</button>
                        <button id='five' value='5'>5</button>
                        <button id='six' value='6'>6</button>
                        <button id='add' value='+' className='operators'>+</button>
                        <button id='one' value='1'>1</button>
                        <button id='two' value='2'>2</button>
                        <button id='three' value='3'>3</button>
                        <button id='equals'value='=' style={{background: 'rgb(0,68,102)', position:'absolute',height: 130}}>=</button>
                        <button id='zero' value='0' style={{width: 160}}>0</button>
                        <button id='decimal' value='.'>.</button>
                  </div>
            )
      }
}