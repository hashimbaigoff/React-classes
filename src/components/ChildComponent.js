// function ChildComponent(props) {
//     console.log("Child Component");
//     const count = 20;
//     return (
//         <div>
//             <h1>Child Component</h1>
//             <p>Count: {props.count}</p>
//             <button onClick={() => props.increment(count)}>Increment</button>
//         </div>
//     )
// }

// export default ChildComponent;

import React,{Component, PureComponent} from "react";


class ChildComponent extends PureComponent {
    render() {
        console.log("Child Component");
        return (
            <div>Child Component {this.props.name}</div>
        )
    }
}

export default ChildComponent;




