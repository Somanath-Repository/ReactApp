import { useInsertionEffect, useState } from "react";

export default function KeyDemoComponent() {
  const [users] = useState([
    { UserName: "john" },
    { UserName: "john12" },
    { UserName: "john_nit" },
    { UserName: "david" }
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [pwdMessage, setPwdMessage] = useState("");
  const regExp = /(?=.*[A-Z])\w{4,10}/;

  function VerifyUserName(event) {
    for (var user of users) {
      if (user.UserName === event.target.value) {
        setUserMessage("User Name Taken - Try Another");
        setIsValid(false);
        break;
      } else {
        setUserMessage("User Name Available.");
        setIsValid(true);
        break;
      }
    }
  }

  function NameBlur(event) {
    setUserMessage("");
  }

  function VerifyPassword(event) {
    if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.which >= 65 && event.which <= 90)
    ) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }

  function checkPasswordStrength(event) {
    if (event.target.value.match(regExp)) {
      setPwdMessage("Strong Password");
    } else {
      if (event.target.value.length < 4) {
        setPwdMessage("Poor Password");
      } else {
        setPwdMessage("Weak Password");
      }
    }
  }

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>UserName : </dt>
        <dd>
          <input type="text" onKeyUp={VerifyUserName} onBlur={NameBlur} />
        </dd>
        <dd className={isValid === true ? "text-success" : "text-danger"}>
          {userMessage}
        </dd>
        <dt></dt>
        <dd>
          <input
            type="password"
            onKeyUp={checkPasswordStrength}
            onKeyPress={VerifyPassword}
          />
        </dd>
        <dd className={showWarning === true ? "d-block" : "d-none"}>
          <span className="bi bi-exclamation-triangle-fill"></span>Caps ON
        </dd>
        <dd>{pwdMessage}</dd>
      </dl>
    </div>
  );
}
