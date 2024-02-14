import React, { useState } from "react";

function Person2() {

    const [money, setMoney] = useState(0);
    const handleInc = () => {
        setMoney(money+1);
    }
    return (
        <div>
            <p>Nithin Money: {money}</p>
            <button onClick={handleInc}>Increment</button>
        </div>
    )
}

export default Person2;