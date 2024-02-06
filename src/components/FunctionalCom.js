import React, { useState } from "react";
import PureComp from "./pureComp";


function ParentComponent() {
    console.log("Parent component")

    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Parent Component</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <PureComp count={count}/>
        </div>
    );
}

export default ParentComponent;