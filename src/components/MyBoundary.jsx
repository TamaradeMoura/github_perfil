import React from "react";

class MyBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.message
        };
    }

    componentDidCatch(err, errInfo) {
        console.log(err, errInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo deu errado</h1>;
        }

        return this.props.children;
    }
    }

    export default MyBoundary;