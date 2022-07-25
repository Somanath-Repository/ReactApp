import React from "react";

export default class StateManipulationInClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: ""
    };

    //The default state of a class component is not accessible to any method in the class
    //we have to bind the method with class in order to set state.
    //binding the UpdateName method to current class memory
    this.UpdateName = this.UpdateName.bind(this);
  }

  UpdateName(event) {
    console.log(event.target.value);
    //for setting new values to state obj
    this.setState({ UserName: event.target.value });
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <h3>Registration User</h3>
          User Name : <input type="text" onBlur={this.UpdateName} />
          <div>
            <p> Hello ! {this.state.UserName}</p>
          </div>
        </div>
      </>
    );
  }
}
