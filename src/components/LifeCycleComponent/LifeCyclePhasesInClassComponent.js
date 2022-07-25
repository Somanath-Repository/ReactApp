import React from "react";

class SuccessComponent extends React.Component {
  componentWillMount() {
    alert("Success Component will mount.");
  }

  componentDidMount() {
    alert("Success Component Mounted.");
  }

  componentWillUnmount() {
    alert("Success Component will Unmount.");
  }
  render() {
    return <h2>Login Successful.</h2>;
  }
}

class ErrorComponent extends React.Component {
  componentWillMount() {
    alert("Error Component will mount.");
  }

  componentDidMount() {
    alert("Error Component Mounted.");
  }

  componentWillUnmount() {
    alert("Error Component will Unmount.");
  }
  render() {
    return <h2>Invalid Credentials.</h2>;
  }
}

export default class LifeCyclePhasesInClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdetails: {
        username: "john",
        password: "john@12"
      },
      msg: "",
      formdetails: {
        username: "",
        password: ""
      },
      products: []
    };
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  componentWillMount() {
    this.setState({
      msg: "Provide Credentials."
    });

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data
        })
      );
  }

  handleUserName(e) {
    this.setState({
      formdetails: {
        username: e.target.value,
        password: this.state.userdetails.password
      }
    });
  }

  handlePassword(e) {
    this.setState({
      formdetails: {
        username: this.state.formdetails.username,
        password: e.target.value
      }
    });
  }

  handleLoginCheck() {
    if (
      this.state.userdetails.username === this.state.formdetails.username &&
      this.state.userdetails.password === this.state.formdetails.password
    ) {
      this.setState({
        msg: <SuccessComponent />
      });
    } else {
      this.setState({
        msg: <ErrorComponent />
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>User Details</h1>
        <dl>
          <dt>Username : </dt>
          <dd>
            <input type="text" onChange={this.handleUserName} />
          </dd>
          <dt>Password : </dt>
          <dd>
            <input type="text" onChange={this.handlePassword} />
          </dd>
        </dl>
        <button onClick={this.handleLoginCheck.bind(this)}>Login</button>
        <hr />
        <div>{this.state.msg}</div>
        <hr />
        <hr />
        <ol>
          {this.state.products.map((product) => (
            <li>{product.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}
