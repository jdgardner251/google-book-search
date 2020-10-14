import React from 'react'
import './Filter.css'

class Filter extends React.Component {
    render() {
        return (
            <div className='filter'>
                <form className='print_type_filter'>
                    <label htmlFor='print_type'>Print Type</label>
                    <select id="print_type" name='print_type'>
                        <option value='All'>All</option>
                        <option value='EBook'>Ebook</option>
                    </select>
                </form>
                <form className='book_type_filter'>
                    <label htmlFor='book_type'>Print Type</label>
                    <select id="book_type" name='book_type'>No Filter
                        <option value='None'>No Filter</option>
                        <option value='type2'>Type2</option>
                    </select>
                </form>

            </div>
        )
    }
}

export default Filter;