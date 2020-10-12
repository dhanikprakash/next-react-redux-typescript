import * as React from 'react';
import SearchQuery from './SearchQuery';
import SearchResponse from './SearchResponse';


const SearchPage: React.FC = () => {
    return (
        <>
            <SearchQuery></SearchQuery>
            <SearchResponse></SearchResponse>
        </>
    )
}
export default SearchPage;