import { useState } from "react";
import "./App.css";
import FilterChoise from "./components/FilterChoise";
import FormAddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [todoList, setTodoList] = useState([
    { text: "zero", id: 0, completed: false, priorityTask: "Medium priority" },
    { text: "one", id: 1, completed: false, priorityTask: "Medium priority" },
    { text: "two", id: 2, completed: true, priorityTask: "Medium priority" },
    { text: "three", id: 3, completed: false, priorityTask: "Medium priority" },
  ]);

  function newTask(text, priorityTask) {
    let rand = Math.random().toString(36).substr(2, 9);

    setTodoList(
      todoList.concat([
        {
          text,
          id: rand,
          completed: false,
          priorityTask,
        },
      ])
    );
  }

  function changeCompleted(id) {
    setTodoList(
      todoList.map((element) => {
        if (element.id === id) {
          element.completed = !element.completed;
        }
        return element;
      })
    );
  }

  function deleteTask(id) {
    let elementToDelete = todoList
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    let newList = todoList.concat();
    newList.splice(elementToDelete, 1);
    setTodoList(newList);
  }

  function choiceFilter(value) {
    console.log(value);
    // let newFilteredList = todoList.slice();
    // if (value === "Done") {
    //   newFilteredList = todoList.filter((item) => item.completed);
    //   console.log(newFilteredList);
    // }
    // if (value === "Undone") {
    //   newFilteredList = todoList.filter((item) => !item.completed);
    //   console.log(newFilteredList);
    // }
    // setTodoList(newFilteredList);
  }

  return (
    <div className="main">
      <div className="backside">
        <div className="title">Write here your tasks</div>

        <div>
          <FormAddTodo createNewTask={newTask} />

          <FilterChoise choiceFilter={choiceFilter} />
        </div>

        <TodoList todoList={todoList} changeCompleted={changeCompleted} deleteTask={deleteTask} />
        <ProgressBar todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
