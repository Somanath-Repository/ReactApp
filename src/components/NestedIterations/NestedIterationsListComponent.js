export default function NestedIterationsComponent() {
  var categories = [
    { Category: "Electronics", products: ["Samsung TV", "Mobile"] },
    { Category: "Footware", products: ["Nike Casuals", "Lee Cooper Boots"] }
  ];

  return (
    <>
      <div className="conatainer-fluid">
        <h2>Nested Iterations</h2>
        <ol>
          {categories.map((category) => (
            <li>
              {category.Category}
              <ul>
                {category.products.map((product) => (
                  <li>{product}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
