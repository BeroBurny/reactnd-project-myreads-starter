import * as React from 'react';
import {Link} from "react-router-dom";
import * as api from '../BooksAPI';
import Book from "./Book";
import {IBook, Shelf} from "../BooksAPI";

interface IState {
  value: string;
  books: IBook[];
}

interface IProps {
  books: IBook[];
  updateShelf: (book: IBook) => void;
}

class Search extends React.Component<IProps, IState> {
  public state = {
    value: '',
    books: [],
  };

  public filterOutBooksThatAreShowedOnShelf = (shelfBooks: IBook[], searchBooks: IBook[]): IBook[] =>
    searchBooks.filter((book: IBook) => !shelfBooks.filter((shelfBook: IBook) => shelfBook.id === book.id).length);

  public handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: event.target.value});
    if ( event.target.value !== '') {
      api.search(event.target.value)
        .then((books) => {
          if (!books.error) {
            this.setState({ books: this.filterOutBooksThatAreShowedOnShelf(this.props.books, books) });
          } else {
            this.setState({ books: []});
          }
        });
    } else {
      this.setState({ books: []});
    }
  };

  public handleShelfChange = (id: string, shelf: Shelf) => {
    const selecterdBook = this.state.books.find((book: IBook) => book.id === id) as any;
    api.update(selecterdBook, shelf);
    this.props.updateShelf({ ...selecterdBook, shelf });
    this.setState({ books: this.state.books.filter((book: IBook) => book.id !== id)});
  };

  public render() {
    const { value, books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={value}
              onChange={this.handleInputChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book: IBook) => (
              <Book
                key={book.id}
                id={book.id}
                title={book.title}
                authors={book.authors}
                img={book.imageLinks}
                handleShelfChange={this.handleShelfChange}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
