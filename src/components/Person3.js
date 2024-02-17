import { useState } from "react";
import UpdatedComponent from "./HOC";

function Person3({money, handleInc}) {
    return(
        <div>
            <p>Kousar has money: {money}</p>
            <button onClick={handleInc}>Increase Money</button>
        </div>
    )
}

export default UpdatedComponent(Person3);