import { useState } from "react";

export default function DynamicStyleChangeInFunctionComponent() {
  const [backcolor, setBackcolor] = useState("");
  const [textcolor, setTextcolor] = useState("");
  const [alignment, setAlignment] = useState("");

  const HandleBackColorChange = (event) => {
    alert("back-color : " + event.target.value);
    setBackcolor(event.target.value);
  };

  function HandleTextColorChange(event) {
    alert("text-color : " + event.target.value);
    setTextcolor(event.target.value);
  }

  const HandleAlignmentChange = (event) => {
    alert("align-text : " + event.target.value);
    setAlignment(event.target.value);
  };

  return (
    <div className="container-fluid">
      <h3>Select Styles</h3>
      <dl>
        <dt>Background Color : </dt>
        <dd>
          <select onChange={HandleBackColorChange}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
        </dd>

        <dt>Text Color : </dt>
        <dd>
          <select onChange={HandleTextColorChange}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
        </dd>

        <dt>Allignment : </dt>
        <dd>
          <input
            type="radio"
            onChange={HandleAlignmentChange}
            name="align"
            value="left"
          />
          left
          <input
            type="radio"
            onChange={HandleAlignmentChange}
            name="align"
            value="center"
          />
          center
          <input
            type="radio"
            onChange={HandleAlignmentChange}
            name="align"
            value="right"
          />
          right
        </dd>
      </dl>
      <h1
        style={{
          backgroundColor: backcolor,
          color: textcolor,
          textAlign: alignment
        }}
      >
        Style Binding In React
      </h1>
    </div>
  );
}
