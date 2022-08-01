import React from 'react'
import './styles.css'
function KeyboardButtons(props){
    return(
        <button 
        className={`${props.className} keyboardbuttons`}
        onClick={props.onClick}
        value={props.value}
        >
            {props.value}
        </button>
    )
}
export default KeyboardButtons