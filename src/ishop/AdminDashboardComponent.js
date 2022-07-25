import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

export default function AdminDashboardComponent() {
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  const history = useHistory();

  useEffect(() => {
    if (cookies.userid === undefined) {
      history.push("/adminlogin");
    }
  });

  return (
    <div>
      <h2>
        Admin Dashboard - {cookies.userid}
        <button
          className="btn btn-link"
          onClick={() => {
            removeCookie("userid");
            history.push("/adminlogin");
          }}
        >
          SignOut
        </button>
      </h2>
    </div>
  );
}
