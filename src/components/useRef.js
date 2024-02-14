import React, { useState } from "react";


function UseRefComp() {

    const [ counter, setCounter ] = useState(0);

    const useRef = React.useRef(0);

    const handler = () => {
        useRef.current++;
        setCounter(counter+1);
        console.log("Inside", useRef.current);
    }

    console.log("Outside",useRef.current);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={handler}>Count Click</button>
        </div>
    )
}

export default UseRefComp;