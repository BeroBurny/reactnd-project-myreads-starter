# MyReads Project

Starter template for the final assessment project for Udacity's React Fundamentals course provided by Udacity Team.

## Usage guide

#### Installation
* install all project dependencies with `npm install` (or `yarn install`)
* start the development server with `npm start` (or `yarn start`)

#### Development note
* Project use Typescript for types checking and extending JavaScript.
  * `tsx` represents `jsx` same as `ts` represents `js`.
  * all types are waited in files where are most used. 
    * (Types for books are in `Book.tsx` for API inside `BooksAPI.ts etc...)
* Project Structure
  * index.tsx - root of React app
  * App.tsx - used for manage book state and route
    * Components
      * Home.tsx - main page witch display shelf
      * Bookshelf.tsx - component for displaying bookshelf
      * Search.tsx - search page
      * Book.tsx - book component
  * BooksAPI.ts - API action for books backend server

#### Important note
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.