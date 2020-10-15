import React from "react";
import "./Book.css";

class Book extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="book">
        <h2>{this.props.title}</h2>
        <h3>{this.props.author}</h3>
        <img src={this.props.image} alt='Pic of book cover'></img>
      </div>
    );
  }
}

export default Book;
