import React from "react";
import Lifecycle1 from "./lifeCycle1";
import UpdatingChild from "./updatingChild";


class UpdatingPhase extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Taheer'
        }
        console.log("This is contructor");
    }

    change = () => {
        this.setState({
            name: 'Harsha'
        })
    }

    componentWillUpdate() {
        console.log("Componentwill update");
    }


   componentDidUpdate() {
    console.log("This is a componentDidupdate");
   }

    render () {
        console.log("This is render");
        return (
            <div>
                {this.state.name}
                <button onClick={this.change}>Change</button>
                <UpdatingChild />
            </div>
        )
    }
}


export default UpdatingPhase;