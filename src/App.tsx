import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Search from './Components/Search';
import Home from './Components/Home';

import './App.css'
import * as api from "./BooksAPI";
import {IBook} from "./BooksAPI";

interface IState {
  books: IBook[],
}

class BooksApp extends React.Component<{}, IState> {
  public state = {
    books: []
  };

  public fetchShelf = () => {
    api.getAll().then((result: any) => {
      this.setState({ books: result })
    });
  };

  public componentDidMount() {
    // init books to state
    this.fetchShelf();
  }

  public handleShelfChange = (id: string, shelf: string) => {
    api.update(
      this.state.books.find((book: IBook) => book.id === id) as any,
      shelf
    ).then(() => { this.fetchShelf(); });
  };

  public updateShelf = (book: IBook) => { this.setState({ books: [...this.state.books, book] })}

  public render() {
    const { books } = this.state;
    return (
      <Switch>
        <Route path="/search" render={() => <Search books={books} updateShelf={this.updateShelf} />}/>
        <Route path="/" render={() => <Home  books={books} handleShelfChange={this.handleShelfChange} />}/>
      </Switch>
    )
  }
}

export default BooksApp
