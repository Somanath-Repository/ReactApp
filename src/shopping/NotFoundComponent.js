export default function NotFoundComponent() {
  return (
    <div className="container-fluid">
      <h1>Page Not Found</h1>
      <p>
        Path <code>{window.location.href}</code> you requested not found.
      </p>
    </div>
  );
}
