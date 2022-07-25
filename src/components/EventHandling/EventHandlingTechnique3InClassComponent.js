import React from "react";

export default class EventHandlingTechnique3InClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Please click Insert button..."
    };
  }

  InsertClick() {
    this.setState({ msg: "Record Inserted." });
  }
  render() {
    return (
      <div className="container-fluid">
        <h2>Event Demo</h2>
        <button onClick={() => this.InsertClick()} className="btn btn-danger">
          Insert
        </button>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}
