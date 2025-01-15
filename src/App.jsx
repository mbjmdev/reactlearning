import { useState } from "react";
import Box from "./components/box";

function App() {
  const [number, setNumber] = useState(0);

  const handleSubmit = () => {
    setNumber(number + 1);
  };

  const handleRemoval = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };

  return (
    <>
      <div className="container">
        <Box name="Jino" sub="I am a dev" />
        <Box name="Sherin" sub="I am a student" />
        <Box name="Ram" sub="I am a professional" />
      </div>

      <div className="mybox">
        <b>{number}</b>
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Add Click </button>
        <br></br>
        <br></br>
        <button onClick={handleReset}>Reset</button>
        <br></br>
        <br></br>
        <button onClick={handleRemoval}>Remove Click</button>
      </div>
    </>
  );
}

export default App;
