import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

function UpdateBook() {
  const navigate = useNavigate();
  const location = useLocation();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const HandleChange = (e: any) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const bookId = location.pathname.split("/")[2];

  console.log(bookId);

  const HandleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:4000/book/UpdateBook/" + bookId, book);
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center h-[400px] w-[300px] ">
        <h1>Update this Book</h1>
        <input
          onChange={HandleChange}
          placeholder="Title"
          name="title"
          value={book.title}
          className="border-gray-800 border-[1px] w-[200px] my-2  p-2  "
        ></input>
        <input
          placeholder="Description"
          name="desc"
          onChange={HandleChange}
          value={book.desc}
          className="border-gray-800 border-[1px] w-[200px] my-2  p-2  "
        ></input>
        <input
          placeholder="Cover"
          name="cover"
          onChange={HandleChange}
          value={book.cover}
          className="border-gray-800 border-[1px]  w-[200px] my-2 p-2  "
        ></input>
        <button
          onClick={HandleUpdate}
          className="w-[200px] bg-orange-500 text-white p-2 "
        >
          Update Details
        </button>
      </div>
    </div>
  );
}

export default UpdateBook;
