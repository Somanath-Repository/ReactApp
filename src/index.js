import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import App from "./App"; //for normal React concept
import IshopIndexComponent from "./ishop/IshopIndexComponent"; //for react proj.

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <IshopIndexComponent />
  </StrictMode>
);
