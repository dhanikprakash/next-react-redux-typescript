import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import { Results } from "../../../models/models";

type Actions = { type: string, results: Results }

export default function searchResultReducer(
  state = initialState.searchResults,
  action: Actions
): any {
  switch (action.type) {
    case types.LOAD_RESULT_SUCCESS:
      return  action.results;
    default:
      return state;
  }
}
