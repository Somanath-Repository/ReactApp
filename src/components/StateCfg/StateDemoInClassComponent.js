import React from "react";

export default class StateDemoInClassComponent extends React.Component {
  //state must be defined at the time of class initialisation
  //it is cfg in component constructor.
  constructor(props) {
    //in class component derieved class cons. must have a super call.
    super(props);

    //state in class component is cfg by implementing "state" obj of "React.Component" of base class.
    this.state = {
      title: "Product details",
      product: {
        Name: "Nike Casuals",
        Price: 3400.55,
        Photo: "images/shirt.jpg"
      },
      categories: ["Electronics", "Footware", "Fashion"]
    };
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1>{this.state.title}</h1>
          <dl>
            <dt>Name : </dt>
            <dl>{this.state.product.Name}</dl>
            <dt>Price : </dt>
            <dl>{this.state.product.Price}</dl>
            <dt>Photo : </dt>
            <dl>
              <img
                alt="Preview"
                src={this.state.product.Photo}
                height="200"
                width="200"
              />
            </dl>
          </dl>

          <h1>Select a category</h1>
          <select>
            {this.state.categories.map((category) => (
              <option> {category} </option>
            ))}
          </select>
        </div>
      </>
    );
  }
}
