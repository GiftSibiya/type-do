import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import NavBar from "./NavBar";

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
  const HandleCancel = () => [navigate("/Home")];
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
    <>
      <NavBar />
      <div className="  flex flex-col justify-center items-center bg-slate-400 h-screen w-screen">
        <h2 className="font-bold text-[30px]">Update An Existing Book </h2>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          value={book.title}
          placeholder="Book title"
          name="title"
        ></input>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          placeholder="Book Description"
          value={book.desc}
          name="desc"
        ></input>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          value={book.cover}
          placeholder="Book Price"
          name="cover"
        ></input>
        <div className="my-2">
          <button
            onClick={HandleCancel}
            className="bg-red-800 p-2 rounded-md w-[120px] mx-2 text-white font-bold"
          >
            Cancel
          </button>
          <button
            onClick={HandleUpdate}
            className="bg-green-800 p-2 rounded-md w-[120px] mx-2 mx-2 text-white font-bold"
          >
            Update Book
          </button>
        </div>
      </div>
      {/* ------ */}
    </>
  );
}

export default UpdateBook;
