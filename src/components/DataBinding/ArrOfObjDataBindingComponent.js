export default function ArrOfObjDataBindingComponent() {
  var products = [
    { name: "Samsung TV", price: 34000.55, Stock: true },
    { name: "Nike Casuals", price: 4000.43, Stock: false }
  ];

  return (
    <>
      <div className="container-fluid">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.Stock == true ? "Available" : "Out of stock"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
