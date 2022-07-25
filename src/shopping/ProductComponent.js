import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductComponent() {
  const [products] = useState([
    { Name: "boat Neckband", Price: 5640.0, Category: "Electronics" },
    { Name: "Nike Casuals", Price: 2549.0, Category: "Footware" },
    { Name: "Mobile", Price: 15999.0, Category: "Electronics" },
    { Name: "Lee Cooper Boot", Price: 3649.0, Category: "Footware" }
  ]);

  //parameter name you are passing must be same as reference name
  const { category } = useParams();

  return (
    <div className="container-fluid">
      <h3>Product List {category}</h3>
      <ul>
        {products
          .filter((product) => product.Category === category)
          .map((product) => (
            <li>{product.Name}</li>
          ))}
      </ul>
      <br />
      <Link to="/categories">Go back to Categories</Link>
    </div>
  );
}
