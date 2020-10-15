import React from 'react';
import './SearchArea.css';
import Search from '../Search/Search';
import Filter from '../Filter/Filter';



class SearchArea extends React.Component {
    render() {
        return (
            <div className='searchArea'>
                <Search 
                    searchInput={this.props.searchInput}
                    search={this.props.search}
                    handleSubmit={this.props.handleSubmit}
                    
                />
                <Filter 
                    selectPrintType={this.props.selectPrintType}
                    selectBookType={this.props.selectBookType}
                />
            </div>
            
        )
    }
}

export default SearchArea;