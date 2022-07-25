export default function NonPrimitiveDataBindingComponent() {
  var categories = ["Electronics", "Footware", "Fashion"];
  return (
    <div className="container-fluid">
      <h2>Category List</h2>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>

      <h2>Select a Category</h2>
      <select>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <h2>Select Categories</h2>
      <ul className="list-unstyled">
        {categories.map((category) => (
          <li>
            <input type="checkbox" />
            <span key={category}>{category}</span>
          </li>
        ))}
      </ul>

      <h2>Category Table</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr>
              <td key={category}>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
