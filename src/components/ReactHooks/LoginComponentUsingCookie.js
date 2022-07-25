import { useState } from "react";
import { useCookies } from "react-cookie";

export default function LoginComponentUsingCookie() {
  //create cookie
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);
  const [userdetails, setUserdetails] = useState({
    UserName: "",
    Password: ""
  });

  function handleUserName(event) {
    setUserdetails({
      UserName: event.target.value,
      Password: userdetails.Password
    });
  }

  function handlePassword(event) {
    setUserdetails({
      UserName: userdetails.UserName,
      Password: event.target.value
    });
  }

  function handleLogin() {
    //set cookies key and value
    setCookie("username", userdetails.UserName, { path: "/" });
    alert("Cookie created.");
  }

  function handleSignOut() {
    removeCookie("username");
  }
  return (
    <div className="container-fluid">
      <h2>
        User Login - {cookies.username}
        <button onClick={handleSignOut} className="btn btn-link">
          SignOut
        </button>
      </h2>
      <dl>
        <dt>Username : </dt>
        <dd>
          <input type="text" onChange={handleUserName} />
        </dd>
        <dt>Password : </dt>
        <dd>
          <input type="password" onChange={handlePassword} />
        </dd>
      </dl>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
