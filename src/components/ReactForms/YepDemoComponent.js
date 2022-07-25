import { useFormik } from "formik";
import * as yup from "yup";

const YepDemoComponet = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Age: 0
    },
    validationSchema: yup.object({
      Name: yup
        .string()
        .required("User name required.")
        .min(4, "Name is too short....")
        .max(10, "Name too long..."),
      Age: yup.number().required("Age Required."),
      Email: yup.string().required("Email Required.").email("Invalid Email.")
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    }
  });
  return (
    <div className="container-fluid">
      <form>
        <h2>Register User</h2>
        <dl>
          <dt>Name : </dt>
          <dd>
            <input type="text" {...formik.getFieldProps("Name")} />
          </dd>
          <dd className="text-danger">
            {formik.touched.Name && formik.errors.Name
              ? formik.errors.Name
              : null}
          </dd>
          <dt>Email : </dt>
          <dd>
            <input
              type="text"
              name="Email"
              {...formik.getFieldProps("Email")}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Email && formik.errors.Email
              ? formik.errors.Email
              : null}
          </dd>
          <dt>Age : </dt>
          <dd>
            <input type="text" name="Age" {...formik.getFieldProps("Age")} />
          </dd>
          <dd className="text-danger">
            {formik.touched.Age && formik.errors.Age ? formik.errors.Age : null}
          </dd>
        </dl>
        <button className="btn btn-primary" disabled={!formik.isValid}>
          Register
        </button>
      </form>
    </div>
  );
};

export default YepDemoComponet;
