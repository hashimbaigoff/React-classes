import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }

    static getDerivedStateFromError(error) {
        return { error: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                   <h2>Something went wrong</h2>
                   <button>Cick to redirect home page</button>
                </div>
            )
        }
        return this.props.children;
    }
}



export default ErrorBoundary;