import React from "react";


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            select: '',
            userError: false
        }
    }

    inputHandler = (event) => {
        this.setState({
            username: event.target.value,
            userError: false
        })
    }

    selectHandler = (event) => {
        this.setState({
            select: event.target.value
        })
    }

    callSubmit = (e) => {
        e.preventDefault();
        this.state.username === '' && this.setState({
            userError: true
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.callSubmit}>
                    <label>UserName:</label>
                    <input
                        name="name"
                        onChange={(event) => this.inputHandler(event)}
                        onKeyUp={(event) => this.inputHandler(event)}
                        value={this.state.username}
                    /><span>{this.state.userError && "Enter UserName"}</span>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


// validation Name, Email, password

export default Form;