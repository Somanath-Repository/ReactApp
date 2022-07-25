import { useFormik } from "formik";

const validationFunction = (userdetails) => {
  const errors = {};
  if (userdetails.Name === "") {
    errors.Name = "User Name required.";
  }

  if (userdetails.Email.indexOf("@") <= 2) {
    errors.Email = "Invalid Email.";
  }

  if (!userdetails.Mobile.match(/\+91[0-9]{10}/)) {
    errors.Mobile = "Invalid Mobile.";
  }
  return errors;
};

function submitValues(values) {
  alert(JSON.stringify(values));
}

const ValidationDemoComponent = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Mobile: ""
    },
    validate: validationFunction,
    onSubmit: submitValues
  });

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>Name : </dt>
          <dd>
            <input
              type="text"
              name="Name"
              values={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </dd>
          <dd>{formik.errors.Name}</dd>
          <dt>Email : </dt>
          <dd>
            <input
              type="text"
              name="Email"
              values={formik.values.Email}
              onChange={formik.handleChange}
            />
          </dd>
          <dd>{formik.errors.Email}</dd>
          <dt>Mobile : </dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              values={formik.values.Mobile}
              onChange={formik.handleChange}
            />
          </dd>
          <dd>{formik.errors.Mobile}</dd>
        </dl>
        <button className="btn btn-primary"> Register</button>
      </form>
    </div>
  );
};

export default ValidationDemoComponent;
