import React from "react";


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            nameError: false,
            emailError: false,
            passwordError: false,
            regexName: false,
            regexEmail: false,
            regexPwd: false
        }
    }

    inputHandler = (event) => {
        this.setState({
            name: event.target.value,
            nameError: false
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value,
            emailError: false
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value,
            passwordError: false
        })
    }

    handleSubmit = () => {
        let regName = /^[a-z A-Z]+$/;
        let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!this.state.name) {
            this.setState({
                nameError: true
            })
        } else if (!regName.test(this.state.name)) {
            this.setState({
                regexName: true
            })
        } else {
            this.setState({
                regexName: false
            })
        }
        if (!this.state.email) {
            this.setState({
                emailError: true
            })
        } else if (!regEmail.test(this.state.email)) {
            this.setState({
                regexEmail: true
            })
        } else {
            this.setState({
                regexEmail: false
            })
        }
        if (!this.state.password) {
            this.setState({
                passwordError: true
            })
        } else if (!regPassword.test(this.state.password)) {
            this.setState({
                regexPwd: true
            })
        } else {
            this.setState({
                regexPwd: false
            })
        }

        const payload = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log(payload);
    }


    render() {
        console.log(this.state)
        return (
            <form>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.inputHandler}
                    />&nbsp;
                    {this.state.nameError && <span>Enter your Name</span>}
                    {this.state.regexName && <span>Enter only charecters</span>}
                </div><br />
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={this.emailHandler}
                    />&nbsp;
                    {this.state.emailError && <span>Enter your Email</span>}
                    {this.state.regexEmail && <span>Enter Valid EmailId</span>}
                </div><br />
                <div>
                    <label>Password</label>
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.passwordHandler}
                    />&nbsp;
                    {this.state.passwordError && <span>Enter your Password</span>}
                    {this.state.regexPwd && <span>Enter valid Password</span>}
                </div><br />
                <div>
                    <button type="button" onClick={this.handleSubmit}>Submit!</button>
                </div>
            </form>
        )
    }
}

export default Form;