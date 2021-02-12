import React from 'react';
import './Digit.css'
const Digit = (props) => {
    return (
        <div className="digit" style={ { borderColor: props.color} }>
            <h1 style={ { color: props.color} }>
                { props.value < 10 ? `0${props.value}` : props.value }
            </h1>
        </div>
    )
}

export default Digit;