export const CREATE_SEARCH = "CREATE_SEARCH";
export const LOAD_RESULT_SUCCESS = "LOAD_RESULT_SUCCESS";

interface searchQueryActions {
  type: typeof CREATE_SEARCH
  searchKey: string
}