// 6. Users i Redux (3p)
// Skapa en komponent som lägger till användare i en lista i Redux.
// Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
// Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.

import { useState } from "react";
import "./usersSlice";

function Userlist() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState([]);
  const handleNewUser = () => {
    if (newUser.trim() !== "") {
      setNewUser([...users, newUser]);
      setNewUser("");
    }
  };

  return (
    <div>
      <label htmlFor="Användare"> Lägg till ny användare: </label>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button onClick={handleNewUser}> Lägg till </button>
      <ul class="list-none">
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Lista med användare </h1>
      <Userlist />
    </div>
  );
}

export default App;
