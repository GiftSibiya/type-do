import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const FetchAllBooks = async () => {
      try {
        const res = await axios.get();
      } catch (error) {}
    };
  }, []);

  return (
    <div className="flex justify-around sm:flex-row flex-col items-center border-2 border-red-800 md:grid-cols-2 bg-slate-600 h-screen w-screen md:bg-green-600 ">
      <div>
        <h1 className="text-3xl font-bold">Welcome to the Home screen</h1>
      </div>
    </div>
  );
}

export default Home;
