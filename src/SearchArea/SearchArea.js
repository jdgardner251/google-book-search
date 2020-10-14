import React from 'react';
import './SearchArea.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';



class SearchArea extends React.Component {
    render() {
        return (
            <div className='searchArea'>
                <Search />
                <Filter />
            </div>
            
        )
    }
}

export default SearchArea;