import React, {useState, useEffect} from 'react';
import {Salario} from './Salario';
import './App.css';

const App = () => {

  const [salario, setSalario] = useState(new Salario(0));
  const [salarioRequerido, setSalarioRequerido] = useState(5000);
  const [maisSalarioBruto, setMaisSalarioBruto] = useState(false);

  const handleClick = () => {
    console.log('Clicado');
    setMaisSalarioBruto(false);
    setSalario(new Salario(Number(salarioRequerido)))
    setMaisSalarioBruto(true);
  };

  const CalculoSalarioReverso = () => {
    if (salarioRequerido > salario.salarioLiquido){
      setTimeout( () => {
        setSalario(new Salario(Number(salario.salarioBruto) + 0.01))
      },1);
    }else{
      setMaisSalarioBruto(false);
    }
  };

  useEffect(() => {
    if (maisSalarioBruto) {
      CalculoSalarioReverso();
    }

    return () => {};
  }, [salario, maisSalarioBruto]);

  return (
    <div>
      <form>
        <label>Salário Bruto:</label>
        <input
          value={salario.salarioBruto}
          onChange={e => setSalario(new Salario(Number(e.target.value)))}
          placeholder="Salário Bruto"
          type="number"
          name="salarioBruto"
          minLength={0}
          required
        />
        <label>Base INSS:</label>
        <input
          disabled
          value={"R$ " + salario.baseINSS}
          // onChange={e => setSalarioBruto(e.target.value)}
          placeholder="Base INSS"
          type="text"
          name="baseINSS"
        />
        <label>Desconto INSS:</label>
        <input
          disabled
          value={"R$ " + salario.descontoINSS}
          // onChange={e => setSalarioBruto(e.target.value)}
          placeholder="Desconto INSS"
          type="text"
        />
        <label>Base IRPF:</label>
        <input
          disabled
          value={"R$ " + salario.baseIRPF}
          // onChange={e => setSalarioBruto(e.target.value)}
          placeholder="Base IRPF"
          type="text"
        />
        <label>Desconto INSS:</label>
        <input
          disabled
          value={"R$ " + salario.descontoIRPF}
          // onChange={e => setSalarioBruto(e.target.value)}
          placeholder="Desconto IRPF"
          type="text"
        />
        <label>Salário líquido:</label>
        <input
          disabled
          value={"R$ " + salario.salarioLiquido}
          // onChange={e => setSalarioLiquido(e.target.value)}
          placeholder="Salario Liquido"
          type="text"
        />      
        <label>Salário líquido desejado:</label>
        <input
          value={salarioRequerido}
          onChange={e => setSalarioRequerido(Number(e.target.value))}
          placeholder="Salario líquido desejado"
          type="number"
        />     
        <button
        type="button"
        onClick={e => handleClick()}
        >
        Calcular salário bruto correspondente</button>
      </form>
    </div>
  );
}

export default App;
