import React, { useState } from "react";

function Namevalidation() {
    const [inputText, setInputText] = useState('');
    const [emptyError, setEmptyError] = useState('');
    const [regError, setregError] = useState('');


    const inputHandler = (event) => {
        setInputText(event.target.value);
        setEmptyError('')
    }

    const validation = () => {
        let regName = /^[a-z A-Z]+$/;
        if(inputText === '') {
            setEmptyError('Enter your Name')
        }else if(!regName.test(inputText)) {
            setregError("Enter only charecters");
        }else {
            setregError('');
        }
    }

    return (
        <div>
            <input type="text" name="name" value={inputText} onChange={inputHandler} />
            <span>{emptyError}</span>
            <span>{regError}</span>
            <br /><br />
            
            <button onClick={validation}>Submit</button>
        </div>
    )
}

export default Namevalidation;