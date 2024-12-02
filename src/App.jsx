import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { uid } from "uid";
import ColorForm from "./Components/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  function handleSubmitColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
    console.log("Colors, colors");
  }

  return (
    <div className="app">
      <h1>Theme Creator</h1>
      <colorForm onSubmitColor={handleSubmitColor} />
      <div className="color-container">
        {" "}
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
