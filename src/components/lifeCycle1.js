import React from "react";


class Lifecycle1 extends React.Component {
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
                Child Copmponent for lifecycle
                <input type="text" name=""/><span>imdas</span>
            </div>
        )
    }
}


export default Lifecycle1;