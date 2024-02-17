import { useState } from "react";

function useStateO() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        Age: ''
    })

    const handlefirstName = (event) => {
        setUser({
            ...user,
            firstName: event.target.value
        })
    }

    const handlelastName = (event) => {
        setUser({
            ...user,
            lastName: event.target.value
        })
    }
    return(
        <div>
            useState with Objects<br />
            <input type="text" value={user.firstName} onChange={handlefirstName}/>
            <p>firstName: {user.firstName}</p>
            <input type="text" value={user.lastName} onChange={handlelastName}/>
            <p>lastName: {user.lastName}</p>

            <p>{JSON.stringify(user)}</p>
        </div>
    )
}

export default useStateO;