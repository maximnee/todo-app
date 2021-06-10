import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, changeCompleted, deleteTask }) {
  return (
    <ul>
      {todoList.map((item) => {
        // console.log(item);
        return <TodoItem item={item} key={item.id} changeCompleted={changeCompleted} deleteTask={deleteTask} />;
      })}
    </ul>
  );
}
