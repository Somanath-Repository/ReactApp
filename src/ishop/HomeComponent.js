import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div>
      <h2>Shopping Home</h2>
      <div>
        <Link to="/adminlogin">Admin Login</Link>
        <span>|</span>
        <Link to="/adminregister">Admin Register</Link>
      </div>
    </div>
  );
}
