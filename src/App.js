import { useState } from "react";
import "./App.css";
import FilterChoise from "./components/FilterChoise";
import FormAddTodo from "./components/FormAddTodo";
import TodoList from "./components/TodoList";
import ProgressBar from "./components/ProgressBar";

//*
//!

function App() {
  const [todoList, setTodoList] = useState([
    {
      text: "zero",
      id: 0,
      completed: false,
      priorityTask: "Medium priority",
      date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
    },
    {
      text: "one",
      id: 1,
      completed: false,
      priorityTask: "Medium priority",
      date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
    },
    {
      text: "two",
      id: 2,
      completed: true,
      priorityTask: "Medium priority",
      date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
    },
    {
      text: "three",
      id: 3,
      completed: false,
      priorityTask: "Medium priority",
      date: "Fri May 21 2021 23:15:49 GMT+0300 (Восточная Европа, летнее время)",
    },
  ]);

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

  function choiceFilter(choiseFilt) {
    console.log(choiseFilt);
  }

  // const filter_map = {
  //   All: () => true,
  //   Done: (item) => !item.completed,
  //   Undone: (item) => item.completed,
  // };
  // const filter_names = Object.keys(filter_map);
  // console.log(filter_names);

  return (
    <div className="main">
      <div className="backside">
        <div className="title">Write here your tasks</div>

        <div>
          <FormAddTodo createNewTask={newTask} />

          <FilterChoise choiceFilter={choiceFilter} />
          <div className="sorting">
            <div>Sort by: </div>
            <button className="sorting-btn">Date</button>
            <button className="sorting-btn">Asc</button>
            <button className="sorting-btn">Desc</button>
          </div>
        </div>

        <TodoList todoList={todoList} changeCompleted={changeCompleted} deleteTask={deleteTask} />
        <ProgressBar todoList={todoList} />
      </div>
    </div>
  );
}

export default App;
