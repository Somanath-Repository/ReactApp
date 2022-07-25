import "../Netflix/NetflixIndex.css";
import NetflixHeaderComponent from "./NetflixHeaderComponent";
import NetflixMainComponent from "./NetflixMainComponent";

export default function NetflixIndexComponent() {
  return (
    <div className="backimage" style={{ width: "100%", height: "700px" }}>
      <div>
        <NetflixHeaderComponent />
      </div>
      <div className="backcolor">
        <NetflixMainComponent />
      </div>
    </div>
  );
}
