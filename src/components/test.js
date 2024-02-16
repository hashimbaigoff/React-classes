import React, { useState } from "react";


function Test() {

    const [ counter, setCounter ] = useState(0);

    const createref = React.createRef();
    const useref = React.useRef();

    if(createref.current === null) {
        createref.current = counter;
    }

    if(useref.current === undefined) {
        useref.current = counter;
    }


    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            <p>Useref: {useref.current}</p>
            <p>Createref: {createref.current}</p>
        </div>
    )
}

export default Test;
