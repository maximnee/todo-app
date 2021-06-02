import React from "react";
import { useState } from "react";

export default function FilterChoise({ choiceFilter }) {
  const [value, setValue] = useState("All");

  choiceFilter(value);

  return (
    <div className="choice">
      <p>Tasks to display</p>
      <select
        className="dropdown-styles"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      >
        <option>All</option>
        <option>Done</option>
        <option>Undone</option>
      </select>
    </div>
  );
}
