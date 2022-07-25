export default function PrimitiveDataBindingComponent() {
  var Name = "Samsung TV";
  var Price = 34900.0;
  var Stock = true;

  return (
    <div className="container-fluid">
      <h1>Data Binding</h1>
      <dl>
        <dt>Name : </dt>
        <dd>{Name}</dd>
        <dt>Price : </dt>
        <dd>{Price}</dd>
        <dt>Stock : </dt>
        <dd>{Stock == true ? "Availabe." : "Out of Stock."}</dd>
      </dl>
    </div>
  );
}
