import { ErrorMessage, Field, Form, Formik } from "formik";

const FormikValidationComponent1 = () => {
  return (
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Age: 0
      }}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      <Form>
        {(props) => (
          <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
              <dt>User Name : </dt>
              <dd>
                <Field type="text" name="Name"></Field>
              </dd>
              <dd>
                <ErrorMessage name="Name"></ErrorMessage>
              </dd>
              <dt>Email : </dt>
              <dd>
                <Field type="text" name="Email"></Field>
              </dd>
              <dd>
                <ErrorMessage name="Email"></ErrorMessage>
              </dd>
              <dt>Age : </dt>
              <dd>
                <Field type="number" name="Age"></Field>
              </dd>
              <dd>
                <ErrorMessage name="Age"></ErrorMessage>
              </dd>
            </dl>
            <button>Submit</button>
          </div>
        )}
      </Form>
    </Formik>
  );
};
export default FormikValidationComponent1;
