import React from "react";

export default function FilterChoise({ choiceFilter }) {
  const statusHandler = (event) => {
    choiceFilter(event.target.value);
  };

  return (
    <div className="choice">
      <p>Tasks to display</p>
      <select
        className="dropdown-styles"
        onChange={statusHandler}
        // value={value}
      >
        <option>All</option>
        <option>Done</option>
        <option>Undone</option>
      </select>
    </div>
  );
}
