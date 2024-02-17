import React, { useState } from "react";


function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [money, setMoney] = useState(100);

        const handleInc = () => {
            setMoney(money + 20);
        }
        return <OriginalComponent money={money} handleInc={handleInc}/>
    }
    return NewComponent;
}

export default UpdatedComponent;