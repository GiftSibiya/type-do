// IMPORT DEPENDENCIES //
import React, { useEffect, useState } from "react";
import axios from "axios";
import BookTile from "../../components/BookTile";
import { useNavigate } from "react-router";

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
    <div className="flex  flex-col items-center border-2 border-red-800 md:grid-cols-2 bg-slate-600 h-screen w-screen md:bg-green-600 ">
      <div>
        <h1 className=" text-white"> Book Store</h1>
        <div className="grid grid-cols-4 gap-2 ">
          {books.map((book) => (
            <BookTile key={book.id} book={book} />
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={HandleAddBook}
          className="bg-slate-300 p-2 rounded-md my-2"
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

export default Home;
