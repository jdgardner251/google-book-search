import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <label htmlFor="searchInput">Search</label>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            placeholder="Search Here"
            value={this.props.search}
            onChange={e => this.props.searchInput(e.target.value)}
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
