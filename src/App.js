import { useState } from "react";
import "./App.css";
import FilterChoise from "./components/FilterChoise";
import FormAddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { text: "ноль", id: 0, completed: false, priorityTask: "Medium priority" },
    { text: "один", id: 1, completed: false, priorityTask: "Medium priority" },
    { text: "два", id: 2, completed: false, priorityTask: "Medium priority" },
    { text: "три", id: 3, completed: false, priorityTask: "Medium priority" },
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
    console.log("Вы нажали на кнопку done с id " + id);
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
    // let newFilteredList = todoList;
    // if (value === "All") {
    //   newFilteredList = todoList;
    //   console.log(filteredList);
    // }
    // if (value === "Done") {
    //   newFilteredList = todoList.filter((item) => item.completed);
    //   console.log(filteredList);
    // }
    // if (value === "Undone") {
    //   newFilteredList = todoList.filter((item) => !item.completed);
    //   console.log(filteredList);
    // }
    // setFilteredList(newFilteredList);
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
      </div>
    </div>
  );
}

export default App;
