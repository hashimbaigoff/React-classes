import React from "react";


class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    inc() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }


    //super() and super(props);

    incrementFiceTimes() {
        this.inc();  
        this.inc();  
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
        this.inc();
    }


    render() {
        return (
            <div>
                <p>count: {this.state.count}</p>
                <button onClick={() => this.inc()}>+</button>&nbsp;&nbsp;
                <button onClick={() => this.dec()}>-</button>
            </div>
        )
    }
}

export default Counter;