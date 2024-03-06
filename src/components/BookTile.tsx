import React from "react";
import axios from "axios";

interface Book {
  id: number;
  cover: string;
  title: string;
  desc: string;
  // Add other properties if needed
}

interface BookTileProps {
  key: number;
  book: Book;
}

const HandleDelete = async (id: number) => {
  try {
    await axios.delete("http://localhost:4000/book/DeleteBook/" + id);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

const BookTile: React.FC<BookTileProps> = ({ book }) => {
  return (
    <div className="flex flex-col items-center justify-around bg-white w-[150px] h-[250px] rounded-sm">
      <div className=" mt-2 bg-gray-400 h-[200px] w-[80%]">
        <div>{book.cover}</div>
      </div>
      <div>
        <div className="flex w-[100%] justify-between px-[20px] mb-5">
          <div className=" text-sm overflow-hidden h-[20px]">{book.title}</div>
        </div>
        <p className="text-center text-xs pb-2">{book.desc}</p>
      </div>
      <div className="">
        <button className="text-sm text-green-400 mx-2">Update</button>
        <button
          onClick={() => HandleDelete(book.id)}
          className="text-sm text-red-400 mx-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookTile;
