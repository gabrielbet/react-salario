import React, { useState } from 'react';

const setSalarioBruto = ({props}) => {
    return salarioBruto = props
}

const DescontoINSS = ({props}) => {
    return props - 100
}

const SalarioBruto = () => {
    return(
        <form>
            <label>
                Salário bruto:
                <input
                type="number"
                name="salarioBruto"
                onChange={e => setSalarioBruto(e.target.value)}
                />
            </label>
        </form>
    )            
}

const INSS = (salarioBruto) => {
    return(
        <form>
            <label>
                Base INSS:
                <input disabled type="number" name="baseInss" value={SalarioBruto}/>
            </label>
            <label>
                Desconto INSS:
                <input disabled type="number" name="descInss" value={DescontoINSS}/>
            </label>
        </form>
    )            
}

const IRPF = (salarioBruto) => {
    return(
        <form>
            <label>
                Base IRPF:
                <input disabled type="number" name="baseIrpf" />
            </label>
            <label>
                Desconto IRPF:
                <input disabled type="number" name="descIrpf" />
            </label>
        </form>
    )            
}

const SalarioLiquido = () => {
    return(
        <form>
            <label>
                Salário líquido:
                <input disabled type="number" name="salarioLiquido" />
            </label>
        </form>
    )            
}

const Formulario = ({ salarioDesejado }) => {
    const [salarioBruto, setSalarioBruto] = useState('');

        return (
            <>
                <SalarioBruto/>
                <INSS/>
                <IRPF/>
                <SalarioLiquido/>
            </>
        );
}

export default Formulario;