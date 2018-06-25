import * as React from 'react';
import Book from "./Book";
import {IBook} from "../BooksAPI";

interface IProps {
  title: string;
  books: IBook[];
  handleShelfChange: (id: string, shelf: string) => void;
}

const Bookshelf = (props: IProps) => (
  <div className="bookshelf">
  <h2 className="bookshelf-title">{props.title}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {props.books.map((book: IBook) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          authors={book.authors}
          img={book.imageLinks}
          handleShelfChange={props.handleShelfChange}
          shelf={book.shelf}
          removable
        />
      ))}
    </ol>
  </div>
</div>
);

export default Bookshelf;