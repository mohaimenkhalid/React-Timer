import React from 'react'
import Digit from "./Digit/Digit";

const CountDown = (props) => {
    return (
        <div className="d-flex">
            <Digit color="palegreen" value={ props.time.min } />
            <Digit color="skyblue" value={ props.time.sec } />
            <Digit color="salmon" value={ props.time.milisec } />
        </div>
    )
}

export default CountDown;