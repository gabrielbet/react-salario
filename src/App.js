import React, {Component} from 'react';
import {LabelsInput} from './LabelsInput';
import './App.css';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      
    }
  }

  render() {
    return ( 
      <div className="App">
        <h1>Cálculo de salário com React</h1>
        <LabelsInput />
      </div>
    );
  }
}

export default App;
