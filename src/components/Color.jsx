import { SketchPicker } from "react-color";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const hostName = process.env.REACT_APP_HOST_NAME
  //creating state to store our color and also set color using onChange event for sketch picker
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: 144,
    g: 43,
    b: 0,
    a: 0.5,
  });

  function ChangeCollor(event) {
    event.preventDefault();
    const red = `red=${sketchPickerColor.r}`;
    const green = `green=${sketchPickerColor.g}`;
    const blue = `blue=${sketchPickerColor.b}`;
    const brightness = `brightness=${Math.floor(
      sketchPickerColor.a * 2.5 * 100
    )}`;

    const path = `${hostName}color?${red}&${green}&${blue}&${brightness}`;
    axios
      .post(path)
      .then((val) => {
        console.log(val);
      })
      .catch((er) => {
        console.log(er);
      });
  }
  useEffect(() => {
    document.title = "Color"
  }, []);

  return (
    <div
      className="Div-container"
      style={{ display: "grid", gap: "20px", justifyContent: "space-around" }}
    >
      <div className="sketchpicker">
        <SketchPicker
          width="300px"
          onChange={(color) => {
            const bg = document.querySelector(".Div-container").style
            bg.backgroundColor = `rgb(${sketchPickerColor.r}, ${sketchPickerColor.g}, ${sketchPickerColor.b}, ${sketchPickerColor.a})`;
            setSketchPickerColor(color.rgb);
          }}
          color={sketchPickerColor}
        />
      </div>

      <form onSubmit={ChangeCollor} method="post">
        <button type="submit" className="button">
          Change
        </button>
      </form>
    </div>
  );
}

export default App;
