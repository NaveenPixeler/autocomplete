// src/components/Autocomplete.tsx
import React, { useState, useEffect, useRef } from "react";
import Trie from "../trie/Trie";
import "./Autocomplete.css";

interface AutocompleteProps {
  words: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ words }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const trieRef = useRef(new Trie());

  useEffect(() => {
    words.forEach((word) => trieRef.current.insert(word));
  }, [words]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      setSuggestions(trieRef.current.startsWith(value));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
