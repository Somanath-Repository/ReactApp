import { useState } from "react";

export default function ReactFormDemo1() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [city, setCity] = useState("");
  const [stock, setStock] = useState(false);

  function submitClicked() {
    document.write(
      `Name : ${name}<br/>Price : ${price}<br/>City : ${city}<br/>Stock : ${
        stock === true ? "Availabe" : "Out of Stock"
      }`
    );
  }
  return (
    <div className="container-fluid">
      <h2>Register Product</h2>
      <form onSubmit={submitClicked}>
        <dl>
          <dt>Name: </dt>
          <dd>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </dd>
          <dt>Price: </dt>
          <dd>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </dd>
          <dt>Shipped To: </dt>
          <dd>
            <select onChange={(e) => setCity(e.target.value)}>
              <option value="Delhi">Delhi</option>
              <option value="Vizag">Vizag</option>
            </select>
          </dd>
          <dt>Stock: </dt>
          <dd className="form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              checked={stock}
              onChange={(e) => setStock(e.target.checked)}
            />
            Available
          </dd>
        </dl>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
