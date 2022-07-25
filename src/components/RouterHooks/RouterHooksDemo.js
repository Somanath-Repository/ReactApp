import { Route, useHistory } from "react-router-dom";

function SuccessComponent() {
  return <h1>Success Component</h1>;
}

function InvalidComponent() {
  return <h1>Invalid Component</h1>;
}

const RouterHooksDemo = () => {
  const history = useHistory();

  function HandleLogin() {
    var pwd = "Admin";
    if (pwd === "Admin") {
      history.push("success");
    } else {
      history.push("invalid");
    }
  }
  return (
    <div className="container-fluid">
      <h2>Dynamic Navigation</h2>
      <button onClick={HandleLogin}>Login</button>
      <hr />
      <Route exact path="/success">
        <SuccessComponent />
      </Route>
      <Route exact path="/invalid">
        <InvalidComponent />
      </Route>
    </div>
  );
};

export default RouterHooksDemo;
