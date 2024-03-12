// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

// ej fungerande kod, hann inte göra klart.

import Container from "./container";
import { darkModeProvider } from "./context/darkModeContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <darkModeProvider>
        <Container />
      </darkModeProvider>
    </div>
  );
}

export default App;
