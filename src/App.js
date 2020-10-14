import React from 'react';
import './App.css'
import SearchArea from './SearchArea/SearchArea'
import BookList from './BookList/BookList'

// API KEY AIzaSyDr7mS_3MEoqOjiEbxVMsl1gCB48N2LrJU

function App() {
  return (
    <main className='App'>
    <h1>Google Book Search</h1>
      <SearchArea />
      <BookList />
    </main>
  );
}

export default App;
