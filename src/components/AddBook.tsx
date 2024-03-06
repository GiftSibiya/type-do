import React from "react";

interface Props {}

function AddBook() {
  return (
    <div className="bg-slate-400 h-screen w-screen">
      <input placeholder="Book title"></input>
      <input placeholder="Book Description"></input>
      <input placeholder="Book Cover"></input>
    </div>
  );
}

export default AddBook;
