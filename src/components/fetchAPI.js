import { useEffect, useReducer, useState } from "react";
import { useActionData } from "react-router-dom";

function FetchAPI() {

    const [user, setUser] = useState({})

    

    useEffect(() => {

        const API = "https://api.github.com/users/mohammed786";

        const handleAPI = async() => {
            try {
                const response = await fetch(API);
                const json = await response.json();
                setUser(json);
            }catch(err) {

            }
        }
        handleAPI();

    },[]);

    console.log(user, Object.keys(user));

    return (
        <div>
            {Object.keys(user).length > 0 && Object.keys(user).map((element, index) => {
                return (
                    <div key={index}>{element + " : "+user[element]}</div>
                )
            })}
        </div>
    )
}

export default FetchAPI;