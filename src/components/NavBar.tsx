import React from "react";

function NavBar() {
  return (
    <div className=" fixed flex justify-between w-screen items-center bg-slate-500 h-[50px]">
      <div className="mx-5 text-white">Logo</div>
      <div className="flex justify-between mx-5 w-[250px]">
        <a href="/Home" className="text-white font-bold">
          Home
        </a>
        <a href="/Home" className="text-white font-bold">
          Latest Books
        </a>
        <a href="/Home" className="text-white font-bold">
          Authors
        </a>
      </div>
    </div>
  );
}

export default NavBar;
