import { useEffect, useReducer } from "react";

//create initial state
const initialState = { count: 0 };

//create reducer which is a function
function reducer(state, action) {
  switch (action.type) {
    case "like":
      return { count: state.count + 1 };
    case "dislike":
      return { count: state.count - 1 };
    default:
      return "Unknown Action.";
  }
}

export default function ReducerDemoComponent() {
  //access reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    alert("Reducer Component mounted.");
    return () => {
      alert("Reducer Componet unmounted.");
    };
  }, []);

  return (
    <div className="container-flued">
      <h2>Reducer Demo - {state.count} Like(s)</h2>
      <button onClick={() => dispatch({ type: "like" })}>Like</button>
      <button onClick={() => dispatch({ type: "dislike" })}>Dislike</button>
    </div>
  );
}
