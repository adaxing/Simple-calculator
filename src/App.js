import React, { Component } from 'react';
import Button from './button';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: '',
      preValue: [],
      showValue: '0',
      formula: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    var numValue = ['1','2','3','4','5','6','7','8','9'];
    var operator = ['/', '*', '-', '+'];
    if (numValue.includes(e.target.value)) {
      if (this.state.formula.includes('=')) {
        this.setState({
          showValue: this.state.curValue.concat(e.target.value),
          curValue: this.state.curValue.concat(e.target.value),
          formula: [].concat(e.target.value)
        })
      } else {
        this.setState({
          showValue: this.state.curValue.concat(e.target.value),
          curValue: this.state.curValue.concat(e.target.value),
          formula: this.state.formula.concat(e.target.value)
        }) 
      }
    }
    if (operator.includes(e.target.value)) {
      if (this.state.formula.includes('=')) { 
        this.setState({
            preValue: this.state.preValue.concat(this.state.showValue),
            formula: [].concat(this.state.showValue, e.target.value)
          })
      } else if (operator.includes(this.state.showValue)){
          this.state.formula.pop()
          this.setState({
            showValue: e.target.value,
            formula: this.state.formula.concat(e.target.value)
          })
      } else {
          this.setState({
            curValue:'',
            preValue: this.state.preValue.concat(this.state.curValue),
            showValue: e.target.value,
            formula: this.state.formula.concat(e.target.value)
        })
      }
    } 

    if (e.target.value === 'AC') {
      this.setState({
          curValue: '',
          preValue: [],
          showValue: '0',
          formula: []
        })
    }

    if (e.target.value === '0') {
      if (this.state.curValue === '') {
        this.setState({
          curValue: '',
        })
      } else {
          this.setState({
            showValue: this.state.curValue.concat(e.target.value),
            curValue: this.state.curValue.concat(e.target.value),
            formula: this.state.formula.concat(e.target.value)       
          })
      }
    }

    if (e.target.value === '.') {
      if (! this.state.curValue.includes('.')) {
        this.setState({
          showValue: this.state.curValue.concat(e.target.value),
          curValue: this.state.curValue.concat(e.target.value),
          formula: this.state.formula.concat(e.target.value)       
        })
      } 
      if(this.state.curValue === ''){
        this.setState({
          showValue: ('0').concat(e.target.value),
          curValue: this.state.curValue.concat(e.target.value),
          formula: this.state.formula.concat('0',e.target.value)        
        })
      }
    }
    if (e.target.value === '=') {
      var operators =  this.state.formula.filter(i => operator.includes(i));
      var finalAnswer = '';
      for (var i=0; i<this.state.preValue.length; i++) {
        finalAnswer = finalAnswer.concat(this.state.preValue[i],operators[i])
      }
      console.log('CUR',this.state.curValue)
      console.log('PRE',this.state.preValue)
      console.log('FOR',this.state.formula)
      console.log('FIN', finalAnswer)
      finalAnswer = eval(finalAnswer.concat(this.state.curValue)).toString();
      this.setState({
        showValue: finalAnswer,
        formula: this.state.formula.concat('=', finalAnswer),
        curValue: '',
        preValue: []
      })
    } 
  };
        
  render() {
    return (
      <div className='App'>
        <div className='calculator'>
          <div className='formulaScreen'>{this.state.formula}</div>
          <div id='display' className='displayScreen'>{this.state.showValue}</div>
          <div onClick={this.handleClick}>
            <Button />
          </div>
        </div>
        <div className='author'>
          <p>Designed and Coded By</p>
          <a href='https://github.com/adaxing/Simple-calculator' target='_blank' rel='noopener noreferrer'>Ada xing</a>
        </div>
      </div>
    );
  }
}

export default App;
