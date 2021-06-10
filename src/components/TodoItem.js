import React from "react";
import doneButtonImg from "../img/done.png";
import undoneButtonImg from "../img/close.png";

export default function TodoItem({ item, changeCompleted, deleteTask }) {
  const styles = ["for-item "];
  const forPriority = ["priority "];

  if (item.completed) {
    styles.push("done");
    forPriority.push("done");
  }

  switch (item.priorityTask) {
    case "High priority":
      forPriority.push("red-text");
      break;
    case "Medium priority":
      forPriority.push("yellow-text");
      break;
    case "Low priority":
      forPriority.push("green-text");
      break;
    default:
      forPriority.push("none-text");
      break;
  }

  return (
    <div className="task-item">
      <div className={styles.join(" ")}> {item.text}</div>
      <div className="priority-img">
        <div className={forPriority.join(" ")}>{item.priorityTask}</div>
        <img
          className="images-item"
          src={doneButtonImg}
          alt="done"
          height="20px"
          width="20px"
          onClick={() => {
            changeCompleted(item.id);
          }}
        />
        <img
          className="images-item"
          src={undoneButtonImg}
          alt="delete"
          height="19px"
          width="19px"
          onClick={() => {
            deleteTask(item.id);
          }}
        />
      </div>
    </div>
  );
}
