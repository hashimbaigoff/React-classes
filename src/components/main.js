
const Main = (props) => {
    return (
        <div>
            <h1>My name is {props.name} and school is {props.school}</h1>
            <span>{props.children}</span>
        </div>
    )
}

export default Main;