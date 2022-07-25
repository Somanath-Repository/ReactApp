
export default function NestedIterationsLocalFileComponent() {
  var products = [
    {
      name: "JBL Speaker",
      Price: 4600.5,
      Photo: 'images/speaker.jpg'
    },
    { name: "Nike Casuals", Price: 2200.5, Photo: "images/shirt.jpg" }
  ];

  return (
    <>
      <div class="container-fluid">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Preview</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <td>{product.name}</td>
                <td>{product.Price}</td>
                <td><img alt = "Preview" src = {product.Photo}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
