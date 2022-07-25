export function BsLoginComponent() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="border border-2 border-primary rounded rounded-3 p-4">
          <h2>
            <i className="bi bi-file-person"></i>User Login
          </h2>
          <dl>
            <dt> User Name :</dt>
            <dd>
              {" "}
              <input type="text" className="form-control" />{" "}
            </dd>
            <dt> Password :</dt>
            <dd>
              {" "}
              <input type="password" className="form-control" />{" "}
            </dd>
          </dl>
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </div>
    </>
  );
}
