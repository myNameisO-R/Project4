import { useState } from "react";
import { initialColors } from "./lib/colors";
import "./App.css";
import { uid } from "uid";
//import useLocalStorageState from "use-local-storage-state";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    const newColors = [...colors, { id: uid(), ...newColor }];
    console.log(newColors);
    setColors(newColors);
  };
  //setColors();

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />
      {colors.length === 0 ? (
        <p>Add colors</p>
      ) : (
        colors.map((color) => <color key={color.id} color={color} />)
      )}
    </>
  );
}

export default App;
