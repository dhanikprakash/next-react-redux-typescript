import { SearchResult } from "../../../models/Results";

export default {
  searchKey: '',
  results: {}
};

export type SearchState = {
  searchKey: string,
  results: SearchResult
}