import React from 'react';
import QueryPage from './QueryPage';
import ResultsPage from './ResultsPage';


const SearchPage: React.FC = () => {
    return (
        <>
            <QueryPage></QueryPage>
            <ResultsPage></ResultsPage>
        </>
    )
}
export default SearchPage;