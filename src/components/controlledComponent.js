import React, { useState } from "react";

function ControlledCom() {

    const [ inputValue, setInputValue ] = useState('');

    const inputHandler = (event) => {
        setInputValue(event.target.value)

    }
    return (
        <div>
            <input type="text"  name="name" value={inputValue} onChange={inputHandler}/>
            <button>Click</button>
        </div>
    )
}


export default ControlledCom;
