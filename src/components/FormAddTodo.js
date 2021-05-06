import React from "react";
import { useState } from "react";

export default function FormAddTodo({ createNewTask }) {
  const [value, setValue] = useState("");
  const [prio, setPrio] = useState("High priority");

  function addToDo(event) {
    event.preventDefault();

    if (value.trim()) {
      createNewTask(value, prio);
      console.log(prio);
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
        <option>High priority</option>
        <option>Medium priority</option>
        <option>Low priority</option>
        <option>None</option>
      </select>
      <button type="submit" className="for-submit">
        Add
      </button>
    </form>
  );
}
