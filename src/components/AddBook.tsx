import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

interface Props {}

function AddBook() {
  const navigate = useNavigate();
  const [newBook, setNewBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });
  const HandleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/book/AddBook", newBook);
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  const HandleChange = (e: any) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(newBook);

  return (
    <div className="bg-slate-400 h-screen w-screen">
      <input
        onChange={HandleChange}
        placeholder="Book title"
        name="title"
      ></input>
      <input
        onChange={HandleChange}
        placeholder="Book Description"
        name="desc"
      ></input>
      <input
        onChange={HandleChange}
        placeholder="Book Cover"
        name="cover"
      ></input>
      <button onClick={HandleClick}>Add Book</button>
    </div>
  );
}

export default AddBook;
