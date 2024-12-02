import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
