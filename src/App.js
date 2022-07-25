import { BrowserRouter } from "react-router-dom";
import RouteMatchHooksDemo from "./components/RouterHooks/RouteMatchHooksDemo";
import "./styles.css";

export default function App() {
  return (
    <div>
      {/* when we go for routing use <BrowserRouter/> */}
      <BrowserRouter>
        <RouteMatchHooksDemo />
      </BrowserRouter>
    </div>
  );
}
