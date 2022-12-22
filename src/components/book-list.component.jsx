import React, { useContext } from "react";
import { BookContext } from "../contexts/books.context";
import BookDetails from "./book-details.component";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read, Hello free time :)</div>
  );
};

export default BookList;