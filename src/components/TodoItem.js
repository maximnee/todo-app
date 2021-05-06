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

  if (item.priorityTask === "High priority") forPriority.push("red-text");
  if (item.priorityTask === "Medium priority") forPriority.push("yellow-text");
  if (item.priorityTask === "Low priority") forPriority.push("green-text");
  if (item.priorityTask === "None") forPriority.push("none-text");

  return (
    <div className="task-item">
      <div className={styles.join(" ")}>{item.text}</div>
      <div className="priority-img">
        <div className={forPriority.join(" ")}>{item.priorityTask}</div>
        <img
          className="images-item"
          src={doneButtonImg}
          alt="abc"
          height="20px"
          width="20px"
          onClick={() => {
            changeCompleted(item.id);
          }}
        />
        <img
          className="images-item"
          src={undoneButtonImg}
          alt="abc"
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
