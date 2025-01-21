import { useEffect, useState } from "react";
import Box from "./components/box";

function App() {
  const [number, setNumber] = useState(1);
  const [facts, setFacts] = useState([]);

  const handleSubmit = () => {
    setNumber(number + 1);
  };

  const handleRemoval = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(1);
  };

  useEffect(() => {
    const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${number}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFacts(Array.isArray(data) ? data : [data]); // Ensure array
      })
      .catch((error) => console.error("Error fetching facts:", error));
  }, [number]);

  useEffect(() => {
    console.log("Hello I am running from effects...");
  }, [number]);

  return (
    <>
      <div className="container">
        {facts.map((val, index) => (
          <Box key={index} name={val.text} sub={val.createdAt} />
        ))}
      </div>

      <div className="mybox">
        <b id="number">{number}</b>
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
