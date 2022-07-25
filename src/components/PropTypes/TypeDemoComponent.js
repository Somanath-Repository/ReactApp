import PropTypes from "prop-types";

export default function TypeDemoComponent(props) {
  return (
    <div className="container-fluid">
      <dl>
        <dt>Name : </dt>
        <dd>{props.Name}</dd>
        <dt>Price : </dt>
        <dd>{props.Price}</dd>
      </dl>
    </div>
  );
}

TypeDemoComponent.propTypes = {
  Name: PropTypes.string,
  Price: PropTypes.number
};

export function ProductIndexComponent() {
  return (
    <div>
      <TypeDemoComponent Name={1200} Price="abc" />
    </div>
  );
}
