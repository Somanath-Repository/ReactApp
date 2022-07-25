import React from "react";

export class Login extends React.Component {
  componentDidMount() {
    alert("Login Component Mounted");
  }

  componentWillUnmount() {
    alert("Login Component Will Unmount");
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" />
          </dd>
        </dl>
      </div>
    );
  }
}

export class Success extends React.Component {
  componentDidMount() {
    alert("Success Component Mounted.");
  }

  componentWillUnmount() {
    alert("Success Component Will Mount.");
  }

  render() {
    return (
      <div>
        <h2>Success</h2>
      </div>
    );
  }
}

export default class LifeCycleDemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      template: ""
    };
  }
  LoginClick() {
    this.setState({
      template: <Login />
    });
  }

  SuccessClick() {
    this.setState({
      template: <Success />
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Home</h1>
        <button
          className="btn btn-primary"
          onClick={this.LoginClick.bind(this)}
        >
          Login
        </button>

        <button
          className="btn btn-primary"
          onClick={this.SuccessClick.bind(this)}
        >
          Success
        </button>
        <h1>{this.state.template}</h1>
      </div>
    );
  }
}
