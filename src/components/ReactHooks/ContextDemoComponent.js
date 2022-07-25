import React, { useContext, useState } from "react";

//create context Memory outside of funtion to access globally
var userDetailsContext = React.createContext(null);

export default function ContextDemoComponent() {
  const [newUserdetails, setNewUserdetails] = useState({
    username: "",
    email: ""
  });
  const [userdetails, setUserdetails] = useState({
    username: "",
    email: ""
  });

  function handleUserName(event) {
    setNewUserdetails({
      username: event.target.value,
      email: newUserdetails.email
    });
  }

  function handleEmail(event) {
    setNewUserdetails({
      username: newUserdetails.username,
      email: event.target.value
    });
  }

  function handleLogin() {
    setUserdetails({
      username: newUserdetails.username,
      email: newUserdetails.email
    });
  }

  return (
    //assign the value to the context memory at main component level
    <userDetailsContext.Provider value={userdetails}>
      <div
        className="container-fluid"
        style={{ height: "800px", backgroundColor: "lightyellow" }}
      >
        <h1>User Login</h1>
        <dl>
          <dt>User Name : </dt>
          <dd>
            <input type="text" onChange={handleUserName} />
          </dd>
          <dt>Email : </dt>
          <dd>
            <input type="email" onChange={handleEmail} />
          </dd>
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </dl>
        <h2>Main Component - User : {userdetails.username}</h2>
        <HomeComponent />
      </div>
    </userDetailsContext.Provider>
  );
}
function HomeComponent() {
  //accessing context Memory at any component
  var userData = useContext(userDetailsContext);
  return (
    <div className="bg-danger text-white p-2">
      <h2>Home Component - {userData.username}</h2>
      <NavbarComponent />
    </div>
  );
}

function NavbarComponent() {
  var userDetails = useContext(userDetailsContext);
  return (
    <div className="btn-toolbar bg-dark justify-content-between">
      <div className="btn-group">
        <h3>Navbar</h3>
      </div>
      <div className="btn-group">{userDetails.email}</div>
    </div>
  );
}
