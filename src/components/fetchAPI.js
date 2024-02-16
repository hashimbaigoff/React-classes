import { useEffect, useState } from "react";

function FetchRequest() {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const API  = "https://api.github.com/users/mohammed786";
        const handleAPI = async () => {
            try {
                const response = await fetch(API);
                const json = await response.json();
                setUser(json);
            }catch(err) {

            }
        }
        handleAPI();
    },[]);
    console.log(user, "user", Object.keys(user).length);
    return (
        <div>
            {Object.keys(user).length > 0 && Object.keys(user).map((element,index) => {
                return (
                    <p key={index}> {element +" : "+ user[element]}</p>
                )
            })}
        </div>
    )
}

export default FetchRequest;