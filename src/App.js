import { useMemo, useState } from "react";
import "./App.css";
import { bigArray } from "./components/array";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const [items] = useState(bigArray);

  const [change, setChange] = useState(0)

  const selectedItem = useMemo(() => {
    return items.filter((item) => item.isSelected);
  }, [items, change]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <h2>Selected Item: {selectedItem[0]?.id}</h2>
      <button onClick={() => {
        setChange(change+20)
        console.log(change);
        // change+20
      }}>setChange</button>
    </div>
  );
}

export default App;
