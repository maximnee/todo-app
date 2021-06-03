import { useState, useEffect } from "react";
import "./App.css";
import FilterChoise from "./components/FilterChoise";
import FormAddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList";
import ProgressBar from "./components/ProgressBar";

//*
//!
// [
//   {
//     text: "zero",
//     id: 0,
//     completed: false,
//     priorityTask: "Medium priority",
//     date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
//   },
//   {
//     text: "one",
//     id: 1,
//     completed: false,
//     priorityTask: "Medium priority",
//     date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
//   },
//   {
//     text: "two",
//     id: 2,
//     completed: true,
//     priorityTask: "Medium priority",
//     date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
//   },
//   {
//     text: "three",
//     id: 3,
//     completed: false,
//     priorityTask: "Medium priority",
//     date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
//   },
// ];

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filt, setFilt] = useState("All");
  const [filteredList, setFilteredList] = useState([]);

  function newTask(text, priorityTask, today) {
    let rand = Math.random().toString(36).substr(2, 9);

    setTodoList(
      todoList.concat([
        {
          text,
          id: rand,
          completed: false,
          priorityTask,
          today,
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

  function filterHandler() {
    switch (filt) {
      case "Done":
        setFilteredList(todoList.filter((item) => item.completed === true));
        break;
      case "Undone":
        setFilteredList(todoList.filter((item) => item.completed === false));
        break;
      default:
        setFilteredList(todoList);
        break;
    }
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    createLocalStorage();
  }, [todoList, filt]);

  const createLocalStorage = () => {
    localStorage.setItem("todoItem", JSON.stringify(todoList));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("todoItem" === null)) {
      localStorage.setItem("todoItem", JSON.stringify([]));
    } else {
      setTodoList(JSON.parse(localStorage.getItem("todoItem")));
    }
  };

  return (
    <div className="main">
      <div className="backside">
        <div className="title">Write here your tasks</div>

        <div>
          <FormAddTodo createNewTask={newTask} />

          <FilterChoise choiceFilter={setFilt} />
        </div>

        <TodoList todoList={filteredList} changeCompleted={changeCompleted} deleteTask={deleteTask} />
        <ProgressBar todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
