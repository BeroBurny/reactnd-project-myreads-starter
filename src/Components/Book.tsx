import * as React from 'react'
import {Shelf} from "../BooksAPI";

type Props = {
  id: string;
  title: string;
  authors: string[];
  img: { thumbnail: string };
  handleShelfChange: (id: string, shelf: string) => void;
  removable?: boolean;
  shelf?: Shelf;
}

const Book = (props: Props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
           style={{
             width: 128,
             height: 193,
             backgroundImage: props.img ? `url(${props.img.thumbnail})` : '',
           }}
        />
        <div className="book-shelf-changer">
          <select
            value="move"
            onChange={(e) => { props.handleShelfChange(props.id, e.target.value); }}
          >
            <option value="move" disabled>Move to...</option>
            {props.shelf !== 'currentlyReading' ? <option value="currentlyReading">Currently Reading</option> : null}
            {props.shelf !== 'wantToRead' ? <option value="wantToRead">Want to Read</option> : null}
            {props.shelf !== 'read' ? <option value="read">Read</option> : null}
            {props.removable ? <option value="none">None</option> : null}
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      {props.authors ?
       props.authors.map((author, index) =>  <div key={index} className="book-authors">{author}</div>) :
        null
      }
    </div>
  </li>
);

export default Book;