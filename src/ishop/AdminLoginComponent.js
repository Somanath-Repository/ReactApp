import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useHistory } from "react-router-dom";

export default function AdminLoginComponet() {
  const [users, setUsers] = useState([]);
  const [userdetails, setUserdetails] = useState({ UserId: "", Password: "" });
  const [errMsg, setErrMsg] = useState("");
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    for (var user of users) {
      //      if(user.userId === userdetails.UserId && user.Password === userdetails.Password){
      if (user.username === userdetails.UserId) {
        setErrMsg("");
        history.push("/admindashboard");
        setCookie("userid", userdetails.UserId, { path: "/" });
        break;
      } else {
        setErrMsg("Invalid Credentials");
      }
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <dl>
          <dt>UserId: </dt>
          <dd>
            <input
              type="text"
              value={userdetails.UserId}
              onChange={(e) => {
                setUserdetails({
                  UserId: e.target.value,
                  Password: userdetails.Password
                });
              }}
            />
          </dd>
          <dt>Password: </dt>
          <dd>
            <input
              type="password"
              value={userdetails.Password}
              onChange={(e) => {
                setUserdetails({
                  UserId: userdetails.UserId,
                  Password: e.target.value
                });
              }}
            />
          </dd>
        </dl>
        <button className="btn btn-primary" onClick={handleLoginClick}>
          Login
        </button>
        <br />
        <Link to="/adminregister">New User?</Link>
        <h2 className="text-center text-danger">{errMsg}</h2>
      </form>
    </div>
  );
}
