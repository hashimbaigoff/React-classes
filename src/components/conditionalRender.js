import React from "react";


class Conditional extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false
        }
    }


    render() {
        const message = this.state.loggedIn ? <h1>Welcome Taheer</h1> : <h1>Welcome Guest</h1>
        return (
            <div>
               {message}
            </div>
        )
    }
}


export default Conditional;