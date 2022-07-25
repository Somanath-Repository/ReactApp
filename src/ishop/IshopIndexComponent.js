import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import AdminDashboardComponent from "./AdminDashboardComponent";
import AdminLoginComponet from "./AdminLoginComponent";
import AdminRegisterComponent from "./AdminRegisterComponent";
import HomeComponent from "./HomeComponent";

export default function IshopIndexComponent() {
  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-danger m-2 p-2">
        <h1>Ishop - Smart Shopping</h1>
      </header>
      <Router>
        <section className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="home">Home</Link>
              </li>
              <li>
                <Link to="admindashboard">Admin Dashboard</Link>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <Route path="/" exact component={HomeComponent} />
            <Route path="/home" exact component={HomeComponent} />
            <Route
              path="/adminregister"
              exact
              component={AdminRegisterComponent}
            />
            <Route path="/adminlogin" exact component={AdminLoginComponet} />
            <Route
              path="/admindashboard"
              exact
              component={AdminDashboardComponent}
            />
          </div>
        </section>
      </Router>
    </div>
  );
}
