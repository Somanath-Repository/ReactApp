import React from "react";

export default class StateManipulationInClassComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Price: 0,
      City: "",
      Stock: false
    };

    this.state = {
      newProduct: {}
    };

    this.HandleNameChange = this.HandleNameChange.bind(this);
    this.HandlePriceChange = this.HandlePriceChange.bind(this);
    this.HandleCityChange = this.HandleCityChange.bind(this);
    this.HandleStockChange = this.HandleStockChange.bind(this);
    this.HandleRegisterClick = this.HandleRegisterClick.bind(this);
  }

  HandleNameChange(event) {
    this.setState({
      Name: event.target.value,
      Price: this.state.Price,
      City: this.state.City,
      Stock: this.state.Stock
    });
  }

  HandlePriceChange(event) {
    this.setState({
      Name: this.state.Name,
      Price: event.target.value,
      City: this.state.City,
      Stock: this.state.Stock
    });
  }

  HandleCityChange(event) {
    this.setState({
      Name: this.state.Name,
      Price: this.state.Price,
      City: event.target.value,
      Stock: this.state.Stock
    });
  }

  HandleStockChange(event) {
    this.setState({
      Name: this.state.Name,
      Price: this.state.Price,
      City: this.state.City,
      Stock: event.target.checked
    });
  }

  HandleRegisterClick() {
    this.setState({
      newProduct: {
        Name: this.state.Name,
        Price: this.state.Price,
        City: this.state.City,
        Stock: this.state.Stock
      }
    });
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <h3>Register Product</h3>
              <dl>
                <dt>Name:</dt>
                <dd>
                  <input
                    type="text"
                    className="form-control"
                    onKeyUp={this.HandleNameChange}
                  />
                </dd>
                <dt>Price:</dt>
                <dd>
                  <input
                    type="text"
                    className="form-control"
                    onKeyUp={this.HandlePriceChange}
                  />
                </dd>
                <dt>Shipped To :</dt>
                <dd>
                  <select
                    className="form-select"
                    onChange={this.HandleCityChange}
                  >
                    <option>Delhi</option>
                    <option>Vizag</option>
                  </select>
                </dd>
                <dt>Stock:</dt>
                <dd className="form-switch">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={this.HandleStockChange}
                  />
                  Available
                </dd>
              </dl>
              <button
                className="btn btn-primary w-100"
                onClick={this.HandleRegisterClick}
              >
                Register
              </button>
            </div>
            <div className="col-3">
              <h3>Product Details</h3>
              <dl>
                <dt>Name : </dt>
                <dd>{this.state.newProduct.Name}</dd>
                <dt>Price : </dt>
                <dd>{this.state.newProduct.Price}</dd>
                <dt>Shipped To : </dt>
                <dd>{this.state.newProduct.City}</dd>
                <dt>Stock : </dt>
                <dd>
                  {this.state.newProduct.Stock === true
                    ? "Available"
                    : "Out of Stock."}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </>
    );
  }
}
