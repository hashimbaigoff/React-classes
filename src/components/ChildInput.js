import React, { Component } from 'react';

const ChildInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})
export default ChildInput;
