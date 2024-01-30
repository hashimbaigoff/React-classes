import React from "react";
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    

    inc = (count) => {
        console.log(count,"parent");
        this.setState({
            count: this.state.count+count
        })
    }

    render() {
        return (
            <div>
                <ChildComponent count={this.state.count} increment={this.inc} />
            </div>
        )
    }
}

export default ParentComponent;