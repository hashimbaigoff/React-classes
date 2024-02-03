import React from "react";
import Lifecycle1 from "./lifeCycle1";


class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Taheer'
        }
        console.log("This is contructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("This is getDerivedStateFromProps");
        state.name = "Nithin";
        console.log(props,state);
        return null;
    }


    componentDidMount() {
        console.log("This is Didmount");
    }

    render () {
        console.log("This is render");
        return (
            <div>
                <Lifecycle1 />
            </div>
        )
    }
}


export default Lifecycle;