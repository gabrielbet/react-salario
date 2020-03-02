import React, { useState } from 'react';
import Formulario from './Formulario';
import './App.css';

const App = () => {
  const [salarioDesejado] = useState(0);

  return (
    <div className="App-header">
      <h1>Cálculo de salário com React</h1>
      <Formulario salarioDesejado={salarioDesejado} />
    </div>
  );
}

export default App;
