// src/App.tsx
import React from "react";
import Autocomplete from "./components/Autocomplete";

const App: React.FC = () => {
  const words = [
    "apple",
    "app",
    "banana",
    "cherry",
    "date",
    "fig",
    "grape",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raisin",
    "strawberry",
    "tangerine",
    "ugli",
    "vanilla",
    "watermelon",
    "xigua",
    "yellowfruit",
    "zucchini",
    "Macbook apple"
  ];

  return (
    <div className="App">
      <h1>Autocomplete Feature</h1>
      <Autocomplete words={words} />
    </div>
  );
};

export default App;
