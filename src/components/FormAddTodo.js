import React from "react";
import { useState } from "react";

export default function FormAddTodo({ createNewTask }) {
  const [value, setValue] = useState("");
  const [prio, setPrio] = useState("None");

  function addToDo(event) {
    event.preventDefault();

    if (value.trim()) {
      createNewTask(value, prio);
      setValue("");
    }
  }

  return (
    <form onSubmit={addToDo} className="form-style">
      <input
        className="input-style"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
      <select
        value={prio}
        onChange={(event) => {
          setPrio(event.target.value);
        }}
      >
        <option>None</option>
        <option>High priority</option>
        <option>Medium priority</option>
        <option>Low priority</option>
      </select>
      <button type="submit" className="for-submit">
        Add
      </button>
    </form>
  );
}
