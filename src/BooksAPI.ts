
const api = "https://reactnd-books-api.udacity.com";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

export interface IBook {
  authors: string[];
  id: string;
  imageLinks: { thumbnail: string };
  title: string;
  shelf: Shelf;
}

export type Shelf = 'currentlyReading' | 'wantToRead' | 'read' | 'none';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const get = (bookId: string): Promise<IBook> =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = (): Promise<IBook[]> =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book: IBook, shelf: string) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

export const search = (query: string) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books);
