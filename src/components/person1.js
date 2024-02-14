import React, { useState } from "react";

function Person1() {

    const [money, setMoney] = useState(0);
    const handleInc = () => {
        setMoney(money+1);
    }
    
    return (
        <div>
            <p>Taheer Money: {money}</p>
            <button onClick={handleInc}>Increment</button>
        </div>
    )
}

export default Person1;