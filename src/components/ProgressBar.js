import React, { useState, useEffect } from "react";

export default function ProgressBar({ todoList }) {
  const [styleBar, setStyleBar] = useState();

  let elementsDone = 0;
  todoList.map((item) => {
    if (item.completed) {
      elementsDone++;
    }
    return elementsDone;
  });

  const width = Math.floor((elementsDone / todoList.length) * 100) || 0;
  let pos = "center";
  if (width < 30) pos = "end";

  const newStyle = {
    width: `${width}%`,
    justifyContent: pos,
  };
  useEffect(() => {
    console.log("Rerender PB");
    setStyleBar(newStyle);
  }, [todoList]);

  return (
    <div className="progress">
      <div className="progress-done" style={styleBar}>
        <div className="progress-text">
          {elementsDone} of {todoList.length} tasks done ({width}%)
        </div>
      </div>
    </div>
  );
}
