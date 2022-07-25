import { useEffect, useState } from "react";

function SuccessComponent() {
  useEffect(() => {
    //component mount action
    alert("Success Component mounted.");
    return () => {
      //component unmount action
      alert("Success Component unmounted.");
    };
  });
  return <h2>Login Success</h2>;
}

function ErrorComponent() {
  useEffect(() => {
    //component mount action
    alert("Error Component mounted.");
    return () => {
      //component unmount action
      alert("Error Component unmounted.");
    };
  });
  return <h2>Login Failed</h2>;
}

export default function LifeCyclePhasesInFunctionComponent() {
  const [msg, setMsg] = useState("");

  function SuccessClick() {
    setMsg(<SuccessComponent />);
  }

  function ErrorClick() {
    setMsg(<ErrorComponent />);
  }
  return (
    <div className="container-fluid">
      <h2>Main Component</h2>
      <button onClick={SuccessClick}>Success</button>
      <button onClick={ErrorClick}>Invalid</button>
      <hr />
      <div>
        <h2>{msg}</h2>
      </div>
    </div>
  );
}
