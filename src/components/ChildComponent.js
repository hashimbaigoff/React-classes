function ChildComponent(props) {
    const count = 20;
    return (
        <div>
            <p>Count: {props.count}</p>
            <button onClick={() => props.increment(count)}>Increment</button>
        </div>
    )
}

export default ChildComponent;


