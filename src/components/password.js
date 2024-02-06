import React, { useState } from "react";


const PasswordValid = () => {

    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');
    const [regError, setRegError] = useState('');


    const passwordHandler = (event) => {
        setPassword(event.target.value)
        setPassError('')
    }

    const validate = () => {
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(password === '') {
            setPassError('Enter password');
        }else if(!regPassword.test(password)) {
            setRegError('Enter password correctly');
        }else {
            setRegError('');
        }
    }

    return (
        <>
        <input type="password" value={password} onChange={passwordHandler}/>
        <span>{passError}</span>
        <span>{regError}</span>
        <br /><br />
        <button onClick={validate}>Validate</button>
        </>
    )
}

export default PasswordValid;