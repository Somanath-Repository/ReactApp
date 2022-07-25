import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function AdminRegisterComponent() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      UserId: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: ""
    },
    onSubmit: (values) => {
      //      axios.post("http://127.0.0.1:8080/postadmin", values);
      alert("Registered Successfully.");
      history.push("/adminlogin");
    }
  });

  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const verifyUserId = (e) => {
    for (var user of users) {
      if (user.username === e.target.value) {
        console.log("if" + user.username + " " + e.target.value);
        setMsg("User ID taken - Try Another.");
        break;
      } else {
        console.log("else" + user.username + " " + e.target.value);
        setMsg("");
      }
    }
  };
  return (
    <div>
      <h2>Admin Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserId : </dt>
          <dd>
            <input
              type="text"
              name="UserId"
              onKeyUp={verifyUserId}
              value={formik.values.UserId}
              onChange={formik.handleChange}
            />
          </dd>
          <dd className="text-danger">{msg}</dd>
          <dt>FirstName : </dt>
          <dd>
            <input
              type="text"
              name="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>LastName : </dt>
          <dd>
            <input
              type="text"
              name="LastName"
              value={formik.values.LastName}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Email : </dt>
          <dd>
            <input
              type="text"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
            />
          </dd>
          <dt>Password : </dt>
          <dd>
            <input
              type="text"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
            />
          </dd>
        </dl>
        <button className="btn btn-primary">Register</button>
        <br />
        <br />
        <Link to="/adminlogin">Existing User?</Link>
      </form>
    </div>
  );
}
