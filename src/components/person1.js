import { useState } from "react";
import UpdatedComponent from "./HOC";

function Person1({money, handleInc}) {
    return(
        <div>
            <p>Taheer has money: {money}</p>
            <button onClick={handleInc}>Increase Money</button>
        </div>
    )
}

export default UpdatedComponent(Person1);

