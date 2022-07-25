import NetflixRegisterComponent from "./NetflixRegisterComponent";

export default function NetflixMainComponent() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px", textAlign: "center" }}
    >
      <div>
        <h1>Unlimited movies, TV </h1>
        <h3>shows and more.</h3>
        <NetflixRegisterComponent />
      </div>
    </div>
  );
}
