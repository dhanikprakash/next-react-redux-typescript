import { Results, Result, Search } from '../../../models/models';

export default {
  search: { query: '' },
  searchResults: {
    resultCount: 0,
    results: [{}],
  },
};

export type SearchState = {
  search: Search;
  searchResults: Results;
};
