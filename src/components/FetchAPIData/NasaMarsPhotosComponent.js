import { useEffect, useState } from "react";

export default function NasaMarsPhotosComponent() {
  const [marsData, setMarsData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
    )
      .then((response) => response.json())
      .then((data) => {
        setMarsData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h3>Mars Rover Photos</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Photo Id</th>
            <th>Photo</th>
            <th>Camera Name</th>
            <th>Rover Name</th>
          </tr>
        </thead>
        <tbody>
          {marsData.photos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  alt="Preview"
                  src={item.img_src}
                  width="200px"
                  height="200px"
                />
              </td>
              <td>{item.camera.full_name}</td>
              <td>{item.rover.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
