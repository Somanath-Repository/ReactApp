export default function EventDemoFunctionComponent() {
  function InsertClick(SyntheticEvent) {
    for (var property in SyntheticEvent.target) {
      document.write(property + "</br>");
    }
  }

  return (
    <div className="container-fluid">
      <h2>Event Demo</h2>
      <button
        id="btnInsert"
        onClick={InsertClick}
        name="insert"
        className="btn btn-primary"
      >
        Insert
      </button>
    </div>
  );
}
