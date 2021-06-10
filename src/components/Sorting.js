import React from "react";

export default function Sorting({ makeSort }) {
  const funcSort = (typeSort) => {
    makeSort(typeSort);
  };

  return (
    <div className="sorting">
      <div>Sort by: </div>
      <button onClick={() => funcSort("ByDate")} className="sorting-btn">
        Date
      </button>
      <button onClick={() => funcSort("ByAsc")} className="sorting-btn">
        Asc
      </button>
      <button onClick={() => funcSort("ByDesc")} className="sorting-btn">
        Desc
      </button>
    </div>
  );
}
