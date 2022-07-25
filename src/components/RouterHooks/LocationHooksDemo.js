import { useLocation } from "react-router-dom";

export default function LocationHooksDemo() {
  const location = useLocation();
  return (
    <div className="container-fluid">
      <h2>Home Component</h2>
      <pre>{location.search}</pre>
    </div>
  );
}
