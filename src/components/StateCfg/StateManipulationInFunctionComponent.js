import { useState } from "react";

export default function StateManipulationInFunctionComponent() {
  const [product, setProduct] = useState({
    Name: "",
    Price: 0,
    City: "",
    Stock: false
  });
  const [newProduct, setNewProduct] = useState({});

  function HandleNameChange(event) {
    setProduct({
      Name: event.target.value,
      Price: product.Price,
      City: product.City,
      Stock: product.Stock
    });
  }

  function HandlePriceChange(event) {
    setProduct({
      Name: product.Name,
      Price: event.target.value,
      City: product.City,
      Stock: product.Stock
    });
  }
  function HandleCityChange(event) {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: event.target.value,
      Stock: product.Stock
    });
  }
  function HandleStockChange(event) {
    setProduct({
      Name: product.Name,
      Price: product.Price,
      City: product.City,
      Stock: event.target.checked
    });
  }

  function HandleRegisterClick() {
    setNewProduct(product);
  }
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
                  onKeyUp={HandleNameChange}
                />
              </dd>
              <dt>Price:</dt>
              <dd>
                <input
                  type="text"
                  className="form-control"
                  onKeyUp={HandlePriceChange}
                />
              </dd>
              <dt>Shipped To :</dt>
              <dd>
                <select className="form-select" onChange={HandleCityChange}>
                  <option>Delhi</option>
                  <option>Vizag</option>
                </select>
              </dd>
              <dt>Stock:</dt>
              <dd className="form-switch">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={HandleStockChange}
                />
                Available
              </dd>
            </dl>
            <button
              className="btn btn-primary w-100"
              onClick={HandleRegisterClick}
            >
              Register
            </button>
          </div>
          <div className="col-3">
            <h3>Product Details</h3>
            <dl>
              <dt>Name : </dt>
              <dd>{newProduct.Name}</dd>
              <dt>Price : </dt>
              <dd>{newProduct.Price}</dd>
              <dt>Shipped To : </dt>
              <dd>{newProduct.City}</dd>
              <dt>Stock : </dt>
              <dd>
                {newProduct.Stock === true ? "Available" : "Out of Stock."}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
