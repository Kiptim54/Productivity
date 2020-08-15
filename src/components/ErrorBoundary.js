import React, { Fragment } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error('this is the error', error);
        this.setState(error);
    }

    render() {
        // TODO: error not actually displaying when needed
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Fragment>
                    <h1 className="errorMessage">Something went wrong.</h1>;
                    <p>{this.state.error}</p>
                </Fragment>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
