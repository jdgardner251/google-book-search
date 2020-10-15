import React from "react";
import "./Filter.css";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <form className="print_type_filter">
          <label htmlFor="print_type">Print Type</label>
          <select
            onChange={(e) => this.props.selectPrintType(e.target.value)}
            id="print_type"
            name="print_type"
          >
            <option value="all">All</option>
            <option value="books">Book</option>
            <option value="magazines">Magazine</option>
          </select>
        </form>
        <form className="book_type_filter">
          <label htmlFor="book_type">Book Type</label>
          <select
            onChange={(e) => this.props.selectBookType(e.target.value)}
            id="book_type"
            name="book_type"
          >
            No Filter
            <option value="all">All</option>
            <option value="ebooks">Ebooks</option>
            <option value="free-ebooks">Free-Ebooks</option>
            <option value="paid-ebooks">Paid-Ebooks</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filter;
