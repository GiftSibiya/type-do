import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

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
  const HandleCancel = () => [navigate("/Home")];

  const HandleChange = (e: any) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(newBook);

  return (
    <>
      <NavBar />
      <div className="  flex flex-col justify-center items-center bg-slate-400 h-screen w-screen">
        <h2 className="font-bold text-[30px]">Add A New Book </h2>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          placeholder="Book title"
          name="title"
        ></input>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          placeholder="Book Description"
          name="desc"
        ></input>
        <input
          className="my-1 w-[300px] p-2 rounded-[10px] border-[2px] border-gray-500"
          onChange={HandleChange}
          placeholder="Book Price"
          name="cover"
        ></input>
        <div className="my-2">
          <button
            onClick={HandleCancel}
            className="bg-red-800 p-2 rounded-md w-[100px] mx-2 text-white font-bold"
          >
            Cancel
          </button>
          <button
            onClick={HandleClick}
            className="bg-green-800 p-2 rounded-md w-[100px] mx-2 mx-2 text-white font-bold"
          >
            Add Book
          </button>
        </div>
      </div>
    </>
  );
}

export default AddBook;
