import React from 'react';
import './BookList.css'
import Book from '../Book/Book'

class BookList extends React.Component {
    render() {
        console.log(this.props)
        const items = this
        .props
        .books
        .map(book => 
            <Book 
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors[0]}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                snippet={book.volumeInfo.description}
                key={book.accessInfo.id}
            />
            )
        return (
            <div className='booklist'>
                 {items}
            </div>
           
        )
    }
}

export default BookList;