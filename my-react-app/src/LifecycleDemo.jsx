import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // This method is called after the component is mounted to the DOM.
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    // This method is called when component props or state change.
    console.log('Component updated');
  }

  componentWillUnmount() {
    // This method is called before the component is unmounted from the DOM.
    console.log('Component will unmount');
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Component with Lifecycle Methods</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;
