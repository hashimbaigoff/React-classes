import React from "react";


class Listrendering extends React.Component {
    constructor() {
        super();
        this.state = {
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

    render() {
        return (
            <div>
                {this.state.data.map((element) => <Person data={element} />)}
            </div>
        )
    }
}

function Person(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.data.name}</h1>
            <h1>{props.data.email}</h1>
            <h1>{props.data.Age}</h1>
            <hr></hr>
        </div>
    )
}



export default Listrendering;