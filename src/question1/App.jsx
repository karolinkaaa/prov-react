// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

function Hobbielist() {
  const [hobbies, setHobbies] = useState([]);
  const [nyHobbie, setNyHobbie] = useState("");
  const handleNyHobbie = () => {
    if (nyHobbie.trim() !== "") {
      setHobbies([...hobbies, nyHobbie]);
      setNyHobbie("");
    }
  };
  const handleTabortHobbie = (index) => {
    const uppdateraHobbie = [...hobbies];
    uppdateraHobbie.splice(index, 1);
    setHobbies(uppdateraHobbie);
  };
  return (
    <div>
      <label htmlFor="hobbies">Vad är dina Hobbies? </label>
      <input
        type="text"
        value={nyHobbie}
        onChange={(e) => setNyHobbie(e.target.value)}
      />
      <button onClick={handleNyHobbie}> Lägg till </button>
      <ul class="list-none">
        {hobbies.map((hobbie, index) => (
          <li key={index}>
            {hobbie}
            <button onClick={() => handleTabortHobbie(index)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Lista med hobbies</h1>
      <Hobbielist />
    </div>
  );
}

export default App;
