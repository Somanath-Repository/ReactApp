import { useParams } from "react-router-dom";

export default function DetailsComponent() {
  const { id, name, price } = useParams();

  return (
    <div className="container-fluid">
      <h2>Details</h2>
      <dl>
        <dt>Id</dt>
        <dd>{id}</dd>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>price</dt>
        <dd>{price}</dd>
      </dl>
    </div>
  );
}
