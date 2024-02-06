import React, { useState } from "react";

function PureComp(props) {
    console.log("child component");
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Child Component</h1>
            <h2>Parent count: {props.count}</h2>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count+1)}>INcrement</button>
        </div>
    )
}

export default React.memo(PureComp);