import React, { useState } from 'react';
import KeyboardButtons from '../component/KeyboardButtons'
import './styles.css'
function Calculator(){
    const buttonsNames=['7','8','9','/','4','5','6','+','1','2','3','-','0','.','=','*']
    const operationsArray=['/','+','-','*']
    const [operation,setOperation]=useState(0)
    function typeOperation(e){
        if(operation&&operation!=='erro')
         setOperation(operation+e.target.value)
         else if(!operationsArray.includes(e.target.value)&&e.target.value!=='.')
         setOperation(e.target.value)
    }
    function handleOperation(){
        try {
            setOperation(eval(operation))
        } catch (e) {
            setOperation('erro')
            }
        }
    function limpar(){
        setOperation(0)
    }
    return(
        <div id="container">
            <div className="calculator">
                <div className="top">
                    <button
                     onClick={limpar}
                     className='cleanButton'>C</button>
                    <div className="operation">{operation}</div>
                </div>
                <div className="keyboard">
                    {buttonsNames.map(item=>{
                        return (<KeyboardButtons 
                            key={item}
                            className={operationsArray.includes(item) ? 'operator' : 'number'}
                            value={item}
                            onClick={item==='=' ? handleOperation:typeOperation}
                            />)}
                        )}
                </div>
            </div>
        </div>
    )
}
export default Calculator
