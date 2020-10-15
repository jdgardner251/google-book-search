import React from "react";
import "./App.css";
import SearchArea from "./SearchArea/SearchArea";
import BookList from "./BookList/BookList";

// API KEY AIzaSyDr7mS_3MEoqOjiEbxVMsl1gCB48N2LrJU

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "",
      printType: "all",
      bookType: "all",
    };
  }

  searchInput = (search) => {
    this.setState({
      search,
    });
  };

  selectPrintType = (printType) => {
    this.setState({
      printType,
    });
  };

  selectBookType = (bookType) => {
    this.setState({
      bookType,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { search, printType, bookType } = this.state
    if(search){
      const filter = bookType === "all" ? "" : `&filter=${bookType}`
      const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDr7mS_3MEoqOjiEbxVMsl1gCB48N2LrJU&printType=${printType}${filter}`
      fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again.')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      })
      .catch(err => {
        console.log('is is the log in the catch method')
      })
    }
  };

  render() {
    return (
      <main className="App">
        <h1>Google Book Search</h1>
        <SearchArea
          searchInput={this.searchInput}
          search={this.state.search}
          selectPrintType={this.selectPrintType}
          selectBookType={this.selectBookType}
          handleSubmit={this.handleSubmit}
        />
        <BookList books={this.state.books} />
      </main>
    );
  }
}

export default App;
