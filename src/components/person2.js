import { useState } from "react";
import UpdatedComponent from "./HOC";

function Person2({money, handleInc}) {
    return(
        <div>
            <p>Nithin has money: {money}</p>
            <button onClick={handleInc}>Increase Money</button>
        </div>
    )
}

export default UpdatedComponent(Person2);