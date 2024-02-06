import React from "react";
import TableChild from "./TableChild";


class RegComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>This is a heading</h1>
                <p>This is a paragraph</p>
                <table>
                    <tbody>
                        <tr>
                            <TableChild />
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default RegComponent;