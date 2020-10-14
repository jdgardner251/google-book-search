import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form>
          <label htmlFor="searchInput">Search</label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Search Here"
          />
          <button className="searchInput__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;

{
  /* <div className="search__btn">
                        
                    </div> */
}
