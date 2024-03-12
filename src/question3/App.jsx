// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return { count, increment, decrement, reset };
}

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Räknare: {count}</h1>
      <button onClick={increment}> Öka </button>
      <button onClick={decrement}> Minska </button>
      <button onClick={reset}> Börja om </button>
    </div>
  );
}

export default App;
