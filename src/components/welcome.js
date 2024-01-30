// import React from "react";

// class Welcome extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             welcomeData: 'Welcome to the parent Element'
//         }
//     }
//     render(){
//         return (
//             <h1>Welcome to parent component {this.props.name}</h1>
//         )
//     }
// }

// class App extends Welcome {
//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         // this.state = {
//         //     child: 'child Comp'
//         // }
//     }
//     render() {
//         console.log(this.state, this.props);
//         return (
//             <h1></h1>
//         )
//     }
// }

// export default App;


// componentWillMount - component life cycle uses only in class component


import React from "react";
import './welcome.css';

class Welcome extends React.Component {

    constructor() {
        super();
        this.state = {
            inputText: 'Dummy',
            data: [
                {
                    id: 1,
                    name: 'Kousar',
                    email: 'kousar@gmail.com',
                    Age: 22
                },
                {
                    id: 2,
                    name: 'Taheer',
                    email: 'taheer@gmail.com',
                    Age: 22
                },
                {
                    id: 3,
                    name: 'Nithin',
                    email: 'nithin@gmail.com',
                    Age: 22
                },
                {
                    id: 4,
                    name: 'Harsha',
                    email: 'harsha@gmail.com',
                    Age: 22
                }
            ]
        }
    }

    txtChange = () => {
        this.setState({
            inputText: 'inputtext'
        })
    }

   

    render() {
        return (
            <div>
                <input type="text" onKeyUp={() => this.txtChange()} />
                <span>{this.state.inputText}</span>



                <h1>Heading1</h1>
                <h1>Heading2</h1>

                <button>Click!</button>


                <button>FetchAPI</button>
                <h1>Output</h1>
            </div>
        )
    }
}


export default Welcome;