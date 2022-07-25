import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CategoriesComponent from "./CategoriesComponent";
import DetailsComponent from "./DetailsComponent";
import ElectronicComponent from "./ElectronicsComponent";
import FootwareComponent from "./FootwareComponent";
import HomeComponent from "./HomeComponent";
import NotFoundComponent from "./NotFoundComponent";
import ProductComponent from "./ProductComponent";

const ShoppingIndexComponent = () => {
  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center m-2 p-2">
        <h1>Shopping Online</h1>
      </header>
      <Router>
        <div className="row">
          <div className="col-3">
            <ul className="">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/electronics">Electronics</Link>
              </li>
              <li>
                <Link to="/footware">Footware</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </div>

          <div className="col-9">
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/home" exact component={HomeComponent} />
              <Route
                path="/electronics"
                exact
                component={ElectronicComponent}
              />
              <Route path="/footware" exact component={FootwareComponent} />
              <Route
                path="/details/:id/:name/:price"
                exact
                component={DetailsComponent}
              />
              <Route path="/categories" exact component={CategoriesComponent} />
              <Route
                path="/products/:category"
                exact
                component={ProductComponent}
              />
              <Route path="*" component={NotFoundComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default ShoppingIndexComponent;
