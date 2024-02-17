import { useState } from "react";

function useStateA() {

    const [ user, setuser ] = useState([1,2,3,4,5]);

    const handleInc = () => {
        setuser([...user, user.length+1])
    }

    return (
        <div>
            UseState with Array
            {user.length > 0 && user.map((element) => {
                return (
                    <div>{element}</div>
                )
            })}<br />
            <button onClick={handleInc}>Add to the user</button>
        </div>
    )
}

export default useStateA;