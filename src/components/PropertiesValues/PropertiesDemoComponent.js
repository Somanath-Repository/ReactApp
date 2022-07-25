import { useState } from "react";

function CardComponent(props) {
  //object destructuring
  const { Name, Price, Photo } = props;

  return (
    <div className="card w-25 m-2">
      <img
        //src={props.Photo}
        src={Photo}
        alt="preview"
        height="200"
        className="card-image-top"
      />
      <div className="card-header" style={{ height: "100px" }}>
        <h2>{props.Name}</h2>
        <p>{props.Price}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary w-100">
          <span className="bi bi-cart4"> </span> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function PropertiesDemoComponent() {
  const [products] = useState([
    { Name: "JBL Speaker", Price: 4599.0, Photo: "images/speaker.jpg" },
    { Name: "Nike Casuals", Price: 3999.0, Photo: "images/shirt.jpg" }
  ]);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <CardComponent
            Name={product.Name}
            Price={product.Price}
            Photo={product.Photo}
          />
        ))}
      </div>
    </div>
  );
}
