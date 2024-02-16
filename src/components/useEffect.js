import React, { useEffect, useState } from "react";

function useEffectCom() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if(counter > 3) {
            alert("yes it is achieved");
        }
    },[counter]);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)} disabled = {counter === 4}>Increment</button>
        </div>
    )
}

export default useEffectCom;