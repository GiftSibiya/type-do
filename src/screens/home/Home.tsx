// IMPORT DEPENDENCIES //
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  // HOOKS //
  const [books, setBooks] = useState<Book[]>([]);

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

  return (
    <div className="flex justify-around sm:flex-row flex-col items-center border-2 border-red-800 md:grid-cols-2 bg-slate-600 h-screen w-screen md:bg-green-600 ">
      <div>
        <h1 className="text-3xl font-bold">Welcome to the Home screen</h1>
        {books.map((book) => (
          <div key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
