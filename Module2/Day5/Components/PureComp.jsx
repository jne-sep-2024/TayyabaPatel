import React, { Component } from 'react';

class PureChild extends React.PureComponent {
    render() {
        console.log('PureChild Rendered');
        return <h2>{this.props.message}</h2>;
    }
}

class RegularChild extends Component {
    render() {
        console.log('RegularChild Rendered');
        return <h2>{this.props.message}</h2>;
    }
}

class PureComp extends Component {
    state = {
        message: 'Hello, World!',
        count: 0,
    };

    updateMessage = () => {
        this.setState({ message: 'Hello, React!' }); // Updates message
    };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 })); // Updates count
    };

    render() {
        return (
            <div>
                <button onClick={this.updateMessage}>Update Message</button>
                <button onClick={this.incrementCount}>Increment Count</button>
                <h1>Count: {this.state.count}</h1>
                <PureChild message={this.state.message} />
                <RegularChild message={this.state.message} />
            </div>
        );
    }
}

export default PureComp;
