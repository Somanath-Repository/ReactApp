export default function ObjectDataBindingComponent() {
  var product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  };

  return (
    <div className="container-fluid">
      <h2>Product Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>
        <dt>Price</dt>
        <dd>{product.price}</dd>
        <dt>Privew</dt>
        <dd>
          <img
            alt="Product Image"
            src={product.image}
            height="200"
            width="300"
          />
        </dd>
        <dt>Rating</dt>
        <dd>
          <span className="bi bi-star-fill text-warning"></span>
          {product.rating.rate}
        </dd>
      </dl>
    </div>
  );
}
