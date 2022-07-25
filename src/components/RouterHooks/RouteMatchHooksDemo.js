import { Route, useRouteMatch } from "react-router-dom";

function DetailsComponent() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <p>{`path : ${path}`}</p>
      <p>{`url : ${url}`}</p>
    </div>
  );
}
export default function RouteMatchHooksDemo() {
  return (
    <div className="container-fluid">
      <h2>Route Match Hook</h2>
      <hr />
      <Route exact path="/details/:id/:name">
        <DetailsComponent />
      </Route>
    </div>
  );
}
