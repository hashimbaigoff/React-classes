import React from "react";
import Lifecycle1 from "./lifeCycle1";


class UpdatingChild extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Taheer'
        }
        console.log("This is contructor");
    }

    componentWillUpdate() {
        console.log("Componentwill update");
    }

    shouldComponentUpdate(newState, newProps) {
        console.log("should component update");
        return true;
    }

   componentDidUpdate() {
    console.log("This is a componentDidupdate");
   }

    render () {
        console.log("This is render");
        return (
            <div>
                Child component
            </div>
        )
    }
}


export default UpdatingChild;