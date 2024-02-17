function Button(props) {
    return(
        <>
        <button className='btn btn-success rounded-pill px-3'>{props.txt?props.txt:'Button'}</button>
        </>
    )
}

export default Button;