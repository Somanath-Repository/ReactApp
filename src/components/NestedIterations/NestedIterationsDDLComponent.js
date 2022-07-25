export default function NestedIterationsDDLComponent() {
  var categories = [
    { Category: "Electronics", products: ["Samsung TV", "Mobile"] },
    { Category: "Footware", products: ["Nike Casuals", "Lee Cooper Boots"] }
  ];

  return (
    <>
      <div className="conatainer-fluid">
        <h2>Select a Product</h2>
        <select>
          {categories.map((category) => (
            <optgroup key={category.Category} label={category.Category}>
              {category.products.map((product) => (
                <option key={product}>{product}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    </>
  );
}
