import React, { useEffect, useState } from "react";

function useEffectCom() {

    const [ counter, setCounter ] = useState(0)

   //syntax
   useEffect(() => {
    console.log(counter);
   },[counter]);

    return(
        <div>
            counter: {counter}<br /><br />
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </div>
    )
}

export default useEffectCom;