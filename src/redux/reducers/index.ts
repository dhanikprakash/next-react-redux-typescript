import { combineReducers } from 'redux';
import searchQueryReducer from './searchQueryReducer';
import searchResultReducer from './searchResultReducer';
import { SearchState } from './initialState'

const rootReducer = combineReducers<SearchState>({
  search: searchQueryReducer,
  searchResults: searchResultReducer,
});
export default rootReducer;
