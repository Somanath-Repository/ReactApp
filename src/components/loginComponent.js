export function LoginComponent() {
  const title = "User Login...";

  return (
    <div>
      <h2>{title}</h2>
      <dl>
        <db>User Name</db>
        <dl>
          <input type="text" />
        </dl>
        <db>Password</db>
        <dl>
          <input type="password" />
        </dl>
      </dl>
      <button>Login</button>
    </div>
  );
}
