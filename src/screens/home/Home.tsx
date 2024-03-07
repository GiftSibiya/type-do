// IMPORT DEPENDENCIES //
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookTile from "../../components/BookTile";
import { useNavigate } from "react-router";
import NavBar from "../../components/NavBar";

function Home() {
  // HOOKS //
  const [books, setBooks] = useState<Book[]>([]);

  const navigate = useNavigate();

  // AXIOS REQUEST BOOKS
  useEffect(() => {
    const FetchAllBooks = async () => {
      try {
        const bookGet = await axios.get<Book[]>("http://localhost:4000/book/");
        console.log(bookGet);
        setBooks(bookGet.data);
      } catch (error) {
        console.log(error);
      }
    };
    FetchAllBooks();
  }, []);

  interface Book {
    id: number;
    cover: string;
    title: string;
    desc: string;
    // Add other properties if needed
  }

  const HandleAddBook = () => {
    navigate("/AddBook");
  };

  return (
    <>
      <NavBar />
      <div className=" bg-gray-300 flex flex-col items-center h-auto pt-[50px]  ">
        <div>
          <h1 className=" my-[20px] text-center font-semibold">
            {" "}
            BROWSE YOUR COLLECTION OF BOOKS
          </h1>
          <div className="grid grid-cols-4 gap-2 ">
            {books.map((book) => (
              <BookTile key={book.id} book={book} />
            ))}
          </div>
        </div>
        <div>
          <button
            onClick={HandleAddBook}
            className="bg-green-600 p-2 rounded-md my-2 text-white font-bold"
          >
            Add Book
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
