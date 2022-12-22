import React, { useContext } from "react";
import { BookContext } from "../contexts/books.context";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja reading list</h1>
      <p>Currently your rading list {books.length}</p>
    </div>
  );
};

export default Navbar;
