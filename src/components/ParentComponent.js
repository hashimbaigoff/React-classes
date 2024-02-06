import React from "react";
import ChildComponent from './ChildComponent';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Taheer'
        }
    }
    change = () => {
        this.setState({
            name: this.state.name+'!'  
        })
    }
    render() {
        console.log("Parent Component");
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.change}>Change</button>
                <ChildComponent name={this.state.name}/>
            </div>
        )
    }
}


export default Parent;