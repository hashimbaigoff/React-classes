import React from "react";

function unControlledComp() {

    const inputValue = React.createRef();

    const inputHandler = () => {
        console.log(inputValue.current.value);
    }
    

    return (
        <div>
            <input type="text" ref={inputValue}/>
            <button onClick={inputHandler}>Click</button>
        </div>
    )
}

export default unControlledComp;