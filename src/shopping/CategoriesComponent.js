import { useState } from "react";
import { Link } from "react-router-dom";

export default function CategoriesComponent() {
  const [categories] = useState(["Electronics", "Footware"]);
  return (
    <div className="container-fluid">
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li>
            <Link to={"products/" + category}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
