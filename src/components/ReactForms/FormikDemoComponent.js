import { useFormik } from "formik";

export default function FormikDemoComponent() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      city: "",
      stock: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });

  return (
    <div className="container-fluid">
      <h2>Register Product</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Name: </dt>
          <dd>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Price: </dt>
          <dd>
            <input
              type="number"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Shipped To: </dt>
          <dd>
            <select name="city" onChange={formik.handleChange}>
              <option value="Delhi">Delhi</option>
              <option value="Vizag">Vizag</option>
            </select>
          </dd>
          <dt>Stock: </dt>
          <dd className="form-switch">
            <input
              type="checkbox"
              name="stock"
              className="form-check-input"
              checked={formik.values.stock}
              onChange={formik.handleChange}
            />
            Available
          </dd>
        </dl>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
