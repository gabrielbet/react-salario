import React, { useState } from 'react';

const SalarioBruto = () => {
    return(
        <form>
            <label>
                Salário bruto:
                <input type="number" name="salarioBruto" />
            </label>
        </form>
    )            
}

const INSS = (salarioBruto) => {
    return(
        <form>
            <label>
                Base INSS:
                <input disabled type="number" name="baseInss" />
            </label>
            <label>
                Desconto INSS:
                <input disabled type="number" name="descInss" />
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