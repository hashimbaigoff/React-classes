import React from "react";
import ChildComponent from './ChildComponent';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'nithin'
        }
        console.log(this.props);
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log(this.state, this.props);
    }
    render() {
        return(
            <div>Child {this.props.name}</div>
        )
    }
}

export default Child;