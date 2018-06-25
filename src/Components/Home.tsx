import * as React from 'react';
import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom";
import {IBook} from "../BooksAPI";

interface IProps {
  books: IBook[];
  handleShelfChange: (id: string, shelf: string) => void;
}

const Home = (props: IProps) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Bookshelf
          title="Currently Reading"
          books={props.books.filter((book: IBook) => book.shelf === 'currentlyReading')}
          handleShelfChange={props.handleShelfChange}
        />
        <Bookshelf
          title="Want to Read"
          books={props.books.filter((book: IBook) => book.shelf === 'wantToRead')}
          handleShelfChange={props.handleShelfChange}
        />
        <Bookshelf
          title="Read"
          books={props.books.filter((book: IBook) => book.shelf === 'read')}
          handleShelfChange={props.handleShelfChange}
        />
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default Home;