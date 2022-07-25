export default function NetflixHeaderComponent() {
  return (
    <div className="d-flex justify-content-between p-3">
      <div style={{ fontSize: "50px", color: "red" }}>NETFLIX</div>
      <div>
        <div className="input-group">
          <select className="input-group-text">
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="btn btn-danger ms-3">Signin</button>
        </div>
      </div>
    </div>
  );
}
