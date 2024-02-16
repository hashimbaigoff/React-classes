import React from "react";

function UncontrolledComU() {

    const input = React.useRef();
    
    const buttonHandler = () => {
        console.log(input.current.value);
    }
    return (
        <div>
            <input type="text" ref={input}/>
            <button onClick={buttonHandler}>Click!</button>
        </div>
    )
}

export default UncontrolledComU;