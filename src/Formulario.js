import React, { useState } from 'react';

// const setSalarioBruto = ({props}) => {
//     DescontoINSS({props})
// }

const DescontoINSS = ({props}) => {
    return props - 100
}

// const [salarioBruto, setSalarioBruto] = useState(0);

const RenderSalarioBruto = () => (
    <input
                type="number"
                name="salarioBruto"
                // onChange={e => setSalarioBruto(e.target.value)}
                > Salário bruto: </input>         
)

// const INSS = () => {
//     return(
//         <form>
//             <label>
//                 Base INSS:
//                 <input disabled type="number" name="baseInss" />
//             </label>
//             <label>
//                 Desconto INSS:
//                 <input disabled type="number" name="descInss" value={DescontoINSS}/>
//             </label>
//         </form>
//     )            
// }

// const IRPF = (salarioBruto) => {
//     return(
//         <form>
//             <label>
//                 Base IRPF:
//                 <input disabled type="number" name="baseIrpf" />
//             </label>
//             <label>
//                 Desconto IRPF:
//                 <input disabled type="number" name="descIrpf" />
//             </label>
//         </form>
//     )            
// }

// const SalarioLiquido = () => {
//     return(
//         <form>
//             <label>
//                 Salário líquido:
//                 <input disabled type="number" name="salarioLiquido" />
//             </label>
//         </form>
//     )            
// }

const Formulario = () => {
    // console.log('create salariobruto: '+ salarioBruto);

        return (
            <form>
                <RenderSalarioBruto />
                {/* <INSS/> */}
                {/* <IRPF/> */}
                {/* <SalarioLiquido/> */}
            </form>
        );
}

export default Formulario;