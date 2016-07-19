import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button className="increment" onClick={() => this.increment()}>Increment</button>
        <button className="decrement" onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

/*
export default class App extends React.Component {
  render() {
    return <p>Hello World!</p>;
  }
}
*/

